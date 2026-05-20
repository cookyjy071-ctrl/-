import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { BookOpen, Calendar, User, ArrowRight, X, Heart, MessageSquare } from 'lucide-react';

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [likedArticles, setLikedArticles] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedArticles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Split posts exactly like image layout:
  // Post 1 (Education) is the large post on left
  // Posts 2, 3, 4 are the list-style stacked posts on the right
  const mainPost = BLOG_POSTS[0];
  const listPosts = BLOG_POSTS.slice(1);

  return (
    <section id="blogs-section" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-3 font-mono">크리에이티브 미디어</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green leading-snug">
            교육 정보 및{' '}
            <span className="relative inline-block px-2 italic font-normal text-brand-orange">
              트렌드 인사이트
              {/* Highlight curve */}
              <svg className="absolute left-0 bottom-1 w-full h-1 text-brand-orange/45" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 102,5" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </span>
          </h2>
          <p className="text-sm text-brand-green/70 mt-3 font-medium">
            디자인 트렌드, 업계 실무 팁, 그리고 최신 크리에이티브 학습 소식
          </p>
        </div>

        {/* Magazine Style Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: Big Highlight Article (Covers 6 cols lg) */}
          <div
            id={`blog-card-${mainPost.id}`}
            onClick={() => setSelectedArticle(mainPost)}
            className="lg:col-span-6 bg-white border border-brand-orange/10 rounded-[2rem] overflow-hidden group hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-brand-green/5">
              <img
                src={mainPost.image}
                alt={mainPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-brand-orange text-brand-bg text-[10px] uppercase font-bold px-3 py-1 rounded-full font-mono tracking-wider">
                {mainPost.category}
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                {/* Date & Author row */}
                <div className="flex items-center gap-4 text-xs text-brand-green/60 mb-3 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-brand-orange" />
                    {mainPost.date}
                  </span>
                  <span>•</span>
                  <span>{mainPost.author}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-brand-green group-hover:text-brand-orange transition-colors mb-4 leading-snug">
                  {mainPost.title}
                </h3>
                <p className="text-xs text-brand-green/70 leading-relaxed mb-6">
                  {mainPost.summary}
                </p>
              </div>

              {/* Card CTA Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-brand-orange/5 text-xs">
                <span className="font-bold text-brand-green hover:text-brand-orange transition-colors flex items-center gap-1.5 self-start">
                  상세 보기
                  <ArrowRight size={13} />
                </span>
                
                <button
                  onClick={(e) => toggleLike(mainPost.id, e)}
                  className="p-2 rounded-full hover:bg-brand-orange/10 transition-colors"
                >
                  <Heart
                    size={15}
                    className={`${likedArticles[mainPost.id] ? 'fill-brand-orange text-brand-orange' : 'text-brand-orange/40'}`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Sub-Article list columns (Covers 6 cols lg) */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            {listPosts.map((post) => (
              <div
                key={post.id}
                id={`blog-card-${post.id}`}
                onClick={() => setSelectedArticle(post)}
                className="bg-white border border-brand-orange/10 rounded-2xl p-4 sm:p-5 hover:shadow-lg hover:border-brand-orange/20 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row gap-5 items-stretch h-full group"
              >
                {/* Thumbnail image on left */}
                <div className="w-full sm:w-1/3 aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden bg-brand-green/5 shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Text column on right */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange font-mono tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-brand-green/55">{post.date}</span>
                    </div>

                    <h4 className="font-serif text-sm sm:text-base font-bold text-brand-green group-hover:text-brand-orange transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h4>
                  </div>

                  {/* Tiny details card footer */}
                  <div className="flex items-center justify-between border-t border-brand-orange/5 pt-2 mt-4 text-[10px]">
                    <span className="text-brand-green/60 font-medium">
                      {post.author}
                    </span>
                    
                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => toggleLike(post.id, e)}
                        className="p-1 rounded-full hover:bg-brand-orange/10 transition-colors"
                      >
                        <Heart
                          size={13}
                          className={`${likedArticles[post.id] ? 'fill-brand-orange text-brand-orange' : 'text-brand-orange/40'}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Stateful Blog Article Reader Pop-up modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-brand-bg border border-brand-orange/15 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative max-h-[85vh] flex flex-col">
            
            {/* Header full image */}
            <div className="relative aspect-[16/10] bg-emerald-950">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent"></div>
              {/* Close badge overlay */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-brand-orange text-brand-bg hover:scale-105 rounded-full p-2.5 shadow-md transition cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            {/* Read Content area */}
            <div className="p-6 md:p-8 overflow-y-auto flex-grow">
              <div className="flex items-center gap-3 text-xs mb-3 font-semibold text-brand-orange">
                <span className="uppercase tracking-wider font-mono bg-brand-orange/15 px-2.5 py-0.5 rounded">
                  {selectedArticle.category}
                </span>
                <span>•</span>
                <span className="text-brand-green/60 font-normal">{selectedArticle.date}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-brand-green leading-snug mb-4">
                {selectedArticle.title}
              </h3>

              <div className="flex items-center gap-2 text-xs font-semibold text-brand-green/80 pb-4 border-b border-brand-orange/10 mb-6">
                <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center text-brand-bg font-bold font-serif text-[10px]">
                  EL
                </div>
                <span>{selectedArticle.author}</span>
                <span className="ml-auto text-brand-orange uppercase font-mono tracking-widest text-[10px]">읽기 시간 약 5분</span>
              </div>

              {/* Real paragraph contents in Korean */}
              <div className="space-y-4 text-xs sm:text-xs text-brand-green/85 leading-relaxed">
                <p>
                  이러닝과 크리에이티브 디자인 영역은 새로운 기술의 도입과 함께 하루가 다르게 변화하고 있습니다. 단순 학문적 지식을 넘어, 실질적인 경험과 산업 트렌드를 읽는 안목을 함양하는 것은 디자이너의 가장 큰 무기입니다.
                </p>
                <p>
                  우리의 목표는 현대 크리에이티브 커리큘럼을 실무 요구사항에 완벽하게 맞추는 것입니다. 비동기식 실시간 코호트를 설계함으로써, 수강생들은 업계 거장인 크리스티안 듀란트, 에마 해링턴, 산티아고 드레이턴 등으로부터 직접 과제를 피드백받고 동료들과 실시간 협업 경험을 완벽하게 확보할 수 있습니다.
                </p>
                <p className="font-serif italic font-bold text-brand-orange py-2 border-l-2 border-brand-orange pl-4 bg-brand-orange/5 rounded-r">
                  "장학금 제도와 정밀한 지도체계가 수강생들의 포트폴리오 빌드 과정을 스트레스 없이 즐거운 지평으로 안내합니다."
                </p>
                <p>
                  2026년 크리에이티브 업계 혁신 마일스톤을 실현하면서, 각 졸업생들이 현업에서 자립하며 실시간으로 고유의 디자인 영역을 넓혀나갈 수 있도록 완벽히 돕겠습니다. elearni의 차기 업데이트를 계속 주목해 주세요!
                </p>
              </div>

              {/* Dynamic feedback likes */}
              <div className="mt-8 pt-5 border-t border-brand-orange/10 flex items-center justify-between text-xs text-brand-green/60 font-semibold font-mono">
                <button
                  onClick={(e) => toggleLike(selectedArticle.id, e)}
                  className="flex items-center gap-1.5 bg-[#FAF7EE] hover:bg-[#FAF7EE]/90 border border-brand-orange/15 px-4 py-2 rounded-full cursor-pointer text-brand-orange"
                >
                  <Heart size={14} className={likedArticles[selectedArticle.id] ? 'fill-current' : ''} />
                  {likedArticles[selectedArticle.id] ? '좋아요 취소' : '좋아요'}
                </button>
                <div className="flex items-center gap-1">
                  <MessageSquare size={13} />
                  <span>댓글 3개</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
