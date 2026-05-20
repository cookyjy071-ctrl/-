import { GraduationCap, Mail, MapPin, ArrowUpRight, Instagram, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
  onNavClick: (section: string) => void;
  onSubscribeSubmit: (email: string) => void;
}

export default function Footer({ onNavClick, onSubscribeSubmit }: FooterProps) {
  const handleLogoClick = () => {
    onNavClick('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: '홈', value: 'home' },
    { label: '강좌 소개', value: 'courses' },
    { label: '학습 로드맵', value: 'how-it-works' },
    { label: '수강 후기', value: 'testimonials' },
    { label: '전문 멘토', value: 'mentors' },
    { label: '블로그', value: 'blogs' },
  ];

  return (
    <footer className="bg-brand-dark-green text-brand-bg pt-20 pb-8 relative overflow-hidden border-t border-brand-orange/10">
      {/* Background radial soft light glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand & Promo statement (Covers 5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={handleLogoClick}
            >
              <div className="w-9 h-9 rounded-full bg-brand-green flex items-center justify-center text-brand-bg group-hover:scale-105 transition-transform">
                <GraduationCap size={18} className="text-brand-orange" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">elearni</span>
            </div>

            <p className="font-serif text-xl md:text-2xl font-bold text-white leading-snug">
              전문가 주도의 맞춤형 교육 과정을 통해 실무 기량을 높이고, 더 눈부시고 성공적인 커리어를 이뤄보세요.
            </p>

            {/* Quick Contact metrics */}
            <div className="space-y-3 pt-4 text-xs font-medium text-brand-bg/75">
              <a 
                href="mailto:info@elearning.com" 
                className="flex items-center gap-2 hover:text-brand-orange transition-colors"
              >
                <Mail size={14} className="text-brand-orange" />
                info@elearning.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-orange shrink-0 mt-0.5" />
                <span className="leading-relaxed text-brand-bg/60">
                  Level 4 130/144 Cleveland Street,<br />
                  Chippendale NSW 2008 Australia
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Covers 4 cols) */}
          <div className="md:col-span-4 space-y-6 md:pl-10">
            <h4 className="text-xs uppercase font-bold tracking-widest text-brand-orange font-mono">바로가기</h4>
            <ul className="space-y-3 font-serif text-base font-semibold">
              {navLinks.map((link) => (
                <li key={link.value}>
                  <button
                    onClick={() => onNavClick(link.value)}
                    className="hover:text-brand-orange transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Details & Custom Newsletter (Covers 3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs uppercase font-bold tracking-widest text-brand-orange font-mono font-bold">소셜 미디어</h4>
            <div className="flex flex-col space-y-3 text-xs font-semibold">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 hover:text-brand-orange transition-colors"
              >
                Instagram
                <ArrowUpRight size={12} className="text-brand-orange" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1 hover:text-brand-orange transition-colors"
              >
                LinkedIn
                <ArrowUpRight size={12} className="text-brand-orange" />
              </a>
            </div>

            {/* Newsletter Subscription input */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <h5 className="text-[10px] uppercase font-bold tracking-widest text-brand-orange font-mono">뉴스레터 이메일 구독</h5>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const input = form.elements.namedItem('newsEmail') as HTMLInputElement;
                  if (input.value) {
                    onSubscribeSubmit(input.value);
                    input.value = '';
                  }
                }}
                className="flex bg-white/5 rounded-full p-1 border border-white/10 focus-within:border-brand-orange/40 transition-colors"
              >
                <input
                  type="email"
                  name="newsEmail"
                  required
                  placeholder="이메일 주소 입력..."
                  className="bg-transparent text-xs text-white px-3 py-2 outline-none flex-grow placeholder-white/30"
                />
                <button
                  type="submit"
                  className="bg-brand-orange hover:bg-brand-orange/90 text-brand-bg text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-full transition-all cursor-pointer"
                >
                  구독
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Metadata & Giant Overlay stamp */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-brand-bg/50">
          <p className="flex items-center gap-1 justify-center sm:justify-start">
            &copy; 2026 Designed by <span className="text-brand-orange">framerdevs</span> • React 및 
            <Heart size={11} className="text-brand-orange fill-current" />로 제작됨
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-brand-orange">
            2026년 5월 20일 수요일
          </p>
        </div>

        {/* Gigantic architectural ELEARNING background letter stamps precisely like bottom of images */}
        <div className="mt-12 select-none pointer-events-none text-center">
          <h1 className="font-serif text-[10vw] font-black tracking-widest text-[#15463D] leading-none select-none select-none">
            ELEARNING
          </h1>
        </div>

      </div>
    </footer>
  );
}
