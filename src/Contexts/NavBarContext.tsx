import { createContext, useEffect, useState } from "react";
import { fetchFromAPI } from "../Utils/fetchFromAPI";
import { VideoProps } from "../Utils/props";

export const NavBarContext = createContext({});

export function NavBarProvider({ children }: any) {
  const [selectedCategory, setSelectedCategory] = useState("Novos");
  const [videos, setVideos] = useState<VideoProps[]>();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <NavBarContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </NavBarContext.Provider>
  );
}
