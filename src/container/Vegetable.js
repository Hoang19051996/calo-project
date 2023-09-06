
import { Footer } from "../component/Footer";
import Header from "../component/Nav";

import { ListProductByCate } from "../component/ListProductByCate";

export const Vegetable = () => {


  return (
    <>
      <Header />
      <ListProductByCate cate="Vegetable"/>
      <Footer />
    </>
  );
};
