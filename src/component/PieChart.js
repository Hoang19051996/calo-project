import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFoods,
  selectCombo,
  selectFastFood,
  selectFruit,
  selectMeat,
  selectOthers,
  selectVegetable,
} from "../store/Food";

export default function BasicPie() {
  const combo = useSelector(selectCombo);

  console.log("combo", combo);
  const vegetable = useSelector(selectVegetable);
  const meat = useSelector(selectMeat);
  const freshfruit = useSelector(selectFruit);
  const fastfood = useSelector(selectFastFood);
  const others = useSelector(selectOthers);

  return (
    <PieChart
      colors={[
        "#76b7b2",
        "#59a14f",
        "#edc949",
        "#af7aa1",
        "#ff9da7",
        "#9c755f",
      ]}
      series={[
        {
          data: [
            { id: 0, value: combo.length, label: " Combo" },
            { id: 1, value: vegetable.length, label: " Vegetable" },
            { id: 2, value: meat.length, label: " Meat" },
            { id: 3, value: freshfruit.length, label: " Fresh Fruit" },
            { id: 4, value: fastfood.length, label: " Fast Food" },
            { id: 5, value: others.length, label: "Others" },
            
          ],
          cx: 146,
        },
      ]}
      width={450}
      height={500}
    />
  );
}
