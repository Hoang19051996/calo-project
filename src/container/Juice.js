
import { Footer } from "../component/Footer";
import Header from "../component/Nav";

import { ListProductByCate } from "../component/ListProductByCate";

export const Juice = () => {


  return (
    <>
      <Header />
      <ListProductByCate cate="Juice"/>
      <Footer />
    </>
  );
};
