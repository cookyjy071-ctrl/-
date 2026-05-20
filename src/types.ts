export interface Course {
  id: string;
  title: string;
  instructorName: string;
  instructorAvatar: string;
  duration: string;
  level: string;
  price: string;
  billing: string;
  rating: number;
  category: string;
  image: string;
  description: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  summary: string;
}

export interface Category {
  id: string;
  name: string;
}
