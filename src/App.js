import React from 'react';
import CoursesSection from './components/CoursesSection';
import VideoSection from './components/VideoSection';
import StatsSection from './components/StatsSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <div>
      <main>
        <Header />
        <HeroSection />
        <CategorySection />
        <AboutSection />
        <CoursesSection />
        <VideoSection />
        <StatsSection />
        <BlogSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
