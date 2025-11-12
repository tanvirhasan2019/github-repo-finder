import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SearchBar() {
  return (
    <Paper
      component="form"
      variant="outlined"
      square
      sx={{
        borderRadius: 4,
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        minWidth: { md: 600, xs: 300 },
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <GitHubIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search GitHub Repositories"
        inputProps={{ "aria-label": "search git repositories" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
