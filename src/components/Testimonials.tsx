import React, { useState } from 'react';
import { TESTIMONIALS as INITIAL_TESTIMONIALS } from '../data';
import { Testimonial } from '../types';
import { Star, Flame, PenTool, Sparkles, Check } from 'lucide-react';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newQuote, setNewQuote] = useState('');
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuote || !newName) return;

    const newTestimonial: Testimonial = {
      id: `dynamic-${Date.now()}`,
      quote: `"${newQuote}"`,
      name: newName,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', // Fallback
      rating: newRating,
      date: '방금 전',
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setFeedbackSent(true);
    setNewQuote('');
    setNewName('');
    setNewRating(5);
    
    setTimeout(() => {
      setFeedbackSent(false);
      setShowReviewForm(false);
    }, 2500);
  };

  return (
    <section id="testimonials-section" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-3 font-mono">수강 후기</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green leading-snug">
            학생들이 들려주는 {' '}
            <span className="relative inline-block px-2 italic font-normal text-brand-orange">
              리얼 후기
              {/* Star graphic helper */}
              <svg className="absolute left-0 bottom-1 w-full h-1 text-brand-orange/45" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 102,5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>{' '}
            와 만족도
          </h2>
          <p className="text-sm text-brand-green/70 mt-3 font-medium">
            전 세계 수많은 졸업생들이 실무에서 보증하는 확실한 학습 효과
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Static Flame Promo Card */}
          <div className="bg-brand-orange text-brand-bg rounded-3xl p-8 flex flex-col justify-between shadow-md lg:h-full min-h-[250px] relative overflow-hidden group border border-white/5">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full group-hover:scale-110 transition-transform"></div>
            <div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-bg mb-6">
                <Flame size={20} className="text-brand-bg fill-current" />
              </div>
              <p className="font-serif text-lg font-bold leading-relaxed mb-4">
                "이 강좌는 제 커리어를 완전히 바꿨습니다. 대단히 헌신적인 디자이너 멘토진이었습니다."
              </p>
            </div>
            <div className="mt-4">
              <span className="text-[10px] tracking-wider uppercase font-semibold font-mono text-white/80 block">인증된 코호트 만족 지수</span>
              <p className="text-xs font-bold font-sans">99% 만족도 달성</p>
            </div>
          </div>

          {/* Dinamic Cards Grid (3 Columns) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test) => (
              <div
                key={test.id}
                id={`testimonial-${test.id}`}
                className="bg-white rounded-3xl p-6 border border-brand-orange/10 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-brand-orange/30 transition-all duration-300 transform hover:-translate-y-1 h-full"
              >
                <div>
                  {/* Star Rating Grid */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={`${
                          i < test.rating ? 'fill-brand-orange text-brand-orange' : 'text-brand-orange/20'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs text-brand-green/80 italic leading-relaxed mb-6 font-sans">
                    {test.quote}
                  </p>
                </div>

                {/* Profile Grid */}
                <div className="flex items-center gap-3 pt-4 border-t border-brand-orange/5">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-9 h-9 rounded-full object-cover border border-brand-orange/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-brand-green">{test.name}</h4>
                    <span className="text-[10px] text-brand-green/60 block">{test.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Dynamic Interactions Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-dark-green text-brand-bg font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-sm cursor-pointer transition-colors"
          >
            <PenTool size={14} className="text-brand-orange" />
            {showReviewForm ? '작성 취소' : '나의 생생한 후기 등록하기'}
          </button>
        </div>

        {/* Toggle Form Overlay */}
        {showReviewForm && (
          <div className="mt-8 max-w-xl mx-auto bg-white border border-brand-orange/15 rounded-3xl p-6 md:p-8 shadow-lg animate-fade-in">
            {feedbackSent ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-brand-green text-brand-bg rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check size={24} className="text-brand-orange" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-green">성공적으로 등록 완료!</h3>
                <p className="text-xs text-brand-green/75 mt-1">진솔하고 소중한 의견을 들려주셔서 진심으로 감사드립니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-brand-green">수강 후기 남기기</h3>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className="cursor-pointer"
                      >
                        <Star
                          size={16}
                          className={`${
                            star <= newRating ? 'fill-brand-orange text-brand-orange' : 'text-brand-orange/20'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-brand-green/60 uppercase mb-1">성함</label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="예시: 홍길동"
                    className="w-full text-xs bg-brand-bg border border-brand-orange/10 rounded-xl px-4 py-3 outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-brand-green/60 uppercase mb-1">상세 후기 피드백 내용</label>
                  <textarea
                    required
                    rows={3}
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    placeholder="수강 중 겪었던 생생한 성장의 에피소드를 나누어 주세요..."
                    className="w-full text-xs bg-brand-bg border border-brand-orange/10 rounded-xl px-4 py-3 outline-none focus:border-brand-orange resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange/95 text-brand-bg font-bold text-xs uppercase tracking-widest py-3 rounded-xl cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                >
                  작성 완료 및 게시하기
                  <Sparkles size={12} className="animate-pulse-slow" />
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
