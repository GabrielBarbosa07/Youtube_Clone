import { Stack } from "@mui/material";

import { categories } from "../../Utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }: any) => {
  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { sx: "row", lg: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background:
              category.name === selectedCategory ? "#fc1503" : "transparent",
            color: "#fff",
          }}
          key={category.name}
        >
          <span
            className="img"
            style={{
              color: category.name === selectedCategory ? "#fff" : "red",
              marginRight: "15px",
            }}
          >
            <img src={category.icon} alt="" />
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
