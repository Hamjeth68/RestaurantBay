export const getCurrentLocation = async (): Promise<string> => {
  // In a real app, this would use Geolocation API
  // For mock purposes, we return a fixed location
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Jumeirah St - Umm - 74147 - Dubai");
    }, 500);
  });
};
