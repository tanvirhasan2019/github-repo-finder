import Grid from "@mui/material/Grid";
import GitrepoFinder from "../sections/GitrepoFinder";

export default function GitrepoFinderPage() {
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
}
