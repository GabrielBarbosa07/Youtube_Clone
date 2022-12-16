import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import NavBar from "./Components/NavBar/NavBar";
import VideoDetail from "./Components/VideoDetail/VideoDetail";
import Feed from "./Components/Feed/Feed";
import ChannelDetail from "./Components/ChannelDetail/ChannelDetail";
import SearchFeed from "./Components/SearchFeed/SearchFeed";

function App() {
  <BrowserRouter>
    <Box sx={{ bgcolor: "#000" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/canal/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>;
}

export default App;
