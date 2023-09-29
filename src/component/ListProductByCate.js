import { useDispatch, useSelector } from "react-redux";

import { fetchFoods, selectFruit } from "../store/Food";
import { useEffect } from "react";
import no_images from "../Assets/no-image.svg"
import { SideBarCate } from "./SideBar";

export const ListProductByCate = ({cate}) => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods.foods);
  console.log("cate" , cate)
  const listFoodsByCate = foods.filter((food) => food.categories === cate)
  listFoodsByCate.sort((a,b) => a.calo - b.calo)
  console.log("listFoodsByCate" , listFoodsByCate)

  useEffect(() => {
      dispatch(fetchFoods());
  
    }, []);

  return (
    <>
  <br></br>
      <div class="container">
        <div class="row">
          <div class="col-md-2">
          <SideBarCate />

          </div>
          <div class="col-md-10">
            <div className="productList container">
              <div class="row">
                {listFoodsByCate.map((list) => (
                  <div class="col-md-3" key={list.id}>
                    { list.images.length <= 10 ? <img src={no_images} width={"100%"} /> : <img
                      src={list.images}
                      width={"100%"}
                    ></img>}
                    
                    <p>{list.foodName}</p>
                    <p style={{ color: "#a1ba36", fontSize: "medium" }}>
                      {list.calo} Cal/100g
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};
