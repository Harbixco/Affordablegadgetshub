import { powerbankproducts } from "../../DummyData/powerbankdummy/powerbank";
import { solartankproducts } from "./../../DummyData/solartankdummy/solartank";
import { shoeproducts } from "./../../DummyData/shoedummy/shoes";
import { electronicsproducts } from "../../DummyData/electronicdummy/electronic";

// ✅ Combine all products
export const allProducts = [
  ...powerbankproducts.map((item) => ({
    ...item,
    category: "powerbank",
  })),
  ...shoeproducts.map((item) => ({
    ...item,
    category: "shoes",
  })),
  ...solartankproducts.map((item) => ({
    ...item,
    category: "slides",
  })),
   ...electronicsproducts.map((item) => ({
    ...item,
    category: "electronics",
  })),
];
