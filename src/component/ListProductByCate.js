import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./Footer";
import Header from "./Nav";
import { fetchFoods, selectFruit } from "../store/Food";
import { useEffect } from "react";
import no_images from "../Assets/no-image.svg"

export const ListProductByCate = ({cate}) => {
  const foods = useSelector((state) => state.foods.foods);
  console.log("cate" , cate)
  const listFoodsByCate = foods.filter((food) => food.categories === cate)
  console.log("listFoodsByCate" , listFoodsByCate)
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchFoods());
  
    }, []);

  return (
    <>

      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
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


    </>
  );
};
