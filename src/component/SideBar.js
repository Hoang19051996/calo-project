export const SideBar = () => {
  return (
    <>
      <div className="side-bar">
        <h3>Shopping options</h3>
        <hr />
        <h5>Product Categories</h5>
        <ol className="items">
          <li >
            
            <i class="fa-solid fa-lemon"></i>  {" "} {" "} <span style={{fontWeight: "100"}}>  Fresh Fruit</span>
        
          </li>
          <li>
            {" "}
            <i class="fas fa-cocktail"></i> {" "} Juice
          </li>
          <li>
            <i class="fa-solid fa-carrot"></i> {" "} {" "}Fresh Vegetable
          </li>
          <li>
            {" "}
            <i class="fa-solid fa-burger"></i> {" "} {" "}FastFood
          </li>
          <li>
            <i class="fa-solid fa-drumstick-bite"></i> {" "} {" "}Meat
          </li>
          <li>
            <i class="fa-solid fa-bowl-rice"></i> {" "} {" "}Others
          </li>
        </ol>
        <h5>Wist List</h5>
      </div>
    </>
  );
};
