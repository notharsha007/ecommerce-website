import GeneralFooter from "../../components/GeneralFooter";
import GeneralBoxForPages from "../../components/Layout/GeneralBoxForPages";
import { Box, Button, Grid, TextField, Typography, Paper } from "@mui/material";

export default function ProductCheckoutPage() {
  return (
    <>
      <GeneralBoxForPages>
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            Checkout
          </Typography>

          <Grid container spacing={3}>
            {/* Billing Details */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Billing Information
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Last Name" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Address" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="City" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Postal Code"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Country" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Order Summary */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Order Summary
                </Typography>
                <Box>
                  <Typography variant="body1">Item 1: $50</Typography>
                  <Typography variant="body1">Item 2: $30</Typography>
                  <Typography variant="body1">Shipping: $10</Typography>
                  <Typography variant="h6" gutterBottom>
                    Total: $90
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            {/* Payment Information */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Payment Information
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Card Number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      fullWidth
                      label="Expiry Date"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField fullWidth label="CVV" variant="outlined" />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Complete Purchase */}
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Complete Purchase
              </Button>
            </Grid>
          </Grid>
        </Box>
        <GeneralFooter />
      </GeneralBoxForPages>
    </>
  );
}
