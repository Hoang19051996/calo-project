import { Footer } from "../component/Footer";

import Header from "../component/Nav";

import { ListProductByCate } from "../component/ListProductByCate";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, fetchFoods, selectWeekdays, selectWeekend, sumPrice } from "../store/Food";
import no_images from "../Assets/no-image.svg";

export const ComboPage = () => {
  const [value, setValue] = React.useState("1");


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
    dispatch(addCartItems({foodName: list.foodName, id : list.id, calo : list.calo , categories : list.categories , images : list.images , price : list.price}))
    dispatch(sumPrice(list.price));
  }


  const cartItem = useSelector((state) => state.foods.cartItem)
  console.log("cartItem", cartItem)
  return (
    <>
      <Header />

      <Box
        sx={{ width: "100%", typography: "body1" }}
        centered
        textAlign={"center"}
      >
        <TabContext value={value}>
          <Box sx={{ borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab label="Today" value="1" />
              <Tab
                label="Weekdays
"
                value="2"
              />
              <Tab
                label="Weekend
"
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            {date === 6 || date === 0 ? (
              <div class="container">
                <div class="row">
                  <div class="col-md-2"></div>
                  <div class="col-md-10">
                    <div className="productList container">
                      <div class="row">
                        {listProductWeekend.map((list) => (
                          <div class="col-md-3" key={list.id}>
                            {list.images.length <= 11 ? (
                              <img src={no_images} width={"100%"} />
                            ) : (
                              <img src={list.images} width={"100%"}></img>
                            )}

                            <p>{list.foodName}</p>
                            <p style={{ color: "#a1ba36", fontSize: "larger" }}>
                              {list.calo}Cal
                            </p>
                            <i class="fa-solid fa-cart-plus" color="#336A29"></i>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div class="container">
                <div class="row">
                  <div class="col-md-2"></div>
                  <div class="col-md-10">
                    <div className="productList container">
                      <div class="row">
                        {listProductWeekdays.map((list) => (
                          <div class="col-md-3" key={list.id}>
                            {list.images.length <= 10 ? (
                              <img src={no_images} width={"100%"} />
                            ) : (
                              <img src={list.images} width={"100%"}></img>
                            )}

                            <p style={{textAlign : "left"}}>{list.foodName}</p>
                              <span class="d-flex">  <div class="mr-auto " style={{ color: "#a1ba36", fontSize: "medium" }}>  {list.calo}Cal  </div>
                           <div class="p cartButton" onClick={() => { handleAddCartItemsWeekdays(list)}} > <i class="fa-solid fa-cart-plus" /></div> 
                           </span>
                          
                           
                       
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
            <div class="container">
              <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-10">
                  <div className="productList container">
                    <div class="row">
                      {listProductWeekdays.map((list) => (
                        <div class="col-md-3">
                          {list.images.length <= 10 ? (
                            <img src={no_images} width={"100%"} />
                          ) : (
                            <img src={list.images} width={"100%"}></img>
                          )}

                          <p>{list.foodName}</p>
                          <p style={{ color: "#a1ba36", fontSize: "larger" }}>
                            {list.calo}Cal
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div class="container">
              <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-10">
                  <div className="productList container">
                    <div class="row">
                      {listProductWeekend.map((list) => (
                        <div class="col-md-3">
                          {list.images.length <= 10 ? (
                            <img src={no_images} width={"100%"} />
                          ) : (
                            <img src={list.images} width={"100%"}></img>
                          )}

                          <p>{list.foodName}</p>
                          <p style={{ color: "#a1ba36", fontSize: "larger" }}>
                            {list.calo}Cal
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </Box>

      <Footer />
    </>
  );
};
