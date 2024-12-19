/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { products } from "../assets";
import { toast } from "react-toastify";

export const StoreContext = createContext();

export function StoreContextProvider(props) {
  // create a state for search
  const [search, setSearch] = useState("");

  // showing the search bar
  const [showSearch, setShowSearch] = useState(false);

  // state for products data
  const [productsData, setProductsData] = useState(false);

  // isLoading state
  const [isLoading, setIsLoading] = useState(false);

  // category state
  const [category, setCategory] = useState([]);
  // sub-category state
  const [subCategory, setSubCategory] = useState([]);

  // cart states
  const [cartItems, setCartItems] = useState({});

  // login state
  const [currentState, setCurrentState] = useState("sign-up");

  // order state
  const [orders, setOrders] = useState([]);

  // create an addToCart Function
  async function addToCart(id, size) {
    // display toast if there is no selected data
    if (!size) {
      toast.error("Select a size");
      return;
    }
    // / display toast if there is no selected data
    if (size) {
      toast.success("Item Added to cart");
    }
    // duplicate the cart
    let cartItemData = structuredClone(cartItems);

    // if statement
    if (cartItemData[id]) {
      if (cartItemData[id][size]) {
        cartItemData[id][size] += 1;
      } else {
        cartItemData[id][size] = 1;
      }
    } else {
      cartItemData[id] = {};
      cartItemData[id][size] = 1;
    }

    // pass the cartItemData into cartItems
    setCartItems(cartItemData);
  }

  // get cartItems
  // function getTotalCartCount() {
  //   let totalCount = 0;
  //   for (const items in cartItems) {
  //     for (const item in cartItems[items]) {
  //       try {
  //         if (cartItems[items][item] > 0) {
  //           totalCount += cartItems[items][item];
  //         }
  //       } catch (error) {
  //         // ("Cart is Empty");
  //       }
  //     }
  //   }

  //   return totalCount;
  // }

  // get cart items
  function getTotalCartCount() {
    return Object.values(cartItems).reduce((total, sizes) => {
      const sizeCount = Object.values(sizes).reduce(
        (sum, count) => sum + (count > 0 ? 1 : 0), // Only count each item once
        0
      );
      return total + sizeCount;
    }, 0);
  }

  // updating quantity in the cart
  async function quantityUpdate(id, size, quantity) {
    // create a clone using structuredclone
    let cartData = structuredClone(cartItems);

    // pass the data into the quantity
    cartData[id][size] = quantity;

    setCartItems(cartData);
  }

  // getCartTotalAmount
  // async function getTotalCartAmount() {
  //   let totalAmount = 0;
  //   for (const items in cartItems) {
  //     let itemDetails = products.find((product) => product.id === items);
  //     for (const item in cartItems[items]) {
  //       try {
  //         if (cartItems[items][item] > 0) {
  //           totalAmount += itemDetails * cartItems[items][item];
  //         }
  //       } catch (error) {
  //         // huf
  //       }
  //     }
  //   }
  //   return totalAmount;
  // }

  function getTotalCartAmount() {
    try {
      return Object.entries(cartItems).reduce(
        (totalAmount, [itemId, sizes]) => {
          const itemDetails = products.find((product) => product.id === itemId);

          if (!itemDetails) return totalAmount; // Skip if product not found

          const sizeTotal = Object.values(sizes).reduce((sum, quantity) => {
            return quantity > 0 ? sum + itemDetails.price * quantity : sum;
          }, 0);

          return totalAmount + sizeTotal;
        },
        0
      );
    } catch (error) {
      console.error("Error calculating total cart amount:", error);
      return 0; // Return fallback value
    }
  }

  // UseEffect
  useEffect(() => {}, [cartItems]);

  const currency = "$";
  const deliveryFee = 10;

  const value = {
    products,
    currency,
    deliveryFee,
    setSearch,
    search,
    showSearch,
    setShowSearch,
    productsData,
    setProductsData,
    isLoading,
    setIsLoading,
    category,
    subCategory,
    setCategory,
    setSubCategory,
    cartItems,
    addToCart,
    getTotalCartCount,
    quantityUpdate,
    getTotalCartAmount,
    setCurrentState,
    currentState,
    orders,
    setOrders,
  };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
