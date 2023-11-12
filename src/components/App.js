import { Fragment } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import Cart from "./Cart";

function App() {
  return (
  <Fragment>
      <Banner/>,
      <Cart />,
      <ShoppingList />,
      <Footer />
  </Fragment>
  )
}

export default App;
