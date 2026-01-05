export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  author: string;
  date: string;
}

export interface Teacher {
  id: number;
  name: string;
  role: string;
  image: string;
  color: string;
}

export enum QuizState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  QUESTION = 'QUESTION',
  RESULT = 'RESULT',
  ERROR = 'ERROR'
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // Index
  explanation: string;
}

export type AgeGroup = '6-8' | '9-11' | '12-14' | '15-17';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  ageGroup: AgeGroup;
  duration: string; // e.g. "3-5 mins"
  thumbnail: string;
  category: 'Body' | 'Safety' | 'Emotion' | 'Respect';
  content: {
    introduction: string;
    mainPoints: {
      title: string;
      text: string;
      image?: string; // Illustration URL
    }[];
    interactive?: QuizQuestion; // Utilizing existing QuizQuestion type
  };
}