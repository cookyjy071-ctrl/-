import React, { useState } from 'react';
import { Search, Users, ArrowRight, Play, Sparkles } from 'lucide-react';

interface HeroProps {
  onSearch: (term: string) => void;
  onJoinCommunity: () => void;
}

export default function Hero({ onSearch, onJoinCommunity }: HeroProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    const coursesSection = document.getElementById('courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home-section" className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-brand-bg relative">
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Under-header Trust Badge */}
        <div className="flex flex-col items-center justify-center text-center mt-4 mb-6">
          <div className="inline-flex items-center gap-2 bg-[#FAF7EE] border border-brand-orange/20 px-4 py-1.5 rounded-full shadow-sm">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80"
                alt="user avatar"
                className="w-6 h-6 rounded-full border border-brand-bg object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80"
                alt="user avatar"
                className="w-6 h-6 rounded-full border border-brand-bg object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80"
                alt="user avatar"
                className="w-6 h-6 rounded-full border border-brand-bg object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs sm:text-xs font-semibold text-brand-green tracking-wide">
              전 세계 <span className="text-brand-orange">240만 명 이상의 수강생</span>이 선택한 평점 <span className="font-bold">4.8점</span>의 디자인 교육 ⭐
            </p>
          </div>
        </div>

        {/* Hero Copy */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-green leading-[1.1] mb-6">
            온라인 교육을 통해{' '}
            <span className="relative inline-block px-4 py-1 italic font-normal text-brand-orange">
              {/* Highlight Circle Shape SVG beneath the text */}
              당신의 미래
              <svg 
                className="absolute left-0 top-0 w-full h-full text-brand-orange/30 -z-10" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0,50 C20,10 80,10 100,50 C80,90 20,90 0,50" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeDasharray="1000" 
                  className="animate-[pulse_4s_infinite]"
                />
              </svg>
            </span>{' '}
            를 새롭게 디자인하세요
          </h1>
          <p className="text-brand-green/70 text-base sm:text-lg max-w-xl mx-auto mb-8 font-sans">
            글로벌 디자인 업계 최고 전문가들이 설계한 맞춤형 자격 강좌를 탐색하고, 실전 디지털 스킬과 포트폴리오를 완벽하게 빌드업해 보세요.
          </p>

          {/* Search bar */}
          <form 
            onSubmit={handleSubmit}
            className="flex items-center max-w-lg mx-auto bg-white rounded-full p-1.5 shadow-md border border-brand-orange/10 focus-within:ring-2 focus-within:ring-brand-orange/30 transition-all"
          >
            <div className="flex-1 flex items-center pl-4 gap-2">
              <Search size={18} className="text-brand-green/40 min-w-[18px]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="예: 그래픽 디자인, UI/UX, 플러터..."
                className="w-full text-sm text-brand-green outline-none bg-transparent placeholder-brand-green/30"
              />
            </div>
            <button
              type="submit"
              className="bg-brand-green hover:bg-brand-dark-green text-brand-bg text-sm font-semibold px-6 py-2.5 rounded-full transition-all cursor-pointer flex items-center gap-1"
            >
              검색
              <ArrowRight size={14} />
            </button>
          </form>
        </div>

        {/* Collage grid exactly mimicking the image styling */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Main Classroom visual */}
          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80"
              alt="Design students working together"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/70 to-transparent flex items-end p-5">
              <div className="text-brand-bg">
                <span className="text-[10px] tracking-wider uppercase font-semibold text-brand-orange">협업형 실전 코호트</span>
                <p className="font-serif text-lg font-bold leading-tight">동료들과 양방향 소통 채널로 공부하기</p>
              </div>
            </div>
          </div>

          {/* Card 2: 85% Growth green card & 200+ skills black card stacked vertically */}
          <div className="flex flex-col gap-5 justify-between">
            {/* Green stats card */}
            <div className="flex-1 bg-brand-green text-brand-bg rounded-2xl p-6 shadow-md flex flex-col justify-between border border-brand-orange/10 hover:shadow-lg transition-shadow">
              <span className="font-display text-4xl font-bold tracking-tight text-brand-orange">85%</span>
              <div>
                <h4 className="text-sm font-semibold mb-1">실무 역량 개선 보고</h4>
                <p className="text-xs text-brand-bg/75">이러닝 수강생 평균 디지털 전문 기량 향상도.</p>
              </div>
            </div>
            {/* Black/Dark Green stats card */}
            <div className="flex-1 bg-brand-dark-green text-brand-bg rounded-2xl p-6 shadow-md flex flex-col justify-between border border-brand-orange/10 hover:shadow-lg transition-shadow">
              <span className="font-display text-4xl font-bold tracking-tight text-brand-orange">200+</span>
              <div>
                <h4 className="text-sm font-semibold mb-1">프리미엄 세션 강좌</h4>
                <p className="text-xs text-brand-bg/75">크리에이티브 코딩 및 첨단 UI/UX 디자인 과정 목록.</p>
              </div>
            </div>
          </div>

          {/* Card 3: Orange "Join 1000 people" + Instructor profile overlapping */}
          <div className="bg-brand-orange text-brand-bg rounded-2xl p-6 shadow-md flex flex-col justify-between border border-white/10 hover:shadow-lg transition-all transform hover:-translate-y-1 relative overflow-hidden group">
            {/* Abstract decorative lines */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/5 group-hover:scale-110 transition-transform"></div>
            
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-brand-bg mb-4">
                <Sparkles size={20} className="text-brand-bg animate-pulse" />
              </div>
              <h3 className="font-serif text-2xl font-bold leading-snug mb-2">
                더 힘차게 나아가는 <span className="italic">1,000명의 멤버</span>들과 동행하기
              </h3>
            </div>

            <button
              onClick={onJoinCommunity}
              className="mt-4 bg-brand-green hover:bg-brand-dark-green text-brand-bg text-xs font-semibold px-4 py-2.5 rounded-full self-start transition-all cursor-pointer flex items-center gap-1"
            >
              커뮤니티 가입하기
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Card 4: Inspired person image & custom linear card */}
          <div className="flex flex-col gap-5 justify-between">
            {/* Professional image */}
            <div className="flex-1 relative rounded-2xl overflow-hidden shadow-md h-32 group">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=500&auto=format&fit=crop&q=80"
                alt="Creative developer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-green/30 hover:bg-transparent transition-colors"></div>
              {/* Play video overlay button */}
              <div className="absolute top-3 right-3 bg-brand-orange text-brand-bg w-8 h-8 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <Play size={12} className="ml-0.5 fill-current" />
              </div>
            </div>

            {/* Custom Linear Art card styled precisely like image */}
            <div className="flex-1 bg-brand-green rounded-2xl p-5 shadow-sm border border-brand-orange/15 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path d="M 10 50 Q 50 10 90 50 T 170 50" stroke="#C87E50" fill="none" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-orange font-mono block mb-2">핵심 교육 이념</span>
                <p className="font-serif text-lg font-bold text-brand-bg leading-tight">품질, 뛰어난 성과 그리고 기량 평등</p>
              </div>
              <p className="text-[10px] text-brand-bg/65">뚜렷한 목표 의식과 공인 포트폴리오 취득 기회.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
