import { useEffect, useState } from "react";

export const CatchDownloadError = () => {
  const [el, setEl] = useState(null);
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  useEffect(() => {
    el?.addEventListener("error", handleError);
    return () => {
      el?.removeEventListener("error", handleError);
    };
  }, [el]);
  return [setEl, error];
};
