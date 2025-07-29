// Feature detection utilities
export const isWebShareSupported = () => {
  return navigator && navigator.share && typeof navigator.share === "function";
};

export const isGeolocationSupported = () => {
  return (
    navigator &&
    navigator.geolocation &&
    typeof navigator.geolocation.getCurrentPosition === "function"
  );
};

export const isMediaDevicesSupported = () => {
  return (
    navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia
  );
};

// Suppress web-share warning in console
if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    const message = args[0];
    if (typeof message === "string" && message.includes("web-share")) {
      return; // Suppress web-share warnings
    }
    originalWarn.apply(console, args);
  };
}

export default {
  isWebShareSupported,
  isGeolocationSupported,
  isMediaDevicesSupported,
};
