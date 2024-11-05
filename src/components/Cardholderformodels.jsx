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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addingProductToCart } from "../redux/slices/category.slice";

export default function CardHolderForModels({ data }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.categories.addtocart);

  function handleAddToCart(data) {
    dispatch(addingProductToCart(data));
  }

  return (
    <Card
      id={data.id}
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
        image={data.image}
        alt={data.name}
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
          {data.name}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          color="primary"
          sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
        >
          ₹{data.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="center" width="100%">
          <Link
            to={`/categories/Smartphone/SamsungGalaxyS21`}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                textTransform: "none", // Avoids all caps text on the button
                borderRadius: "20px",
              }}
            >
              Buy Now
            </Button>
          </Link>
          {cart.find((product) => product.id === data.id) ? (
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                textTransform: "none", // Avoids all caps text on the button
                borderRadius: "20px",
              }}
            >
              Added to Cart
            </Button>
          ) : (
            <Button
              onClick={() => handleAddToCart(data)}
              variant="contained"
              color="primary"
              size="large"
              sx={{
                textTransform: "none", // Avoids all caps text on the button
                borderRadius: "20px",
              }}
            >
              Add to Cart
              <AddShoppingCartIcon />
            </Button>
          )}
        </Box>
      </CardActions>
    </Card>
  );
}
