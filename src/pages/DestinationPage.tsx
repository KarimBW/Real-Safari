
import React from "react";
import DestinationLayout from "@/components/Destination/DestinationLayout";
import { useEffect } from "react";

const DestinationPage = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return <DestinationLayout />;
};

export default DestinationPage;
