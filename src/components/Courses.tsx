import React, { useState } from 'react';
import { Course, Category } from '../types';
import { COURSES, CATEGORIES } from '../data';
import { Star, Clock, User, Award, ShieldCheck, X, Sparkles, ChevronRight } from 'lucide-react';

interface CoursesProps {
  onEnrollSuccess: (courseTitle: string) => void;
  searchTerm: string;
}

export default function Courses({ onEnrollSuccess, searchTerm }: CoursesProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Filter logic
  const filteredCourses = COURSES.filter((course) => {
    const categoryMatches = selectedCategory === 'all' || course.category === selectedCategory;
    const searchMatches =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatches && searchMatches;
  });

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentEmail) return;
    
    setIsEnrolled(true);
    onEnrollSuccess(selectedCourse?.title || '');
    setTimeout(() => {
      setIsEnrolled(false);
      setSelectedCourse(null);
      setStudentName('');
      setStudentEmail('');
    }, 3500);
  };

  return (
    <section id="courses-section" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-3 font-mono">추천 교육 과정</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green leading-snug">
            더욱{' '}
            <span className="relative inline-block px-2 italic font-normal text-brand-orange">
              직관적
              {/* Highlight underline */}
              <svg className="absolute left-0 bottom-0.5 w-full h-1 text-brand-orange/45" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 102,5" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span>
            이고, 유연하며, 실전적인 배움
          </h2>
          <p className="text-sm text-brand-green/70 mt-4 max-w-md mx-auto">
            디자인 역량별로 전문화된 고품질 맞춤형 세션입니다. 원하는 프로그램을 클릭하여 즉시 수강 자격을 신청해 보세요.
          </p>
        </div>

        {/* Category Pills Slider / Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-brand-green text-brand-bg shadow-sm'
                  : 'bg-white border border-brand-orange/15 text-brand-green hover:border-brand-orange/60'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                id={`course-card-${course.id}`}
                onClick={() => setSelectedCourse(course)}
                className="bg-white rounded-2xl overflow-hidden border border-brand-orange/10 group hover:shadow-xl hover:border-brand-orange/30 transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                {/* Course Image Wrapper */}
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-green/5">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Rating element */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                    <Star size={11} className="fill-brand-orange text-brand-orange" />
                    <span className="text-[10px] font-bold text-brand-green">{course.rating}</span>
                  </div>
                  {/* Price overlay pill */}
                  <div className="absolute bottom-3 right-3 bg-brand-orange text-brand-bg text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                    {course.price}<span className="text-[10px] opacity-80">/{course.billing}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Instructor details */}
                  <div className="flex items-center gap-2 mb-3">
                    <img
                      src={course.instructorAvatar}
                      alt={course.instructorName}
                      className="w-6 h-6 rounded-full object-cover border border-brand-orange/10"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-xs text-brand-green/75 font-medium">{course.instructorName}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-brand-green leading-snug group-hover:text-brand-orange transition-colors mb-4 line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Spacer to push metrics to bottom */}
                  <div className="flex-grow"></div>

                  {/* Course specs footer */}
                  <div className="pt-4 border-t border-brand-orange/5 flex items-center justify-between text-xs text-brand-green/70">
                    <div className="flex items-center gap-1">
                      <Clock size={13} className="text-brand-orange" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={13} className="text-brand-orange" />
                      <span className="bg-brand-pale-green text-brand-green px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide">
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-brand-orange/10">
            <p className="text-brand-green/70 font-medium">검색어와 호환되는 강좌를 찾지 못했습니다.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
              }}
              className="mt-4 text-xs font-bold text-brand-orange hover:underline cursor-pointer"
            >
              카테고리 필터 초기화하기
            </button>
          </div>
        )}

        {/* View all courses button footer */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className="inline-flex items-center gap-2 border-2 border-brand-green hover:bg-brand-green hover:text-brand-bg text-brand-green font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-full transition-all cursor-pointer"
          >
            전체 강좌 보기
            <span className="w-5 h-5 rounded-full bg-brand-orange font-bold text-brand-bg text-[10px] flex items-center justify-center">+</span>
          </button>
        </div>

      </div>

      {/* Stateful Course Enrollment Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 transition-all animate-fade-in">
          <div className="bg-brand-bg border border-brand-orange/10 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            
            {/* Header image */}
            <div className="relative aspect-video bg-emerald-950 sm:block hidden">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-black/40"></div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/80 rounded-full p-2 transition cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Mobile close button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="sm:hidden absolute top-4 right-4 bg-brand-orange text-brand-bg rounded-full p-2 hover:bg-brand-orange/90 transition cursor-pointer z-10"
            >
              <X size={16} />
            </button>

            {/* Content block */}
            <div className="p-6 md:p-8 overflow-y-auto flex-grow">
              <span className="text-[10px] uppercase font-bold tracking-widest font-mono text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-full">
                {selectedCourse.level} 코호트
              </span>
              <h3 className="font-serif text-2xl font-bold text-brand-green leading-snug mt-3 mb-2">
                {selectedCourse.title}
              </h3>

              <div className="flex items-center gap-4 py-3 border-y border-brand-orange/10 mb-5 text-xs text-brand-green/80">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-brand-orange" />
                  <span>총 {selectedCourse.duration}의 커리큘럼</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="fill-brand-orange text-brand-orange" />
                  <span>수강 평점 {selectedCourse.rating}점</span>
                </div>
                <div className="font-bold text-brand-orange ml-auto">
                  {selectedCourse.price} <span className="text-[9px] font-normal">/{selectedCourse.billing}</span>
                </div>
              </div>

              <p className="text-sm text-brand-green/70 leading-relaxed mb-6">
                {selectedCourse.description}
              </p>

              {/* State display - Celebration vs Sign-up form */}
              {isEnrolled ? (
                <div className="bg-brand-green/10 border border-brand-green/30 rounded-2xl p-6 text-center animate-pulse">
                  <div className="w-12 h-12 bg-brand-green text-brand-bg rounded-full flex items-center justify-center mx-auto mb-3">
                    <ShieldCheck size={24} className="text-brand-orange" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-green mb-1">수강 신청 완료! 🎉</h4>
                  <p className="text-xs text-brand-green/75">
                    성공적으로 강좌 수강 신청이 접수되었습니다. 수강 가이드라인 및 상세 메일을 적어주신 이메일로 보내드렸습니다.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnrollSubmit} className="space-y-4">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-brand-green font-mono">수강 자격 승인 신청</h4>
                  <div>
                    <label className="block text-[11px] font-bold text-brand-green/60 uppercase mb-1">성함</label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="예시: 홍길동"
                      className="w-full text-xs bg-white border border-brand-orange/15 rounded-lg px-4 py-2.5 outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-brand-green/60 uppercase mb-1">이메일 주소</label>
                    <input
                      type="email"
                      required
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      placeholder="예시: custom@example.com"
                      className="w-full text-xs bg-white border border-brand-orange/15 rounded-lg px-4 py-2.5 outline-none focus:border-brand-orange"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-brand-orange/95 text-brand-bg font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    신청 확정 및 수강 등록
                    <Sparkles size={13} className="animate-spin-slow" />
                  </button>
                </form>
              )}

              {/* Instructor footer bio */}
              <div className="mt-6 pt-5 border-t border-brand-orange/10 flex items-center gap-3">
                <img
                  src={selectedCourse.instructorAvatar}
                  alt={selectedCourse.instructorName}
                  className="w-10 h-10 rounded-full object-cover outline outline-brand-orange/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand-orange tracking-widest block font-mono">메인 코호트 리더</span>
                  <p className="text-xs font-bold text-brand-green">{selectedCourse.instructorName}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
