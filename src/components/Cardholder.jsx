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

export default function CardHolder({ image, name, content, productId }) {
  return (
    <Card
      sx={{
        // flex: 1,
        width: "100%",
        height: "100%",
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        // padding: 1,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
        },
      }}
    >
      <CardMedia component="img" height="120" image={image} alt="picture" />
      {/* <img
        src="/assets/apple.png"
        alt="An apple icon"
        style={{ width: "100%", height: "70%" }}
      /> */}
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          // sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          // sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem" } }}
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="center" width="100%">
          <Link to={`/categories/${name}`} style={{ textDecoration: "none" }}>
            <Button size="large">Buy</Button>
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
}
