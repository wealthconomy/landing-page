export interface AppLinks {
  ios: string;
  android: string;
}

export const appLinks: AppLinks = {
  ios: process.env.NEXT_PUBLIC_IOS_APP_URL || "",
  android: process.env.NEXT_PUBLIC_ANDROID_APP_URL || "",
};
