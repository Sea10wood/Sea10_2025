interface Window {
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }

  declare global {
    interface Window {
      Instagram: any;
    }
  }
  