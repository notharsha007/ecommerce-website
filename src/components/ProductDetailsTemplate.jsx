import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import BackButton from "./BackButton";

export default function ProductDetailsTemplate({ image, name, price, desc }) {
  return (
    <>
      <BackButton />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5", // Light background color
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: "100%",
            height: "100%",
            position: "relative", // Set relative positioning for the Paper component
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box
                component="img"
                src={image}
                alt={name}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h4" gutterBottom>
                  {name}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  Price: ${price}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  {desc}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            sx={{
              position: "absolute", // Position the button absolutely
              bottom: 16, // Distance from the bottom of the Paper
              right: 16, // Distance from the right of the Paper
            }}
          >
            Add to Cart
          </Button>
        </Paper>
      </Box>
    </>
  );
}
