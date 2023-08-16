import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "@/components/Navbar";
import Home from "./home";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  const { isLoggedIn } = useSelector((state) => state.user);
  if (isLoggedIn) {
    return <Home />;
  } else {
    const { name } = useSelector((state) => state.user);
    const [productsList, setProductsList] = useState([]);

    const fetchAllProducts = async () => {
      const res = await fetch("http://localhost:8080/products");
      const data = await res.json();
      setProductsList(data.productsList);
    };

    useEffect(() => {
      fetchAllProducts();
    }, []);

    return (
      <div>
        <div>{name}</div>
        <Navbar />
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon color="action" />
        </Badge>
        {productsList.length > 0 ? (
          <div className="Products">
            {productsList.map((item) => (
              <div className="Card">
                <Image
                  src="https://target.scene7.com/is/image/Target/GUEST_20affc7e-e0d7-4eb6-a6f3-68d13520f8be?wid=488&hei=488&fmt=pjpeg"
                  alt="ball"
                  width={250}
                  height={300}
                />
                {item.productName}
                {item.productPrice}
                <ShoppingCartIcon onClick={() => alert(item._id)} />
              </div>
            ))}
          </div>
        ) : (
          "loading"
        )}
      </div>
    );
  }
}
