import React from "react";
import Grid from "@mui/material/Grid";
import GitrepoFinder from "../sections/GitrepoFinder";

const GitrepoFinderPage: React.FC = () => {
  return (
    <div>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        sx={{ m: 4 }}
      >
        <Grid>
          <GitrepoFinder />
        </Grid>
      </Grid>
    </div>
  );
};

export default GitrepoFinderPage;
