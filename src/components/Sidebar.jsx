import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory, setVideos }) => (
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
        key={category.name}
        className="category-btn"
        onClick={() => {
          if (category.name !== selectedCategory) {
            setVideos([]);
            setSelectedCategory(category.name);
          }
        }}
        style={{
          background: category.name === selectedCategory && "#5561eb",
          color: "white",
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "lightBlue",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
