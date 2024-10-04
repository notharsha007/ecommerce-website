import { Box } from "@mui/system";

export default function LoginBox({ children }) {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "grey",
          height: "auto",
          width: "700px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
          overflow: "hidden",
          mb: 2,
        }}
      >
        {children}
      </Box>
    </>
  );
}
