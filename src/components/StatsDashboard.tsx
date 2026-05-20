import { Shield, Smartphone, FileChartLine, Trophy, ArrowRight, ArrowUpRight } from 'lucide-react';

interface StatsDashboardProps {
  onEnrollClick: () => void;
}

export default function StatsDashboard({ onEnrollClick }: StatsDashboardProps) {
  return (
    <section id="stats-section" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-3 font-mono font-bold">체계적인 교육 가치</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green leading-tight">
            지금 바로{' '}
            <span className="relative inline-block px-2 italic font-normal text-brand-orange">
              배움을
              {/* Highlight curve */}
              <svg className="absolute left-0 bottom-1 w-full h-1 text-brand-orange/45" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 102,5" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </span>{' '}
            시작하세요 — 당신의 미래가 기다립니다
          </h2>
          <p className="text-sm text-brand-green/70 mt-3 font-medium">
            첨단 디지털 진단 툴과 체계적인 수강생 예산 보호 장치로 더 풍요로운 미래를 그려보세요
          </p>
        </div>

        {/* Bento Grid Layout exactly mimicking Image 2 structure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: 500K+ Applications and Visual Image (Covers 4 cols md) */}
          <div className="md:col-span-4 bg-white border border-brand-orange/10 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg transition-all">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 h-48">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80"
                alt="Workspace laptop"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-green/10"></div>
            </div>
            <div>
              <span className="font-display text-4xl font-extrabold text-brand-orange block tracking-tight">500K+</span>
              <h3 className="font-serif text-lg font-bold text-brand-green mt-1 mb-2">누적 수강 발급 건수</h3>
              <p className="text-xs text-brand-green/70">50만 건이 넘는 디지털 수료 인증 자격을 완벽한 검토 매뉴얼로 공평하고 타당하게 심사 및 발급했습니다.</p>
            </div>
          </div>

          {/* Card 2: 92% Green box & Scam protection boxes & Enroll CTA (Covers 8 cols md) */}
          <div className="md:col-span-8 flex flex-col gap-6 justify-between">
            
            {/* Top row with 92% brand green card & scam check card in double columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* 92% Box */}
              <div className="bg-brand-green text-brand-bg rounded-3xl p-6 border border-brand-orange/10 shadow-sm flex flex-col justify-between min-h-[160px] group hover:bg-brand-dark-green transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-4xl font-extrabold text-brand-orange">92%</span>
                  <Smartphone size={20} className="text-brand-orange animate-bounce" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-brand-orange font-mono mb-1">장학 조달 승인율</h4>
                  <p className="text-[10px] text-brand-bg/85">장학 지원금을 빠르고 신뢰도 높게 집행합니다. 분산 데이터 무결성 보호 하에 공정하고 즉각적인 혜택이 도달합니다.</p>
                </div>
              </div>

              {/* Scam Check card */}
              <div className="bg-white rounded-3xl p-6 border border-brand-orange/10 shadow-sm flex flex-col justify-between min-h-[160px]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-extrabold text-brand-green">$100M</span>
                  <div className="w-8 h-8 rounded-full bg-brand-orange/15 flex items-center justify-center text-brand-orange">
                    <Shield size={16} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-green mb-1">인격 및 해킹 도용 로깅 방지</h4>
                  <p className="text-[10px] text-brand-green/70">완전히 독립적으로 구동되는 가상 샌드박스로 수강생들의 소중한 신원 정보를 안전망으로 보호 차단합니다.</p>
                </div>
              </div>

            </div>

            {/* Bottom row with Enroll text banner block */}
            <div className="bg-[#FAF7EE] border border-brand-orange/15 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold text-brand-green">
                  저희는 전 세계 50만 명 이상의 디자이너 인재를 배출하며 교육 품질 심사를 완벽히 수행해 냈습니다.
                </p>
                <span className="text-[10px] text-brand-orange font-semibold block mt-0.5">현재 학기의 가용 공석 및 국비 장학 슬롯이 매우 한정되어 있습니다.</span>
              </div>
              <button
                onClick={onEnrollClick}
                className="bg-brand-orange hover:bg-brand-orange/90 text-brand-bg text-xs font-bold px-6 py-3 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shadow-xs"
              >
                지금 수강하기
                <ArrowRight size={13} />
              </button>
            </div>

          </div>

          {/* Card 3: Affordable learning and 41% Orange card (Covers 12 cols md bottom) */}
          <div className="md:col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mt-2">
            
            {/* Column 1 & 2: Affordable detailed metrics */}
            <div className="lg:col-span-2 bg-white border border-brand-orange/10 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-brand-green mb-2">
                  모두를 위한 가장 <span className="text-brand-orange italic">합리적인 비용의 배움</span>
                </h3>
                <p className="text-xs text-brand-green/75 max-w-lg">
                  학업 중 재정적 부담을 최소화하는 것은 배움의 마라톤을 길게 완주하기 위해 대단히 소중한 가치입니다. 정밀한 장비 융통과 비용 맞춤 체계를 설계했습니다.
                </p>
              </div>

              {/* Badges indicators row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 bg-[#FAF8F3] p-4 rounded-xl border border-brand-orange/5">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/15 flex items-center justify-center text-brand-orange shrink-0">
                    <FileChartLine size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-brand-green">주기별 맞춤 평가 정보</h5>
                    <p className="text-[10px] text-brand-green/70">개인별 크리에이티브 지표 성적표와 주차별 목표 피드백이 정기 공유됩니다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-[#FAF8F3] p-4 rounded-xl border border-brand-orange/5">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                    <Trophy size={16} className="text-brand-green" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-brand-green">샌드박스 집중 시뮬레이터</h5>
                    <p className="text-[10px] text-brand-green/70">엄선된 실전 감독 체계 아래에서 비정밀 오류들을 줄이고 효율적으로 실력을 함양합니다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: 41% Orange card */}
            <div className="bg-brand-orange text-brand-bg rounded-3xl p-8 border border-white/5 flex flex-col justify-between shadow-md relative overflow-hidden group min-h-[200px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:scale-110 transition-transform"></div>
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-extrabold tracking-tight">41%</span>
                <ArrowUpRight size={24} className="text-brand-bg" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-bg mb-1 font-mono uppercase tracking-wider">업계 평균 취업 연봉 격차</h4>
                <p className="text-[10px] text-brand-bg/85">공식 포트폴리오 코인을 취득하고 업계로 진출한 수강생의 커리어 연봉 시작선이 기하급수적으로 극대화됩니다.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
