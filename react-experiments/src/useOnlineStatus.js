// a custom hook to return the online status of the window
// would internally use useEffect and useState hooks
import { useEffect, useState } from "react";

const useOnlineStatus = (initialStatus) => {
  // to store the hook state
  const [isOnline, setIsOnline] = useState(initialStatus);

  useEffect(() => {
    // the event listeners on window to keep track of online status
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));

    // the cleanup function to remove the eventlisteners once the component unmounts
    return () => {
      window.removeEventListener("online", null);
      window.removeEventListener("offline", null);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
