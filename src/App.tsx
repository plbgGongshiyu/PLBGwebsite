import { useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { PortfolioSection } from './components/PortfolioSection';
import { LatestNews } from './components/LatestNews';
import { Footer } from './components/Footer';
import { GroupPage } from './pages/GroupPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { MediaPage } from './pages/MediaPage';
import { CareersPage } from './pages/CareersPage';
import { JWPeiDetailPage } from './pages/JWPeiDetailPage';
import { DanseLenteDetailPage } from './pages/DanseLenteDetailPage';
import { LoMonteDetailPage } from './pages/LoMonteDetailPage';
import { JobDetailPage } from './pages/JobDetailPage';

export default function App() {
  const [language, setLanguage] = useState<'EN' | 'CN'>('EN');
  const [currentPage, setCurrentPage] = useState<'home' | 'group' | 'portfolio' | 'media' | 'careers' | 'jwpei' | 'danselente' | 'lomonte' | 'job-detail'>('home');

  const handleNavigation = (page: 'home' | 'group' | 'portfolio' | 'media' | 'careers' | 'jwpei' | 'danselente' | 'lomonte' | 'job-detail') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <div className="bg-white text-black min-h-screen">
        <Header
          language={language}
          setLanguage={setLanguage}
          onNavigate={handleNavigation}
          currentPage={currentPage}
          onBrandClick={(brand) => handleNavigation(brand as 'jwpei' | 'danselente' | 'lomonte')}
        />

        {currentPage === 'home' ? (
          <>
            <main>
              <Hero language={language} />
              <WhoWeAre language={language} />
              <PortfolioSection
                language={language}
                onBrandClick={(brand) => handleNavigation(brand)}
              />
              <LatestNews language={language} />
            </main>
            <Footer language={language} onNavigate={handleNavigation} />
          </>
        ) : currentPage === 'group' ? (
          <>
            <main>
              <GroupPage language={language} />
            </main>
            <Footer language={language} onNavigate={handleNavigation} />
          </>
        ) : currentPage === 'portfolio' ? (
          <>
            <main>
              <PortfolioPage onBrandClick={(brand) => handleNavigation(brand as 'jwpei' | 'danselente' | 'lomonte')} />
            </main>
            <Footer language={language} onNavigate={handleNavigation} />
          </>
        ) : currentPage === 'jwpei' ? (
          <JWPeiDetailPage onBack={() => handleNavigation('portfolio')} />
        ) : currentPage === 'danselente' ? (
          <DanseLenteDetailPage onBack={() => handleNavigation('portfolio')} />
        ) : currentPage === 'lomonte' ? (
          <LoMonteDetailPage
            onBack={() => handleNavigation('portfolio')}
            onNavigate={handleNavigation}
          />
        ) : currentPage === 'media' ? (
          <>
            <main>
              <MediaPage language={language} />
            </main>
            <Footer language={language} onNavigate={handleNavigation} />
          </>
        ) : currentPage === 'job-detail' ? (
          <JobDetailPage onBack={() => handleNavigation('careers')} onNavigate={handleNavigation} />
        ) : (
          <>
            <main>
              <CareersPage language={language} onNavigate={handleNavigation} />
            </main>
            <Footer language={language} onNavigate={handleNavigation} />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}