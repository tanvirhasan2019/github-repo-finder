import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Stack } from "@mui/material";

export default function GitrepoList() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 600,
        borderRadius: 4,
        bgcolor: "#75757514",
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                component="span"
                variant="h6"
                sx={{ color: "#0969da", display: "inline" }}
              >
                Repo Name will display here
              </Typography>
              <OpenInNewIcon />
            </Stack>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                Repo details will display here
              </Typography>
              {" — extra information about the repo will be displayed here."}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
