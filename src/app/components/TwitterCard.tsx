import { useEffect, useState } from 'react';

const TwitterWidget = ({ username }: { username: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <div>
      <a
        className="twitter-timeline"
        href={`https://twitter.com/${username}`}
        data-width="400"
        data-height="600"
      >
        Tweets by @{username}
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  );
};

export default TwitterWidget;
