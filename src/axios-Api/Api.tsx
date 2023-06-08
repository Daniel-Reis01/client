import axios from "axios";

const productApi = axios.create({ baseURL: "https://dummyjson.com/",
 });

 export default productApi


 /*
  Api do google para ser testada:

  GET https://shoppingcontent.googleapis.com/content/v2.1/{merchantId}/products
 
 */