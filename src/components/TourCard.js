import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
          alt=""
          className="img"
        ></img>
        <Box paddingX={1}>
          <Typography component="h2" variant="subtitle1">
            Immers Into the Falls
          </Typography>
          <Box
            sx={{
              display: "flex",
              aliginItems: "center",
            }}
          >
            <Typography component="p" variant="body2">
              5 hours
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;