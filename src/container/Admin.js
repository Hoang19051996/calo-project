import { ListFoodAdmin } from "../component/ListFoodAdmin";

import { useDispatch, useSelector } from "react-redux";

import {
  addNewFoods,
  fetchFoods,
  removeFood,
  updateFood,
  uploadImage,
} from "../store/Food";
import * as React from "react";
import Header from "../component/Nav";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import {
  Modal,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { setUser } from "../store/global";
import { useNavigate } from "react-router-dom";
import { ListOrder } from "../component/ListOrder";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { SideBarAdmin } from "../component/SideBarAdmin";


export const AdminPage = () => {
  const [modal, setModal] = React.useState(false);
  const [foodEdit, setFoodEdit] = React.useState({});
  const [listFood, setListFood] = React.useState({
    foodName: "",
    calo: "",
    proteins: 0,
    carbs: 0,
    fat: 0,
    categories: "",
  });
  const { t } = useTranslation("translation");
  const changeLanguage = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
  const username = useSelector((state) => state.global.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setListFood({ ...listFood, [e.target.name]: e.target.value });
  };
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const foods = useSelector((state) => state.foods.foods);
  const handleToggle = () => {
    setFoodEdit({});
    setListFood({});
    setModal(false);
  };
  const handleClickCreate = () => {
    setModal(true);
  };

  const handleAddFoods = async () => {
    if (foodEdit.id) {
      const newFoodUpdate = {
        foodName: listFood.foodName,
        calo: parseInt(listFood.calo),
        proteins: parseInt(listFood.proteins),
        carbs: parseInt(listFood.carbs),
        fat: parseInt(listFood.fat),
        categories: listFood.categories,
      };
      debugger;
      dispatch(updateFood({ id: foodEdit.id, values: newFoodUpdate }));

      debugger;
      setModal(false);
      setFoodEdit({});
      setListFood({});
    } else {
      const newFood = {
        id: crypto.randomUUID(),
        foodName: listFood.foodName,
        calo: parseInt(listFood.calo),
        proteins: parseInt(listFood.proteins),
        carbs: parseInt(listFood.carbs),
        fat: parseInt(listFood.fat),
        categories: listFood.categories,
      };

      dispatch(addNewFoods(newFood));
      setListFood({});
      setModal(false);
  
    }
  };

  const handleDelete = async (idDelete) => {
    dispatch(removeFood(idDelete));
  };

  const handleUploadImage = (id, imgUrl) => {
    dispatch(uploadImage({ id, imgUrl }));
  };

  React.useEffect(() => {
    setListFood(foodEdit);
  }, [foodEdit.id]);
  console.log("foodEditNoClick", foodEdit.id);

  const handleLogout = () => {
    localStorage.clear("user");
    dispatch(setUser({ username: "", password: "" }));
    navigate("/login");
  };
  return (
    <>
      <SideBarAdmin />

      <div style={{ paddingLeft: 30 }}>
        <div class="container">
          <div class="row">
            <h3>
              {t("title_admin")}{" "}
              <h6>
                {" "}
                {t("welcome")} {username},{" "}
                <u onClick={handleLogout} style={{ color: "red" }}>
                  {t("logout")}
                </u>
              </h6>
            </h3>

            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList onChange={handleChange} aria-label="">
                    <Tab label={t("list_food")} value="1" />
                    <Tab label={t("list_order")} value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <ListFoodAdmin
                    setModal={setModal}
                    setFoodEdit={setFoodEdit}
                    onDelete={handleDelete}
                    onUpload={handleUploadImage}
                    onCreate={handleClickCreate}
                  />
                </TabPanel>
                <TabPanel value="2">
                  <ListOrder />
                </TabPanel>
              </TabContext>
            </Box>

            <br></br>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader>Add New Food</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="foodName">Food Name</Label>
              <Input
                value={listFood.foodName}
                onChange={handleOnChange}
                id="foodName"
                name="foodName"
                placeholder="Enter food name"
              />
            </FormGroup>

            <FormGroup>
              <Label for="calo">Calories</Label>
              <Input
                value={listFood.calo}
                onChange={handleOnChange}
                id="calo"
                name="calo"
                placeholder="Enter calo"
                type="number"
              />
            </FormGroup>

            <FormGroup>
              <Label for="proteins">Protein</Label>
              <Input
                value={listFood.proteins}
                onChange={handleOnChange}
                id="proteins"
                name="proteins"
                placeholder="Enter protein"
                type="number"
              />
            </FormGroup>

            <FormGroup>
              <Label for="carbs">Carbs</Label>
              <Input
                value={listFood.carbs}
                onChange={handleOnChange}
                id="carbs"
                name="carbs"
                placeholder="Enter carbs"
                type="number"
              />
            </FormGroup>

            <FormGroup>
              <Label for="fat">Fat</Label>
              <Input
                value={listFood.fat}
                onChange={handleOnChange}
                id="fat"
                name="fat"
                placeholder="Enter fats"
                type="number"
              />
            </FormGroup>

            <FormGroup>
              <Label for="">Select a categories</Label>
              <Input
                id="selected"
                name="categories"
                type="select"
                value={listFood.categories}
                onChange={handleOnChange}
              >
                <option hidden value="">
                  --Choose and option--
                </option>
                <option value={"Vegetable"}>Vegetable</option>
                <option value={"Meat"}>Meat</option>
                <option value={"Juices"}>Juices</option>
                <option value={"FastFood"}>FastFood</option>
                <option value={"FreshFruit"}>FreshFruit</option>
                <option value={"Others"}>Others</option>
                <option value={"Combo"}>Combo</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddFoods}>
            Save
          </Button>
          <Button color="secondary" onClick={handleToggle}>
            Cancle
          </Button>
        </ModalFooter>
      </Modal>




     
    </>
  );
};
