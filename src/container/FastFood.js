
import { Footer } from "../component/Footer";
import Header from "../component/Nav";
import BreadCrumbs from "../component/Breadcrumbs";

import { ListProductByCate } from "../component/ListProductByCate";

export const FastFood = () => {


  return (
    <>
      <Header />
      <br></br>
      <div style={{paddingLeft : "5%"}}>
        <BreadCrumbs page="Fast Food" />
        </div>
      <ListProductByCate cate="FastFood"/>
      <Footer />
    </>
  );
};
