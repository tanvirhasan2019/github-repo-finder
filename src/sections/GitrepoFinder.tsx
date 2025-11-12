import Stack from "@mui/material/Stack";
import SearchBar from "../components/SearchBar";
import GitrepoList from "../components/GitrepoList";

export default function GitrepoFinder() {
  return (
    <Stack spacing={2}>
      <SearchBar />
      <GitrepoList />
    </Stack>
  );
}
