import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Pagination from "@mui/material/Pagination";
import SearchBar from "../components/SearchBar";
import GitrepoList from "../components/GitrepoList";
import { searchRepositories, Repository } from "../services/githubService";

const GitrepoFinder: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const perPage = 10;

  const handleSearch = async (query: string, page: number = 1) => {
    setLoading(true);
    setError(null);
    setSearchQuery(query);
    setCurrentPage(page);

    try {
      const result = await searchRepositories(query, page, perPage);
      setRepositories(result.items);
      setTotalCount(result.total_count);
    } catch (err) {
      console.log("log error:", err);
      setError(
        err instanceof Error ? err.message : "An error occurred while searching"
      );
      setRepositories([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    handleSearch(searchQuery, page);
  };

  const totalPages = Math.ceil(totalCount / perPage);

  return (
    <Stack spacing={2} alignItems="center">
      <SearchBar onSearch={(query) => handleSearch(query, 1)} />

      {loading && <CircularProgress />}

      {error && (
        <Alert severity="error" sx={{ maxWidth: 800, width: "100%" }}>
          {error}
        </Alert>
      )}

      {!loading && !error && repositories.length > 0 && (
        <>
          <Typography variant="body2" color="text.secondary">
            Found {totalCount.toLocaleString()} repositories (Page {currentPage}{" "}
            of {totalPages})
          </Typography>
          <GitrepoList repositories={repositories} />
          {totalPages > 1 && (
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          )}
        </>
      )}

      {!loading && !error && repositories.length === 0 && totalCount === 0 && (
        <Typography variant="body1" color="text.secondary">
          Search for GitHub repositories to get started
        </Typography>
      )}
    </Stack>
  );
};

export default GitrepoFinder;
