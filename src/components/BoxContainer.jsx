import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function BoxContainer({ children }) {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: "100%",
            maxWidth: 1000,
            height: "100%",
            padding: 3,
            // border: "1px solid #ccc",
            // borderRadius: 2,
            display: "grid", // Use grid layout
            gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
            columnGap: "20px",
            rowGap: "20px", // Responsive columns
            // justifyItems: "center",
          }}
        >
          <Typography
            variant="h3" gutterBottom
            sx={{
              position: "absolute", // Take it out of the grid layout
              top: 63,
              left: 150,
              fontWeight: "bold",
              letterSpacing: "0.05em",
              // color: " #007BFF",
              // textDecoration: 'underline',
              // fontStyle: 'italic'
            }}
          >
            Products:
          </Typography>
          {children}
        </Box>
      </Box>
    </>
  );
}
