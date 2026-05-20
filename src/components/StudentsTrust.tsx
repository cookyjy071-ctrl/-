import { ArrowRight, GraduationCap, Users, ShieldCheck } from 'lucide-react';

interface StudentsTrustProps {
  onEnrollClick: () => void;
}

export default function StudentsTrust({ onEnrollClick }: StudentsTrustProps) {
  // Diverse Unsplash student avatars
  const avatars = [
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', size: 'w-12 h-12', pos: 'top-10 left-10 md:left-24' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', size: 'w-16 h-16', pos: 'top-20 left-24 md:left-48' },
    { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', size: 'w-10 h-10', pos: 'top-40 left-6 md:left-12' },
    { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80', size: 'w-14 h-14', pos: 'bottom-16 left-12 md:left-32' },
    { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80', size: 'w-12 h-12', pos: 'bottom-6 left-28 md:left-64' },
    
    // Right side
    { src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80', size: 'w-16 h-16', pos: 'top-8 right-12 md:right-32' },
    { src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80', size: 'w-10 h-10', pos: 'top-24 right-24 md:right-64' },
    { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80', size: 'w-14 h-14', pos: 'bottom-24 right-10 md:right-20' },
    { src: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&auto=format&fit=crop&q=80', size: 'w-12 h-12', pos: 'bottom-6 right-20 md:right-48' },
    { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80', size: 'w-14 h-14', pos: 'top-36 right-6 md:right-16' },
  ];

  return (
    <section className="py-24 bg-[#F9F8F3] relative overflow-hidden">
      {/* Floating scattered background avatars (mimicking image scattered effect) */}
      <div className="absolute inset-0 pointer-events-none opacity-40 md:opacity-100">
        {avatars.map((av, idx) => (
          <div
            key={idx}
            className={`absolute ${av.pos} ${av.size} rounded-full overflow-hidden border-2 border-brand-orange/20 shadow-md transform hover:scale-110 transition-transform duration-300 animate-float`}
            style={{ animationDelay: `${idx * 0.4}s` }}
          >
            <img
              src={av.src}
              alt="Student"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-12">
        <div className="w-12 h-12 bg-brand-green text-brand-bg rounded-full flex items-center justify-center mx-auto mb-6">
          <Users size={22} className="text-brand-orange" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green leading-snug mb-6">
          다양한 산업군의{' '}
          <span className="relative inline-block px-2 italic font-normal text-brand-orange">
            수강생들
            {/* Outline curve element */}
            <svg className="absolute left-0 top-0.5 w-full h-full text-brand-orange/30" viewBox="0 0 100 100" preserveAspectRatio="none">
              <ellipse cx="50" cy="50" rx="49" ry="43" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </span>{' '}
          이 신뢰하는 아카데미
        </h2>

        <p className="text-sm text-brand-green/75 max-w-md mx-auto mb-8 font-medium">
          전문적인 멘토링 지원 아래 실무 역량을 다지고, 합격 포트폴리오를 만들어 낸 수천 명의 선배 수강생들과 동행하세요
        </p>

        {/* Pulsing Highlight pill button */}
        <button
          onClick={onEnrollClick}
          className="bg-brand-orange hover:bg-brand-orange/95 text-brand-bg font-sans font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-[1.03] cursor-pointer"
        >
          지금 수강하기
          <ArrowRight size={15} />
        </button>

        {/* Tiny visual assurance bullet points */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-[10px] uppercase font-bold text-brand-green/60 tracking-widest font-mono">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-brand-orange" />
            안전망 보장 등록 자격
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <GraduationCap size={14} className="text-brand-orange" />
            최고급 직무 디자인 멘토
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Users size={14} className="text-brand-orange" />
            1,000명 이상의 수료생 배출
          </span>
        </div>
      </div>
    </section>
  );
}
