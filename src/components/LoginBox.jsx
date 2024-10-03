import { Box } from "@mui/system";

export default function LoginBox({ children }) {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "grey",
          height: "400px",
          width: "700px",
          margin: "auto",
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
          overflow: "hidden",
        }}
      >
        {children}
      </Box>
    </>
  );
}
