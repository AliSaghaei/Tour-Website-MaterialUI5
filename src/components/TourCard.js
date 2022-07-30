import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },

          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },

          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={tour.image} alt="" className="img"></img>
          <Box paddingX={1}>
            <Typography component="h2" variant="subtitle1">
              {tour.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                aliginItems: "center",
              }}
            >
              <AccessTime sx={{ width: 12.5, height: 15 }} />
              <Typography component="p" variant="body2" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                aliginItems: "center",
              }}
              marginTop={3}
            >
              <Rating
                readOnly
                name="read-only"
                value={tour.rating}
                precision={0.5}
                size="small"
              />
              <Typography component="p" variant="body2" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography component="p" variant="body2" marginLeft={1.5}>
                ({tour.numberOfReviews}) reviews
              </Typography>
            </Box>
            <Box>
              <Typography component="h3" variant="h6" marginTop={0}>
                From ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
