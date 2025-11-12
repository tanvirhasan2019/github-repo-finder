import { useState } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import SearchBar from "../components/SearchBar";
import GitrepoList from "../components/GitrepoList";
import { searchRepositories, Repository } from "../services/githubService";

export default function GitrepoFinder() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const result = await searchRepositories(query);
      setRepositories(result.items);
      setTotalCount(result.total_count);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred while searching"
      );
      setRepositories([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack spacing={2} alignItems="center">
      <SearchBar onSearch={handleSearch} />

      {loading && <CircularProgress />}

      {error && (
        <Alert severity="error" sx={{ maxWidth: 800, width: "100%" }}>
          {error}
        </Alert>
      )}

      {!loading && !error && repositories.length > 0 && (
        <>
          <Typography variant="body2" color="text.secondary">
            Found {totalCount.toLocaleString()} repositories
          </Typography>
          <GitrepoList repositories={repositories} />
        </>
      )}

      {!loading && !error && repositories.length === 0 && totalCount === 0 && (
        <Typography variant="body1" color="text.secondary">
          Search for GitHub repositories to get started
        </Typography>
      )}
    </Stack>
  );
}
