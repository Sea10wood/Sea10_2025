import { useEffect, useState } from 'react';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import '../pages/globals.css';
import TwitterWidget from '../app/components/TwitterCard';
import AnimatedSection from '../app/components/AnimatedSection';
import InstagramWidget from '@/app/components/InstagramWidget';
import Bubbles from '@/app/components/Bubbles';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // 初期状態をローカルストレージから取得
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`flex flex-col min-h-screen relative ${isDarkMode ? 'dark' : ''}`}>
      <Bubbles />
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow p-16 mt-16">
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 p-2 border rounded bg-gray-200 dark:bg-gray-700"
        >
          {isDarkMode ? 'ライトモード' : 'ダークモード'}
        </button>
        <AnimatedSection id="whoami" title="Who am I">
          <p className="text-lg">
            九州工業大学情報工学部知的システム工学科システム制御
          </p>
          <p className="text-lg">
            Sea10(しーてん)と呼ばれると喜びます。
          </p>
          <p className="text-lg ">
            年中無休で迷走中。
          </p>
          <p className="text-lg ">
            <br />
            カンファレンスによくいます。
          </p>
        </AnimatedSection>
        <AnimatedSection id="blog" title="SNS">
          <div className="sns-wrapper">
            <div className="twitter-widget">
              <TwitterWidget username="10derSea" />
            </div>
            <div className="instagram-widget">
              <InstagramWidget postUrl="https://www.instagram.com/sea10____/" />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection id="contact" title="Contact">
          <p className="text-lg">基本的にXのDMに来ていただけるとお話します。</p>
          <p className="text-lg">一応、mail&#128231;: fukuda.miyu234@mail.kyutech.jp</p>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
