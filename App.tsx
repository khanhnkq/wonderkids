import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TopicSelection from './pages/TopicSelection';
import LessonList from './pages/LessonList';
import LessonPlayer from './pages/LessonPlayer';
import ParentZone from './pages/ParentZone';
import Contact from './pages/Contact';
import AIChatWidget from './components/AIChatWidget';
import { ChatProvider } from './contexts/ChatContext';

const App: React.FC = () => {
  return (
    <ChatProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<TopicSelection />} />
          <Route path="/lessons/:ageId" element={<LessonList />} />
          <Route path="/lesson/:lessonId" element={<LessonPlayer />} />
          <Route path="/parents" element={<ParentZone />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <AIChatWidget />
      </Router>
    </ChatProvider>
  );
};

export default App;