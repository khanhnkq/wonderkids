import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "pill" | "dropdown" | "mobile";
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
  variant = "pill",
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === "mobile") {
    return (
      <div
        className={`flex items-center justify-center p-1 bg-gray-100 rounded-full w-full max-w-[200px] ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`flex-1 py-1.5 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            language === "en"
              ? "bg-brand-purple text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}>
          <span>EN</span>
        </button>
        <button
          type="button"
          onClick={() => setLanguage("vi")}
          className={`flex-1 py-1.5 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            language === "vi"
              ? "bg-brand-purple text-white shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}>
          <span>VI</span>
        </button>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center bg-gray-100/90 hover:bg-gray-200/90 p-1 rounded-full border border-gray-200 transition-colors ${className}`}
      role="group"
      aria-label="Language selection">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
          language === "en"
            ? "bg-white text-brand-purple shadow-sm ring-1 ring-black/5"
            : "text-gray-600 hover:text-gray-900"
        }`}
        title="English">
        <span>EN</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("vi")}
        className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
          language === "vi"
            ? "bg-white text-brand-purple shadow-sm ring-1 ring-black/5"
            : "text-gray-600 hover:text-gray-900"
        }`}
        title="Tiếng Việt">
        <span>VI</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
