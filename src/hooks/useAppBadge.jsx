import { useState } from "react";

// Custom hook to change the badge on the Native App
const useAppBadge = () => {
  // Initialise wins counter
  const [counter, setCounter] = useState(1);

  // Update the badge on the Native App
  const setBadge = () => {
    setCounter(counter + 1); // Increment the wins count
    if (navigator.setAppBadge) {
      // PWA installed app
      navigator.setAppBadge(counter);
    } else if (navigator.setClientBadge()) {
      // Web app
      navigator.setClientBadge(counter);
    }
  };

  // Clear the wins badge
  const clearBadge = () => {
    setCounter(1); // Reset the wins count
    if (navigator.clearAppBadge) {
      navigator.clearAppBadge();
    } else if (navigator.clearClientBadge) {
      navigator.clearClientBadge();
    }
  };

  return [setBadge, clearBadge];
};

export default useAppBadge;
