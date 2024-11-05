import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function CardHolderForCategories({ image, name, content, price, productId }) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={name}
        sx={{
          objectFit: "contain", // Ensures the image fits without cropping
          padding: "16px", // Adds padding around the image
        }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontSize: "1rem", fontWeight: "bold" }}
        >
          {name}
        </Typography>
        {/* <Typography
          variant="body2"
          color="text.secondary"
          sx={{ margin: "8px 0", fontSize: "0.9rem" }}
        >
          {content}
        </Typography> */}
        <Typography
          variant="h6"
          component="div"
          color="primary"
          sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
        >
          ₹{content} {/* Displaying price in INR format */}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="center" width="100%">
          <Link to={`/categories/${name}`} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                textTransform: "none", // Avoids all caps text on the button
                borderRadius: "20px",
              }}
            >
              View Product
            </Button>
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
}
