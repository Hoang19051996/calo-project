
import { Footer } from "../component/Footer";
import Header from "../component/Nav";

import { ListProductByCate } from "../component/ListProductByCate";

export const Others = () => {


  return (
    <>
      <Header />
      <ListProductByCate cate="Others"/>
      <Footer />
    </>
  );
};
