import { Footer } from "../component/Footer";

import Header from "../component/Nav";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItems,
  fetchFoods,
  selectWeekdays,
  selectWeekend,
  sumPrice,
} from "../store/Food";
import no_images from "../Assets/no-image.svg";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { DetailProduct } from "../component/DetailProduct";

import BreadCrumbs from "../component/Breadcrumbs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ComboPage = () => {
  const [value, setValue] = React.useState("1");
  const [detailFood, setDetailFood] = React.useState({});
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const today = new Date();
  const date = today.getDay();
  console.log("day", date);
  const listProductWeekdays = useSelector(selectWeekdays);
  const listProductWeekend = useSelector(selectWeekend);

  React.useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  const handleAddCartItemsWeekdays = (list) => {
    dispatch(
      addCartItems({
        foodName: list.foodName,
        id: list.id,
        calo: list.calo,
        categories: list.categories,
        images: list.images,
        price: list.price,
      })
    );
    dispatch(sumPrice(list.price));
  };

  const handleShowDescription = async (list) => {
    setDetailFood(list);
  };
  console.log("detailFood", detailFood);
  const cartItem = useSelector((state) => state.foods.cartItem);
  const notify = () => toast.success('Add to cart successfully', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  return (
    <>
      <Header />

      <br></br>
      <div style={{ paddingLeft: "5%" }}>
        <BreadCrumbs page="Menu Daily" />
      </div>
      <Box
        sx={{ width: "100%", typography: "body1" }}
        centered
        textAlign={"center"}
      >
        <br></br>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <TabContext value={value}>
                <Box sx={{ borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    textColor="primary"
                  >
                    <Tab
                      label="Today"
                      value="1"
                      style={{ fontSize: "15px", fontWeight: 700 }}
                    />
                    <Tab
                      label="Weekdays
"
                      style={{ fontSize: "15px", fontWeight: 700 }}
                      value="2"
                    />
                    <Tab
                      label="Weekend
"
                      style={{ fontSize: "15px", fontWeight: 700 }}
                      value="3"
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  {date === 6 || date === 0 ? (
                    <div class="container">
                      <div class="row">
                        <div class="col-md-12">
                          <div className="productList container">
                            <div class="row">
                              {listProductWeekend.map((list) => (
                                <div class="col-md-3" key={list.id}>
                                  {list.images.length <= 10 ? (
                                    <img src={no_images} width={"100%"} />
                                  ) : (
                                    <img src={list.images} width={"100%"}></img>
                                  )}

                                  <p style={{ textAlign: "left" }}>
                                    {list.foodName}
                                  </p>

                                  <span class="d-flex">
                                    {" "}
                                    <div
                                      class="mr-auto "
                                      style={{
                                        color: "#a1ba36",
                                        fontSize: "medium",
                                      }}
                                    >
                                      {" "}
                                      {list.calo} cal{" "}
                                    </div>
                                    <div
                                      class="p cartButton"
                                      onClick={() => {
                                        handleShowDescription(list);
                                        setModal(!modal);
                                      }}
                                    >
                                      {" "}
                                      <i
                                        class="fa-solid fa-eye"
                                        color="#336A29"
                                      ></i>
                                    </div>{" "}
                                    &nbsp;
                                    <div
                                      class="p cartButton"
                                      onClick={() => {
                                        handleAddCartItemsWeekdays(list);
                                      }}
                                    >
                                      {" "}
                                      <i class="fa-solid fa-cart-plus" />{" "}
                                    </div>
                                  </span>

                                  <br></br>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-md-12">
                          <div className="productList container">
                            <div class="row">
                              {listProductWeekdays.map((list) => (
                                <div class="col-md-3" key={list.id}>
                                  {list.images.length <= 10 ? (
                                    <img src={no_images} width={"100%"} />
                                  ) : (
                                    <img src={list.images} width={"100%"}></img>
                                  )}

                                  <p style={{ textAlign: "left" }}>
                                    {list.foodName}
                                  </p>

                                  <span class="d-flex">
                                    {" "}
                                    <div
                                      class="mr-auto "
                                      style={{
                                        color: "#a1ba36",
                                        fontSize: "medium",
                                      }}
                                    >
                                      {" "}
                                      {list.calo} cal{" "}
                                    </div>
                                    <div
                                      class="p cartButton"
                                      onClick={() => {
                                        handleShowDescription(list);
                                        setModal(!modal);
                                      }}
                                    >
                                      {" "}
                                      <i
                                        class="fa-solid fa-eye"
                                        color="#336A29"
                                      ></i>
                                    </div>{" "}
                                    &nbsp;
                                    <div
                                      class="p cartButton"
                                      onClick={() => {
                                        handleAddCartItemsWeekdays(list);
                                        notify();
                                      }}
                                    >
                                      {" "}
                                      <i class="fa-solid fa-cart-plus" />{" "}
                                    </div>
                                  </span>

                                  <br></br>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </TabPanel>
                <TabPanel value="2">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-12">
                        <div className="productList container">
                          <div class="row">
                            {listProductWeekdays.map((list) => (
                              <div class="col-md-3" key={list.id}>
                                {list.images.length <= 10 ? (
                                  <img src={no_images} width={"100%"} />
                                ) : (
                                  <img src={list.images} width={"100%"}></img>
                                )}

                                <p style={{ textAlign: "left" }}>
                                  {list.foodName}
                                </p>

                                <span class="d-flex">
                                  {" "}
                                  <div
                                    class="mr-auto "
                                    style={{
                                      color: "#a1ba36",
                                      fontSize: "medium",
                                    }}
                                  >
                                    {" "}
                                    {list.calo} cal{" "}
                                  </div>
                                  <div
                                    class="p cartButton"
                                    onClick={() => {
                                      handleShowDescription(list);
                                      setModal(!modal);
                                    }}
                                  >
                                    {" "}
                                    <i
                                      class="fa-solid fa-eye"
                                      color="#336A29"
                                    ></i>
                                  </div>{" "}
                                  &nbsp;
                                </span>

                                <br></br>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value="3">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-12">
                        <div className="productList container">
                          <div class="row">
                            {listProductWeekend.map((list) => (
                              <div class="col-md-3" key={list.id}>
                                {list.images.length <= 10 ? (
                                  <img src={no_images} width={"100%"} />
                                ) : (
                                  <img src={list.images} width={"100%"}></img>
                                )}

                                <p style={{ textAlign: "left" }}>
                                  {list.foodName}
                                </p>

                                <span class="d-flex">
                                  {" "}
                                  <div
                                    class="mr-auto "
                                    style={{
                                      color: "#a1ba36",
                                      fontSize: "medium",
                                    }}
                                  >
                                    {" "}
                                    {list.calo} cal{" "}
                                  </div>
                                  <div
                                    class="p cartButton"
                                    onClick={() => {
                                      handleShowDescription(list);
                                      setModal(!modal);
                                    }}
                                  >
                                    {" "}
                                    <i
                                      class="fa-solid fa-eye"
                                      color="#336A29"
                                    ></i>
                                  </div>{" "}
                                  &nbsp;
                                </span>

                                <br></br>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabContext>
            </div>
          </div>
        </div>
      </Box>

      <Footer />
      <ToastContainer
    
      />
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{detailFood.foodName}</ModalHeader>
        <ModalBody>
          <DetailProduct
            key={detailFood.id}
            foodName={detailFood.foodName}
            description={detailFood.description}
            calo={detailFood.calo}
            images={detailFood.images}
            categories={detailFood.categories}
            price={detailFood.price}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Cancle</Button>{" "}
        </ModalFooter>
      </Modal>
    </>
  );
};
