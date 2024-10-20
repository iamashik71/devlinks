import { useState } from "react";
import { ChevronDown, Link as LinkIcon, X } from "lucide-react";

type Platform = {
  id: string;
  name: string;
  icon: string;
};

type LinkType = {
  id: string;
  platform: string;
  url: string;
};

const platformOptions: Platform[] = [
  {
    id: "github",
    name: "GitHub",
    icon: "/icons/select-icons/icon-github.svg",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: "/icons/select-icons/icon-youtube.svg",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "/icons/select-icons/icon-linkedin.svg",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: "/icons/select-icons/icon-facebook.svg",
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: "/icons/select-icons/icon-twitter.svg",
  },
];

type CustomLinkProps = {
  link: LinkType;
  onRemove: () => void;
  onChange: (id: string, field: "platform" | "url", value: string) => void;
};

export default function CustomLink({
  link,
  onRemove,
  onChange,
}: CustomLinkProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Add a null check for the link object
  if (!link) {
    return null; // or return a placeholder component
  }

  const selectedPlatform =
    platformOptions.find((p) => p.name === link.platform) || platformOptions[0];

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handlePlatformSelect = (e: React.MouseEvent, platformName: string) => {
    e.preventDefault();
    e.stopPropagation();
    onChange(link.id, "platform", platformName);
    setIsOpen(false);
  };

  return (
    <div className="mb-4 bg-gray-100 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Link #{link.id}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            onRemove();
          }}
          className="text-gray-500 hover:text-gray-700"
        >
          <span className="hidden md:inline">Remove</span>
          <X size={20} className="inline md:hidden" />
        </button>
      </div>
      <div className="mb-2">
        <div className="relative">
          <button
            type="button"
            onClick={handleDropdownToggle}
            className="w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 flex items-center"
          >
            <img
              src={selectedPlatform.icon}
              alt={selectedPlatform.name}
              className="w-5 h-5 mr-2"
            />
            <span>{selectedPlatform.name}</span>
            <ChevronDown
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              size={20}
            />
          </button>
          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              {platformOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={(e) => handlePlatformSelect(e, option.name)}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  <img
                    src={option.icon}
                    alt={option.name}
                    className="w-5 h-5 mr-2"
                  />
                  {option.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="relative">
        <LinkIcon
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          value={link.url ?? ""}
          onChange={(e) => onChange(link.id, "url", e.target.value)}
          placeholder="https://www.example.com/username"
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}
