import React, { createContext, useContext, useState, ReactNode } from "react";

type LinkType = {
  id: string;
  platform: string;
  url: string;
};

interface LinksContextType {
  links: LinkType[];
  setLinks: React.Dispatch<React.SetStateAction<LinkType[]>>;
}

const LinksContext = createContext<LinksContextType | undefined>(undefined);

export const LinksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [links, setLinks] = useState<LinkType[]>([]);

  return (
    <LinksContext.Provider value={{ links, setLinks }}>
      {children}
    </LinksContext.Provider>
  );
};

export const useLinks = (): LinksContextType => {
  const context = useContext(LinksContext);
  if (!context) {
    throw new Error("useLinks must be used within a LinksProvider");
  }
  return context;
};
