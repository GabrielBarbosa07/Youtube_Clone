import { Stack } from "@mui/material";

import { categories } from "../../Utils/constants";

const selectedCategory = "New";

const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className={"category-btn"}
          style={{
            background:
              category.name === selectedCategory ? "#fc1503" : "transparent",
            color: "#fff",
          }}
          key={category.name}
        >
          {/* Change the icon path */}
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "red",
              marginRight: "15px",
            }}
          >
            {"<>"}
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
