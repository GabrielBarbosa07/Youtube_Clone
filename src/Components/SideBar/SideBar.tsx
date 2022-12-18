import { Stack } from "@mui/material";

import { categories } from "../../Utils/constants";

const selectedCategory = "New";

const SideBar = () => {
  console.log(categories);
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
          className="category-btn"
          style={{
            background: category.name === selectedCategory ? "#fc1503" : "",
            color: category.name === selectedCategory ? "#fff" : "",
          }}
          key={category.name}
        >
          {/* Change the icon path */}
          {/* <span>{category.icon}</span> */}
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
