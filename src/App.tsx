import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./Components/index";
import { NavBarProvider } from "./Contexts/NavBarContext";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ bgcolor: "#000" }}>
        <NavBarProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </NavBarProvider>
      </Box>
    </BrowserRouter>
  );
}

export default App;
