
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { exWeight } from "./CalculatorCalo";
import {
  Col,
  Container,
  Progress,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import Select from "react-select";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { ListMeal } from "../component/ListMeal";
import Header from "../component/Nav";
import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";

const URL = "https://64ccc3c12eafdcdc851a433f.mockapi.io/calories";
let nextId = 1;
function DailyCalo() {
  const [modal, setModal] = useState(false);
  // danh sách các món ăn trong api
  const [listFood, setListFood] = useState([{}]);
  //danh sách các món ăn trong thực đơn để tính toán calo, protein, carbs, fat
  const [listMeal, setListMeal] = useState([{}]);

  const [totalCalo, setTotolCalo] = useState(0);
  const [totalCarbs, setCarbs] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);

  const [totalFat, setTotalFat] = useState(0);
  //giá trị value tối đa của mỗi người
  const exCalo = useSelector((state) => state.foods.totalCaloDaily);
  console.log("exCalo", exCalo);
  let valueOfCarbsEachDay = ((exCalo * 0.6) / 4).toFixed(0);
  let valueProteinEachDay = (exWeight * 0.9).toFixed(0);
  let valueFatEachDay = ((exCalo * 0.3) / 9).toFixed(0);

  //check gia trị có bị NaN không

  const isNaNValueOfCarbsEachDay = isNaN(valueOfCarbsEachDay);
  const isNaNValueProteinEachDay = isNaN(valueProteinEachDay);
  const isNaNValueFatEachDay = isNaN(valueFatEachDay);

  //call api cho cái danh sách trong modal
  useEffect(() => {
    const fetchData = async () => {
      const respone = await fetch(URL);
      const json = await respone.json();
      setListFood(json);
    };
    fetchData();
    console.log("2");
  }, []);

  // options phục vụ cái selected ở dưới
  const options = listFood.map((food) => ({
    value: food.calo,
    label: food.foodName,
    carb: food.carbs,
    protein: food.proteins,
    fat: food.fat,
  }));

  const [selected, setSelectedOption] = useState(0);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const toggle = () => setModal(!modal);

  // Add thức ăn vào để làm một danh sách bữa ăn , từ đó đong đêm calo
  const handleAddMeal = () => {
    const newListMeal = {
      id: nextId,
      name: selected.label,
      calo: selected.value,
      carb: selected.carb,
      protein: selected.protein,
      fat: selected.fat,
    };
    const newListMeals = [...listMeal, newListMeal];
    setListMeal(newListMeals);
    nextId++;
    let newTotalcalo = newListMeal.calo;
    let newTotalCarbs = selected.carb;
    let newTotalProtein = selected.protein;
    let newTotalFat = selected.fat;
    setTotolCalo(totalCalo + newTotalcalo);
    setCarbs(totalCarbs + newTotalCarbs);

    setTotalProtein(totalProtein + newTotalProtein);
    setTotalFat(totalFat + newTotalFat);
    console.log(totalCalo);

    toggle();
  };
  //Delete cái danh sách bữa ăn đó, từ đó trừ calo ra

  const handleDeleteMeal = (idDelete) => {
    const newListMeals = listMeal.filter((meal) => meal.id !== idDelete);

    setListMeal(newListMeals);
    const currentMeal = listMeal.find((meal) => meal.id === idDelete);

    let currentCalo = currentMeal.calo;

    let currentCarbs = currentMeal.carb;

    let currentProtein = currentMeal.protein;

    let currentFat = currentMeal.fat;
    console.log(
      currentCalo,
      currentCarbs,
      currentProtein,
      currentFat,
      currentMeal
    );
    setTotolCalo(totalCalo - currentCalo);
    setTotalProtein(totalProtein - currentProtein);
    setTotalFat(totalFat - currentFat);
    setCarbs(totalCarbs - currentCarbs);
  };

  return (
    <>
      <Header />
      <br></br>
      <Container>
        <Row>
          <Col sm={2}></Col>
          <Col sm={7}>
            <div className="dailyCalo">
              <div style={{ width: 200 }}>
                <span>Calo in</span>
                <h4>{totalCalo}</h4>
                <h6>Kcal</h6>
              </div>
              <div style={{ width: 200 }}>
                {" "}
                <SemiCircleProgressBar
                  percentage={(totalCalo / exCalo) * 100}
                />
              </div>
              <div style={{ width: 200 }}>
                {" "}
                <span> Burned</span>
                <h4>0</h4>
                <h6>Kcal</h6>
              </div>
            </div>

            <div className="dailyCalo">
              <div>
                <span>Suggest</span>
                <h4>{exCalo}</h4>
                <h6>Kcal</h6>
              </div>
            </div>

            <div className="dailyCalo_1">
              <div style={{ width: 150, marginRight: 15, marginLeft: 25 }}>
                <span> Carbs</span>
                <Progress value={(totalCarbs / valueOfCarbsEachDay) * 100} />
                <h6>
                  {totalCarbs}/
                  {isNaNValueOfCarbsEachDay ? 0 : valueOfCarbsEachDay}g
                </h6>
              </div>
              <div style={{ width: 150, marginRight: 15 }}>
                <span>Protein</span>
                <Progress
                  value={(totalProtein /  valueProteinEachDay ) * 100}
                />
                <h6>
                  {totalProtein}/
                  {isNaNValueProteinEachDay ? 0 : valueProteinEachDay}g
                </h6>
              </div>
              <div style={{ width: 150, marginRight: 15 }}>
                <span>Fats</span>
                <Progress value={(totalFat / valueFatEachDay) * 100} />
                <h6>
                  {totalFat}/{isNaNValueFatEachDay ? 0 : valueFatEachDay}g
                </h6>
              </div>
            </div>
          </Col>
          <Col sm={3}></Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col sm={7}>
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Add food to your breakfast
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <Button onClick={toggle}>Add Food</Button>
                    {listMeal.map((meal) => (
                      <ListMeal
                        key={meal.id}
                        id={meal.id}
                        name={meal.name}
                        calo={meal.calo}
                        carb={meal.carb}
                        protein={meal.protein}
                        fat={meal.fat}
                        onDelete={handleDeleteMeal}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Add food to your lunch
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">Lunch</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Add food to your dinner
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">Dinner</div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add new food into your meal</ModalHeader>
        <ModalBody>
          <Select options={options} autoFocus={true} onChange={handleChange} />
          <div className="mt-4">
            {selected && <>You've selected {selected.value}</>}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddMeal}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default DailyCalo;
