import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import { Stack, Chip } from "@mui/material";
import { Repository } from "../services/githubService";

interface GitrepoListProps {
  repositories: Repository[];
}

export default function GitrepoList({ repositories }: GitrepoListProps) {
  if (repositories.length === 0) {
    return null;
  }

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 800,
        borderRadius: 4,
        bgcolor: "#75757514",
      }}
    >
      {repositories.map((repo) => (
        <ListItem key={repo.id} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  component="a"
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="h6"
                  sx={{
                    color: "#0969da",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {repo.full_name}
                </Typography>
              </Stack>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "block", mb: 1 }}
                >
                  {repo.description || "No description available"}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  {repo.language && <Chip label={repo.language} size="small" />}
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <StarIcon fontSize="small" />
                    <Typography variant="caption">
                      {repo.stargazers_count}
                    </Typography>
                  </Stack>
                </Stack>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
