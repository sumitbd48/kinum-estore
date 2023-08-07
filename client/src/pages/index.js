import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [productsList, setProductsList] = useState([]);

  const fetchAllProducts = async () => {
    const res = await fetch("http://localhost:8080/products");
    const data = await res.json;
    setProductsList(data.productsList);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      {JSON.stringify(productsList)}
       {/* {productsList.length > 0 ? (
        <div>
          {productsList.map((item) => (
            <li>{item.productPrice}</li>
          ))}
        </div>
      ) : (
        "loading"
      )} */}
    </div>
  );
}
