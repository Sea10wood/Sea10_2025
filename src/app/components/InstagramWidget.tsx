import { useEffect } from 'react';

const InstagramWidget = ({ postUrl }: { postUrl: string }) => {
  useEffect(() => {
    // Instagramの埋め込みスクリプトを動的にロード
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="instagram-widget">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="12"
        style={{ width: '100%' }}
      >
        <a href={postUrl}>View this post on Instagram</a>
      </blockquote>
    </div>
  );
};

export default InstagramWidget;
