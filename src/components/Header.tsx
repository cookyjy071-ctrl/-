import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';

interface HeaderProps {
  onNavClick: (section: string) => void;
  onGetStarted: () => void;
  activeSection: string;
}

export default function Header({ onNavClick, onGetStarted, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '홈', value: 'home' },
    { label: '강좌 소개', value: 'courses' },
    { label: '학습 로드맵', value: 'how-it-works' },
    { label: '수강 후기', value: 'testimonials' },
    { label: '전문 멘토', value: 'mentors' },
    { label: '블로그', value: 'blogs' },
  ];

  const handleItemClick = (val: string) => {
    onNavClick(val);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-bg/90 backdrop-blur-md shadow-sm border-b border-brand-orange/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            id="header-logo"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleItemClick('home')}
          >
            <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-brand-bg group-hover:scale-105 transition-transform duration-300">
              <GraduationCap size={20} className="text-brand-orange" />
            </div>
            <span className="font-serif text-2xl font-bold text-brand-green tracking-tight relative">
              elearni
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-orange ml-0.5 absolute bottom-1.5 -right-3 animate-ping-slow"></span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-orange ml-0.5 absolute bottom-1.5 -right-3"></span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                id={`nav-${item.value}`}
                onClick={() => handleItemClick(item.value)}
                className={`font-sans text-sm font-medium transition-colors duration-300 cursor-pointer relative py-1 ${
                  activeSection === item.value
                    ? 'text-brand-orange'
                    : 'text-brand-green/80 hover:text-brand-orange'
                }`}
              >
                {item.label}
                {activeSection === item.value && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action */}
          <div id="header-actions" className="hidden md:flex items-center space-x-4">
            <button
              id="btn-login"
              onClick={() => handleItemClick('blogs')}
              className="text-sm font-medium text-brand-green hover:text-brand-orange transition-colors cursor-pointer"
            >
              로그인
            </button>
            <button
              id="btn-get-started"
              onClick={onGetStarted}
              className="bg-brand-orange hover:bg-brand-orange/95 text-brand-bg font-sans text-sm font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            >
              지금 시작하기
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={onGetStarted}
              className="bg-brand-orange text-brand-bg text-xs font-semibold px-4 py-2 rounded-full cursor-pointer"
            >
              시작
            </button>
            <button
              id="btn-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-green focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden fixed inset-x-0 top-[60px] bg-brand-bg border-b border-brand-orange/10 transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[380px] opacity-100 py-6 px-4 shadow-xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.value}
              id={`mobile-nav-${item.value}`}
              onClick={() => handleItemClick(item.value)}
              className={`text-left text-base font-semibold py-2 transition-colors duration-300 ${
                activeSection === item.value ? 'text-brand-orange pl-2 border-l-2 border-brand-orange' : 'text-brand-green/80'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-brand-orange/10 flex flex-col space-y-3">
            <button
              id="mobile-btn-login"
              onClick={() => handleItemClick('blogs')}
              className="text-center text-sm font-semibold text-brand-green py-2 cursor-pointer"
            >
              로그인
            </button>
            <button
              id="mobile-btn-get-started"
              onClick={onGetStarted}
              className="bg-brand-orange text-center text-brand-bg text-sm font-semibold py-3 rounded-full shadow-md cursor-pointer flex items-center justify-center gap-1.5"
            >
              지금 시작하기
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
