import { Box } from "@mui/system";

export default function GeneralBoxForPages({ children }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >{children}</Box>
    </>
  );
}
