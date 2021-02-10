import { useEffect } from "react";

export const PageTitle = ({ children, title }) => {
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      document.title = "مارکت  | " + title;
    }

    return () => (mounted = false);
  }, [title]);

  return children;
};
