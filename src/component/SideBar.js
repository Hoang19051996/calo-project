import { useNavigate } from "react-router-dom";

export const SideBarCate = () => {
  const navigate = useNavigate();
  return (
    <>
      <div >
       
        <h6>Product Categories</h6>
 
        <ol className="items">
          <li onClick={() => navigate("/freshfruit")}>
            
            <i class="fa-solid fa-lemon"></i>  {" "} {" "} <span style={{fontWeight: "100"}}>  Fresh Fruit</span>
        
          </li>
          <li onClick={() => navigate("/juice")}>
            {" "}
            <i class="fas fa-cocktail"></i> {" "} Juice
          </li>
          <li onClick={() => navigate("/vegetable")}>
            <i class="fa-solid fa-carrot"></i> {" "} {" "}Fresh Vegetable
          </li>
          <li onClick={() => navigate("/fastfood")}>
            {" "}
            <i class="fa-solid fa-burger"></i> {" "} {" "}FastFood
          </li>
          <li onClick={() => navigate("/meat")}>
            <i class="fa-solid fa-drumstick-bite"></i> {" "} {" "}Meat
          </li>
          <li onClick={() => navigate("/others")}>
            <i class="fa-solid fa-bowl-rice"></i> {" "} {" "}Others
          </li>
        </ol>
        <h5>Wish List</h5>
      </div>
    </>
  );
};
