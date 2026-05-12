import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToSection() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const scrollToElement = () => {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    setTimeout(scrollToElement, 200);
  }, [hash]); // ✅ remove pathname

  return null;
}