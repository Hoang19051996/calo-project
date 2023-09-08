
import { Footer } from "../component/Footer";
import Header from "../component/Nav";
import BreadCrumbs from "../component/Breadcrumbs";

import { ListProductByCate } from "../component/ListProductByCate";

export const Others = () => {


  return (
    <>
      <Header />
      <br></br>
      <div style={{paddingLeft : "5%"}}>
        <BreadCrumbs page="Others" />
        </div>
      <ListProductByCate cate="Others"/>
      <Footer />
    </>
  );
};
