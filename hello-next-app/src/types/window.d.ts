declare global {
  interface Window {
    __ENV__?: {
      NEXT_PUBLIC_APP_URL: string;
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_STORE_IOS_URL: string;
      NEXT_PUBLIC_STORE_ANDROID_URL: string;
    };
  }
}

export {};
