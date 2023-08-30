
import { Footer } from "../component/Footer";
import Header from "../component/Nav";

import { ListProductByCate } from "../component/ListProductByCate";

export const Meat = () => {


  return (
    <>
      <Header />
      <ListProductByCate cate="Meat"/>
      <Footer />
    </>
  );
};
