import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import GeneralHeader from "../components/Header";

// Main product data
const product = {
  id: 1,
  name: "Stylish Headphones",
  price: 149.99,
  image: "https://via.placeholder.com/400x300",
  description:
    "High-quality wireless headphones with noise cancellation, long battery life, and superior sound quality.",
  details:
    "These headphones feature Bluetooth 5.0, up to 30 hours of playback, and a comfortable, ergonomic design.",
};

// Sample similar products data
const similarProducts = [
  {
    id: 2,
    name: "Premium Wireless Earbuds",
    price: 199.99,
    image: "https://via.placeholder.com/200x150",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    image: "https://via.placeholder.com/200x150",
  },
  {
    id: 4,
    name: "Smartwatch Series 3",
    price: 249.99,
    image: "https://via.placeholder.com/200x150",
  },
  {
    id: 5,
    name: "Noise Cancelling Over-Ear Headphones",
    price: 299.99,
    image: "https://via.placeholder.com/200x150",
  },
];

const ProductDetailsPage = () => {
  return (
    <>
      <GeneralHeader />
      <Container sx={{ paddingBottom: "50px" }}>
        {/* Title */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", marginTop: 3 }}
        >
          Product Details
        </Typography>

        {/* Product Details */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ marginTop: 4 }}
        >
          {/* Product Image */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={product.image}
                alt={product.name}
              />
            </Card>
          </Grid>

          {/* Product Info */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                {/* Product Name */}
                <Typography variant="h5" component="div" gutterBottom>
                  {product.name}
                </Typography>

                {/* Price */}
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  ${product.price}
                </Typography>

                {/* Description */}
                <Typography variant="body1" gutterBottom>
                  {product.description}
                </Typography>

                {/* Detailed Information */}
                <Typography variant="body2" color="text.secondary">
                  {product.details}
                </Typography>

                {/* Actions */}
                <CardActions sx={{ marginTop: 2 }}>
                  <Button variant="contained" color="primary" size="large">
                    Add to Cart
                  </Button>
                  <Button variant="outlined" color="secondary" size="large">
                    Buy Now
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Similar Products Section */}
        <Box sx={{ marginTop: 5 }}>
          <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
            Similar Products
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {similarProducts.map((similarProduct) => (
              <Grid item xs={12} sm={6} md={3} key={similarProduct.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={similarProduct.image}
                    alt={similarProduct.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {similarProduct.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${similarProduct.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Additional content for visibility testing */}
        <Box sx={{ marginTop: 5, padding: "20px 0" }}>
          <Typography variant="body1" align="center">
            Additional Content Below Similar Products
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ProductDetailsPage;
