import { MousePointer, Diamond, Trophy, HelpCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: 'step-1',
      icon: <MousePointer size={28} className="text-brand-orange" />,
      title: '무료 회원가입',
      description: '단 60초 만에 아주 간단히 계정을 만들고 나만을 위해 검증되고 안전하게 튜닝된 러닝 엔진을 활성화하세요.'
    },
    {
      id: 'step-2',
      icon: <Diamond size={28} className="text-brand-orange" />,
      title: '강좌 및 로드맵 선택',
      description: '학생들의 궁극적 실전 성공을 도울 최적의 리소스를 지원합니다. 엄선된 융합 크리에이티브 실무 코호트를 확인해 보세요.'
    },
    {
      id: 'step-3',
      icon: <Trophy size={28} className="text-brand-orange" />,
      title: '학습 및 실무 인증서 획득',
      description: '장학 지원과 맞춤 지도를 통해 직무 능력을 완벽히 검증할 수 있는 공인 자격 수료증을 획득하고 커리어의 지평을 넓히세요.'
    }
  ];

  return (
    <section id="how-it-works-section" className="py-16 bg-[#F9F8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant deep green card */}
        <div className="bg-brand-green text-brand-bg rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden border border-brand-orange/15">
          
          {/* Visual decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          {/* Title */}
          <div className="text-center max-w-xl mx-auto mb-16 relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-bg leading-tight">
              어떻게{' '}
              <span className="relative inline-block italic font-normal text-brand-orange px-2">
                시작하나요
                {/* Custom circle sketch style underline on works */}
                <svg className="absolute left-0 top-0.5 w-full h-full text-brand-orange/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <ellipse cx="50" cy="50" rx="48" ry="46" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,4" />
                </svg>
              </span>
              ?
            </h2>
            <p className="text-brand-bg/75 text-sm mt-4 font-sans font-medium">
              단 3단계 과정으로 가볍게 시작하고 확실한 가치를 가져가세요
            </p>
          </div>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                id={step.id}
                className="flex flex-col items-center text-center group bg-brand-dark-green/30 border border-white/5 hover:border-brand-orange/20 rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon wrapper */}
                <div className="w-16 h-16 rounded-full bg-brand-dark-green border border-brand-orange/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange/15 transition-all duration-300">
                  {step.icon}
                </div>

                {/* Subtitle */}
                <h3 className="font-serif text-xl font-bold text-brand-bg mb-3 group-hover:text-brand-orange transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-brand-bg/70 leading-relaxed font-sans font-medium">
                  {step.description}
                </p>

                {/* Vertical helper line for layout except last */}
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-[40%] translate-x-[150%] right-[33%] w-10 h-[2px] bg-brand-orange/25 border-dashed" />
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
