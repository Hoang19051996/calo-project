
import { Footer } from "../component/Footer";
import Header from "../component/Nav";

import { ListProductByCate } from "../component/ListProductByCate";

export const FastFood = () => {


  return (
    <>
      <Header />
      <ListProductByCate cate="FastFood"/>
      <Footer />
    </>
  );
};
