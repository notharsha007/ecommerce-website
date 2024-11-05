import axios from "axios";

class CategoryService {
  // constructor() {}
  async fetchCategories() {
    const response = await axios.get("http://localhost:3001/productCatalog");
    return response.data;
  }
}

export default new CategoryService();
