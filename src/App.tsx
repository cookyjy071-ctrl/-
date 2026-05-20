import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Mentors from './components/Mentors';
import StatsDashboard from './components/StatsDashboard';
import StudentsTrust from './components/StudentsTrust';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import { Sparkles, X, Check, Bell } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showToastIcon, setShowToastIcon] = useState<'success' | 'bell'>('success');
  const [activeSection, setActiveSection] = useState('home');

  // Interactive Toast Controller
  const showToast = (message: string, iconType: 'success' | 'bell' = 'success') => {
    setToastMessage(message);
    setShowToastIcon(iconType);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Scroll section listener to highlight correct navigation header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      const sections = [
        { id: 'home-section', value: 'home' },
        { id: 'courses-section', value: 'courses' },
        { id: 'how-it-works-section', value: 'how-it-works' },
        { id: 'testimonials-section', value: 'testimonials' },
        { id: 'mentors-section', value: 'mentors' },
        { id: 'blogs-section', value: 'blogs' },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.value);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const sectionElement = document.getElementById(`${sectionId}-section`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleEnrollSuccess = (courseTitle: string) => {
    showToast(`수강 신청이 성공적으로 완료되었습니다! "${courseTitle}" 코호트에 오신 것을 환영합니다. 등록 상세 가이드를 전송해 드렸습니다! 🚀`, 'success');
  };

  const handleSubscribeSuccess = (email: string) => {
    showToast(`뉴스레터 구독 활성화! "${email}" 주소로 elearni만의 세련된 소식을 정기 수신합니다. 💌`, 'bell');
  };

  const handleJoinCommunitySuccess = () => {
    showToast(`커뮤니티 입장 승인! 1,000명 이상의 현업 크리에이티브 길드 시스템에 성공적으로 입장하셨습니다. 환영합니다! 👋`, 'success');
  };

  const handleGetStartedTrigger = () => {
    // Scroll directly to courses segment to pick a slot
    const coursesSelector = document.getElementById('courses-section');
    if (coursesSelector) {
      coursesSelector.scrollIntoView({ behavior: 'smooth' });
    }
    showToast("추천 교육 과정 중 관심 있는 카드를 선택해 상세 요건 확인 후 신청 버튼을 누르세요!", 'bell');
  };

  return (
    <div id="elearni-app" className="min-h-screen bg-brand-bg flex flex-col relative">
      
      {/* Top sticky active notification toast */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md bg-brand-green border-2 border-brand-orange/30 text-brand-bg px-5 py-4 rounded-3xl shadow-2xl flex items-start gap-3.5 animate-bounce">
          <div className="mt-0.5 shrink-0 bg-brand-orange text-brand-bg p-1.5 rounded-full">
            {showToastIcon === 'success' ? <Check size={14} /> : <Bell size={14} />}
          </div>
          <div className="flex-grow">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-orange font-mono block mb-0.5">실시간 안내 알림</span>
            <p className="text-xs font-semibold leading-relaxed font-sans">{toastMessage}</p>
          </div>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-white/60 hover:text-white shrink-0 cursor-pointer"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Floating Sparkles interactive indicator */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => showToast("팁: 원하는 강좌 카드를 마우스로 클릭하면 상세 자격 안내 및 커리큘럼 요소를 안내받을 수 있습니다! 💡", 'bell')}
          className="w-12 h-12 bg-brand-orange hover:bg-brand-orange/90 text-brand-bg rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer transition-all"
          title="카운셀링 퀵 팁"
        >
          <Sparkles size={18} className="animate-pulse" />
        </button>
      </div>

      {/* Page Header */}
      <Header
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onGetStarted={handleGetStartedTrigger}
      />

      {/* Hero segment */}
      <Hero 
        onSearch={setSearchTerm}
        onJoinCommunity={handleJoinCommunitySuccess}
      />

      {/* Interactive Courses Grid */}
      <Courses
        searchTerm={searchTerm}
        onEnrollSuccess={handleEnrollSuccess}
      />

      {/* Static Visual Timeline Card */}
      <HowItWorks />

      {/* Interactive Testimonial Slider & Submit loops */}
      <Testimonials />

      {/* Mentors Grid Display */}
      <Mentors />

      {/* Stats and Scam checks dashboard */}
      <StatsDashboard
        onEnrollClick={handleGetStartedTrigger}
      />

      {/* Scattered Student Avatars sphere */}
      <StudentsTrust
        onEnrollClick={handleGetStartedTrigger}
      />

      {/* Corporate Magazine Blog Post */}
      <BlogSection />

      {/* Page Footer */}
      <Footer
        onNavClick={handleNavClick}
        onSubscribeSubmit={handleSubscribeSuccess}
      />

    </div>
  );
}
