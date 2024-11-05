import { useEffect, useState } from "react";
import BoxContainer from "../components/BoxContainer";
import CardHolderForModels from "../components/Cardholderformodels";
import GeneralHeader from "../components/Header";
import BasicBreadcrumbs from "../components/BreadCrumbs";
import axios from "axios";
import { CircularProgress, Typography } from "@mui/material";

const ProductsPage = ({ category }) => {
  const [response, setResponse] = useState({ categories: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/productCatalog");
      setResponse(result.data);
    };

    fetchData();
  }, []);

  const categoryData = response.categories.find(
    (cat) => cat.name.toLowerCase() === category.toLowerCase()
  );

  if (!categoryData) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          Category not found
        </Typography>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <GeneralHeader />
      </div>
      {/* Scrollable Content */}
      <div
        style={{
          flexGrow: 1,
          overflowY: "auto",
          padding: "16px",
        }}
      >
        {/* Breadcrumbs and Title */}
        <div
          style={{
            flexShrink: 0,
            marginBottom: "16px",
          }}
        >
          <BasicBreadcrumbs />
          <Typography variant="h4" align="center" style={{ margin: "2px" }}>
            {categoryData.name}
          </Typography>
        </div>

        <BoxContainer>
          {categoryData.models.map((model) => (
            <CardHolderForModels key={model.id} data={model} />
          ))}
        </BoxContainer>
      </div>
    </div>
  );
};

export default ProductsPage;
