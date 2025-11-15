import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <Paper
      component="form"
      variant="outlined"
      square
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 4,
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        minWidth: { md: 800, xs: 300 },
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <GitHubIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search GitHub Repositories"
        inputProps={{ "aria-label": "search git repositories" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
