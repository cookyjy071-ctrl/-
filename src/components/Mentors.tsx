import { MENTORS } from '../data';
import { Star, Award, Sparkles, Send, BookOpen } from 'lucide-react';

export default function Mentors() {
  return (
    <section id="mentors-section" className="py-20 bg-[#F9F8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-3 font-mono">전문가 카운셀링</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green leading-snug">
            독보적인{' '}
            <span className="relative inline-block px-2 italic font-normal text-brand-orange">
              월드클래스
              {/* Highlight circle */}
              <svg className="absolute left-0 top-0 w-full h-full text-brand-orange/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                <ellipse cx="50" cy="50" rx="49" ry="43" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </span>{' '}
            디자이너 멘토단
          </h2>
          <p className="text-sm text-brand-green/70 mt-3 font-medium">
            여러분의 크리에이티브 성장에 날개를 달아줄 검증된 베테랑 메인 길잡이진
          </p>
        </div>

        {/* Mentors Cards Grid exactly mirroring image style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MENTORS.map((mentor) => (
            <div
              key={mentor.id}
              id={`mentor-card-${mentor.id}`}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 border border-brand-orange/10"
            >
              {/* Mentor full bleed Image */}
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Inner Gradient Darkener for readable text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-green via-transparent to-brand-green/10 opacity-75 group-hover:opacity-85 transition-opacity"></div>

              {/* Role Capsule overlay top-left */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm shadow-sm px-4 py-1.5 rounded-full z-10 border border-brand-orange/10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-green font-mono block">
                  {mentor.role}
                </span>
              </div>

              {/* Rating element top-right */}
              <div className="absolute top-5 right-5 bg-brand-orange text-brand-bg px-3 py-1.5 rounded-full flex items-center space-x-1 shadow-sm z-10 scale-95 group-hover:scale-100 transition-all duration-300">
                <Star size={11} className="fill-current text-white" />
                <span className="text-[10px] font-bold">{mentor.rating}</span>
              </div>

              {/* Text elements bottom alignment */}
              <div className="absolute bottom-0 inset-x-0 p-8 z-10 text-brand-bg transform group-hover:translate-y-[-5px] transition-transform duration-300">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-orange mb-1 font-mono">코호트 멘토</p>
                <h3 className="font-serif text-2xl font-bold leading-tight mb-2 group-hover:text-brand-orange transition-colors">
                  {mentor.name}
                </h3>
                
                {/* Additional description shown on hover/active */}
                <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 overflow-hidden transition-all duration-500 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                  <span className="flex items-center gap-1">
                    <BookOpen size={12} className="text-brand-orange" />
                    1:1 밀착 클래스
                  </span>
                  <span className="flex items-center gap-1 hover:text-brand-orange cursor-pointer">
                    대화하기
                    <Send size={11} className="ml-0.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
