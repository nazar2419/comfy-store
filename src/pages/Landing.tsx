import { Hero, FeaturedProducts } from "@/components";
import { ProductsResponse, customFetch } from "@/utils";
import { type LoaderFunction } from "react-router-dom";

const url ='/products?featured=true';

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return {...response.data};
}

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}
export default Landing