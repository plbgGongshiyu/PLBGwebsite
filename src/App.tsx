import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
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
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [language, setLanguage] = useState<'EN' | 'CN'>('EN');
  const [currentPage, setCurrentPage] = useState<'home' | 'group' | 'portfolio' | 'media' | 'careers' | 'jwpei' | 'danselente' | 'lomonte' | 'job-detail'>('home');
  const [isPageLoading, setIsPageLoading] = useState(true);

  const handleNavigation = (page: 'home' | 'group' | 'portfolio' | 'media' | 'careers' | 'jwpei' | 'danselente' | 'lomonte' | 'job-detail') => {
    if (page === currentPage) return;
    setIsPageLoading(true);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let maxWaitTimer: number;

    const checkImages = async () => {
      // Small delay to allow React to render the new page's images into the DOM
      await new Promise(resolve => setTimeout(resolve, 100));

      const images = Array.from(document.querySelectorAll('img'));
      if (images.length === 0) {
        setIsPageLoading(false);
        return;
      }

      let loadedCount = 0;
      const totalImages = images.length;

      const onImageLoad = () => {
        loadedCount++;
        if (loadedCount >= totalImages) {
          // Add a slight extra delay for a smoother transition
          setTimeout(() => setIsPageLoading(false), 500);
          if (maxWaitTimer) clearTimeout(maxWaitTimer);
        }
      };

      images.forEach(img => {
        if (img.complete) {
          onImageLoad();
        } else {
          img.addEventListener('load', onImageLoad);
          img.addEventListener('error', onImageLoad);
        }
      });
    };

    // Set a maximum wait time of 9 seconds
    maxWaitTimer = window.setTimeout(() => {
      setIsPageLoading(false);
    }, 9000);

    checkImages();

    return () => {
      if (maxWaitTimer) clearTimeout(maxWaitTimer);
    };
  }, [currentPage]);

  useEffect(() => {
    if (isPageLoading) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('app-loading');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('app-loading');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('app-loading');
    };
  }, [isPageLoading]);

  return (
    <ErrorBoundary>
      <div className="bg-white text-black min-h-screen relative">
        <AnimatePresence>
          {isPageLoading && <LoadingScreen key="loading" />}
        </AnimatePresence>

        <div className={`flex flex-col min-h-screen transition-opacity duration-700 ${isPageLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Header
            language={language}
            setLanguage={setLanguage}
            onNavigate={handleNavigation}
            currentPage={currentPage}
            onBrandClick={(brand) => handleNavigation(brand as 'jwpei' | 'danselente' | 'lomonte')}
          />

          <div className="flex-grow">
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
                  <PortfolioPage language={language} onBrandClick={(brand) => handleNavigation(brand as 'jwpei' | 'danselente' | 'lomonte')} />
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
        </div>
      </div>
    </ErrorBoundary>
  );
}