import { Button } from "reactstrap";

export const DetailProduct = ({
  foodName,
  description,
  calo,
  categories,
  images,
  price, 
  addCart
}) => {

    price = price.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6">

          <img src={images} width={"100%"} /> 
          </div>

          <div class="col-md-6">
            <p style={{fontSize :" 30px"}}><b><i>{foodName}</i></b></p>
          
            {categories}

            <br/>
            <i class="fa-solid fa-star"  style={{color: "#f2b407",}}></i>
            <i class="fa-solid fa-star"  style={{color: "#f2b407",}}></i>
            <i class="fa-solid fa-star"  style={{color: "#f2b407",}}></i>
            <i class="fa-solid fa-star"  style={{color: "#f2b407",}}></i>
            <i class="fa-solid fa-star"  style={{color: "#f2b407",}}></i>

            <br></br>
            <br></br>
            {description}
            <hr />
            <b>Current Price :</b> {price}
             <br></br>   
             <br></br>  
            <Button outline color="success">Add to wishlist</Button>   <Button outline color="primary">Compare</Button>
          </div>
        </div>
      </div>
    </>
  );
};
