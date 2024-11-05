import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxContainerForCards from "../components/BoxContainer";
import CardHolderForCategories from "../components/Cardholderforcategories";
import GeneralHeader from "../components/Header";
import BasicBreadcrumbs from "../components/BreadCrumbs";
import GeneralFooter from "../components/GeneralFooter";
import { Typography, CircularProgress } from "@mui/material";
import GeneralBoxForPages from "../components/Layout/GeneralBoxForPages";
import { fetchCategories } from "../redux/actions/category.actions";

export default function CategoriesPage() {
  const dispatch = useDispatch();

  // Select categories and loading status from Redux store
  const productCatalog = useSelector((state) => state.categories.items);
  const categoriesLoading = useSelector((state) => state.categories.loading);
  const searchText = useSelector((state) => state.search.searchText);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Filter categories based on the search text
  const filteredCategories = (productCatalog?.categories || []).filter((category) =>
    category.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <GeneralBoxForPages>
      {/* Header */}
      <div style={{ flexShrink: 0 }}>
        <GeneralHeader />
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flexGrow: 1,
          padding: "16px",
          overflowY: "auto",
        }}
      >
        {/* Breadcrumbs and Title */}
        <div style={{ flexShrink: 0, marginBottom: "16px" }}>
          <BasicBreadcrumbs />
          <Typography variant="h4" align="center" style={{ margin: "2px" }}>
            Categories
          </Typography>
        </div>

        {/* Display loading spinner or categories */}
        {categoriesLoading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          <BoxContainerForCards>
            {filteredCategories.map((category) => (
              <CardHolderForCategories
                key={category.name}
                image={category.image}
                name={category.name}
                content={category.price}
              />
            ))}
          </BoxContainerForCards>
        )}
      </div>

      {/* Footer */}
      <div style={{ flexShrink: 0 }}>
        <GeneralFooter />
      </div>
    </GeneralBoxForPages>
  );
}
