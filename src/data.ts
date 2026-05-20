import { Course, Mentor, Testimonial, BlogPost, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: '전체 디자인' },
  { id: 'uiux', name: 'UI/UX 디자인' },
  { id: 'web', name: '웹 개발' },
  { id: 'social', name: '소셜 마케팅' },
  { id: 'game', name: '게임 디자인' },
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: '포토샵으로 기초부터 프로까지 완성하는 그래픽 디자인',
    instructorName: '크리스티안 M. 듀란트',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    duration: '12시간',
    level: '중급자',
    price: '99,000원',
    billing: '년',
    rating: 4.8,
    category: 'uiux',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80',
    description: '포토샵을 활용한 구조적 레이아웃, 타이포그래피 계층 구조, 픽셀 정밀도, 래스터 그래픽 및 고해상도 자산 렌더링을 처음부터 끝까지 학습합니다.'
  },
  {
    id: 'c2',
    title: '플러터를 활용한 기초부터 프로까지 모바일 앱 디자인',
    instructorName: '에마 L. 해링턴',
    instructorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    duration: '11시간',
    level: '전문가',
    price: '19,000원',
    billing: '월',
    rating: 4.9,
    category: 'web',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80',
    description: '추상적인 디자인 흐름을 생동감 넘치는 모바일 서비스로 구축하고, 안정적이며 반응성이 뛰어난 멀티 플랫폼 크로스 컴파일 모바일 레이아웃을 마스터합니다.'
  },
  {
    id: 'c3',
    title: '기초부터 프로까지 정복하는 파이썬 프로그래밍 입문',
    instructorName: '산티아고 G. 드레이턴',
    instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    duration: '10시간',
    level: '헤드',
    price: '1,000,000원',
    billing: '년',
    rating: 4.7,
    category: 'web',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=80',
    description: '핵심 객체 지향 구조, 문법 프레임워크, 고급 알고리즘 루프, 데이터베이스 연동 및 테스트 API 개발을 완벽히 정복합니다.'
  },
  {
    id: 'c4',
    title: '프리미어 프로로 시작하여 프로 레벨 영상 편집 달성하기',
    instructorName: '클로이 M. 휘트모어',
    instructorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    duration: '9시간',
    level: '디렉터',
    price: '19,000원',
    billing: '월',
    rating: 4.8,
    category: 'game',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=80',
    description: '네스티드 트랙, 적응형 멀티캠 프록시, 정밀한 색상 매칭 곡선을 사용하여 연출력 높은 시네마틱 오디오 비주얼 프로젝트를 직접 애니메이션화하고 구성합니다.'
  },
  {
    id: 'c5',
    title: '기초부터 완벽하게 마스터하는 UI/UX 디자인 에센셜',
    instructorName: '가브리엘 O. 이스트우드',
    instructorAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    duration: '8시간',
    level: '마스터',
    price: '100,000원',
    billing: '년',
    rating: 5.0,
    category: 'uiux',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&auto=format&fit=crop&q=80',
    description: '정교한 와이어프레임 설계, 마이크로 인터랙티브 피드백 플로우, 사용자 페르소나 분석, 맞춤형 디자인 토큰 및 효율적인 사용자 여정 분석 루프를 정립합니다.'
  },
  {
    id: 'c6',
    title: '기초부터 탄탄히 배우는 영리한 전환 카피라이팅',
    instructorName: '마테오 R. 올브라이트',
    instructorAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    duration: '7시간',
    level: '인턴',
    price: '180,000원',
    billing: '년',
    rating: 4.6,
    category: 'social',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80',
    description: '타겟을 매료시키는 매력적인 헤드라인, 설득력 있는 첫 줄 훅 메세지, 상호작용적 본문 카피, 행동을 유도하는 완벽한 행동 촉구(CTA)를 디자인해 비즈니스 지표를 도약시킵니다.'
  },
];

export const MENTORS: Mentor[] = [
  {
    id: 'm1',
    name: '크리스티안 M. 듀란트',
    role: '드론 촬영 디렉터',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    rating: 4.9,
  },
  {
    id: 'm2',
    name: '에마 L. 해링턴',
    role: '글로벌 마케팅 총괄',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80',
    rating: 5.0,
  },
  {
    id: 'm3',
    name: '산티아고 G. 드레이턴',
    role: '전문 시나리오 작가',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    rating: 4.8,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: '"장학 지원 제도로 교육을 받은 것은 제 인생의 전환점이 되었습니다. 재정적인 구애 없이 온전히 디자인 공부에만 몰입할 수 있도록 큰 신뢰와 기반을 마련해 주었습니다."',
    name: '엠마 넬슨',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: '1주일 전',
  },
  {
    id: 't2',
    quote: '"이곳에서 안정적인 지원과 커리큘럼을 얻게 된 것은 놀라운 행운이었습니다. 곁길로 새지 않고 프로 레벨의 지식을 학습할 수 있는 환경과 확신을 단단히 굳히게 되었습니다."',
    name: '소피아 마리',
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: '2주일 전',
  },
  {
    id: 't3',
    quote: '"교육 지원은 일상에 가시적인 성장을 주었습니다. 학술 목표를 성실히 전개할 수 있도록 심리적 물리적인 원조와 꼼꼼한 마스터들의 비드백을 한껏 받았습니다."',
    name: '잭슨 리',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: '3주일 전',
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: '온라인 코스는 전 세계 모든 사람에게 유연하고 평등한 자아실현 기회를 열어줍니다.',
    category: '교육',
    date: '2026년 6월 8일',
    author: '에이드리언 로슨',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=650&auto=format&fit=crop&q=80',
    summary: '글로벌 학습 인프라가 어떻게 비동기화 진행을 원조하며, 개인화된 연구 스트림과 민첩한 커리어 전환을 지탱하는지 발견해보세요.'
  },
  {
    id: 'b2',
    title: '온라인 교육 체계는 탁월한 지식을 차별 없이 전달하도록 정제되고 있습니다.',
    category: '건강',
    date: '2026년 6월 9일',
    author: '빅터 레이먼드',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=650&auto=format&fit=crop&q=80',
    summary: '집중력이 핵심이 되는 코딩/디자인 학습 국면에서 인지적 피로 방지 방안과 바른 모니터 안구 휴식 루틴을 우선적으로 조명합니다.'
  },
  {
    id: 'b3',
    title: '현대적인 이러닝 플랫폼은 실시간으로 협업하며 가치를 더하는 강좌를 전개합니다.',
    category: '기술',
    date: '2026년 6월 11일',
    author: '줄리안 크로스웰',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=650&auto=format&fit=crop&q=80',
    summary: '교육 모듈 수준에서 유기적으로 빌트인된 코드 파서 도구, 최신 API 연계 IDE 인터랙션 및 브라우저 기반 sandbox 컴파일 환경을 안내합니다.'
  },
  {
    id: 'b4',
    title: '학술 개혁의 주된 과제는 단기간에 실증적인 직무 수행 기량을 기르는 것입니다.',
    category: '금융',
    date: '2026년 7월 12일',
    author: '네이선 화이트필드',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=650&auto=format&fit=crop&q=80',
    summary: '보편적인 장학 기금 체계, 국가 학업 보조 공여 모델의 장단점 및 신기술 자격 취득 시의 실질적 비용 대비 효능(ROI)을 계량합니다.'
  }
];
