/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import CartPayment from "@/views/Card/CartPayment";
import ResetCart from "@/views/Card/ResetCart";
import CartProduct from "@/views/Card/CartProduct";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "@/shared/types";
import { FaBagShopping } from "react-icons/fa6";
import { IconButton } from "@mui/material";
import { Product } from "@/components/Loading";
import Link from "next/link";

type Anchor = "right";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  const { productData } = useSelector((state: StateProps) => state.next);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box>
      <Divider />
      <ListItem>
        <div>
          {productData.length > 0 ? (
            <>
              <div className="bg-white col-span-4 p-4 rounded-lg mr-[10px]">
                <div className="flex w-full items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
                  <p className="text-2xl font-semibold text-amazon_blue">
                    Shopping Cart
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  {productData.map((item: StoreProduct) => (
                    <div key={item._id}>
                      <CartProduct item={item} />
                    </div>
                  ))}
                  <ResetCart />
                </div>
              </div>
              <div className="bg-white h-64 col-span-1 p-4 rounded-lg flex items-center justify-center">
                <CartPayment />
              </div>
            </>
          ) : (
            <div className="w-[30rem] h-64 col-span-5 flex flex-col items-center justify-center ">
              <Link href="/product">
                <h1 className="text-lg font-medium">
                  <img
                    className="w-full pt-10 rounded-2xl"
                    src="https://img.freepik.com/free-photo/red-delivery-car-deliver-express-shipping-fast-delivery-background-3d-rendering-illustration_56104-1910.jpg?t=st=1711643579~exp=1711647179~hmac=b464b2a624bd71eea79f39f31f200442e615f6edaaed8a6ddb65f8828aada1cf&w=996"
                    alt=""
                  />
                </h1>
                <span className="text-center">
                  <Product />
                  <p>YOUR PRODUCT IS EMTY</p>
                </span>
              </Link>
            </div>
          )}
        </div>
      </ListItem>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <FaBagShopping />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
