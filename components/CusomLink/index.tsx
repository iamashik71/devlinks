import { useState } from "react";
import { ChevronDown, Link as LinkIcon, X } from "lucide-react";

type LinkType = {
  id: number;
  platform: string;
  url: string;
};

const platformOptions = [
  "GitHub",
  "YouTube",
  "LinkedIn",
  "Facebook",
  "Twitter",
];

const CustomLink = ({
  link,
  onRemove,
  onChange,
}: {
  link: LinkType;
  onRemove: () => void;
  onChange: (id: number, field: "platform" | "url", value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [platform, setPlatform] = useState<string | null>();

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault(); // Prevent any default form submission
    setPlatform(e.target.value); // e.target.value is a string
  };

  return (
    <div className="mb-4 bg-gray-100 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          = Link #{link.id}
        </span>
        <button
          onClick={onRemove}
          className="text-gray-500 hover:text-gray-700"
        >
          <span className="">Remove</span>
        </button>
      </div>
      <div className="mb-2">
        <p>Platform</p>
        <div className="relative">
          <select
            value={platform} // value will be the id
            onChange={handlePlatformChange}
            className="w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            {platformOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              {platformOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    onChange(link.id, "platform", option);
                    setIsOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <p>Link</p>
        <div className="relative">
          <LinkIcon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            value={link.url}
            onChange={(e) => onChange(link.id, "url", e.target.value)}
            placeholder="https://www.example.com/username"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomLink;
