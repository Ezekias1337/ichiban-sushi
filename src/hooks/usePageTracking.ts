import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

const usePageTracking = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (event: {
      toLocation: { pathname: string };
    }) => {
      const currentVisits = JSON.parse(
        localStorage.getItem("pageVisits") || "[]"
      );
      currentVisits.push({
        path: event.toLocation.pathname,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("pageVisits", JSON.stringify(currentVisits));
    };

    const unsubscribe = router.subscribe("onResolved", handleRouteChange);

    return () => {
      unsubscribe();
    };
  }, [router]);
};

export default usePageTracking;
