import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Province } from "../component/Province";
import { addNewOrder, removeCartItems, setPrice } from "../store/Food";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { removeItem } from "localforage";
import { ToastContainer, toast } from "react-toastify";

export const CartDetail = () => {
  const [count, setCount] = useState(1);
  const [street, setStreet] = useState("");

  const cartItem = useSelector((state) => state.foods.cartItem);

  
  const province = useSelector((state) => state.foods.province)
  const district = useSelector((state) => state.foods.district);
  const commune = useSelector((state) => state.foods.commune);
  const dispatch = useDispatch();
  console.log("cartItem",cartItem )
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  var sumPrice = useSelector((state) => state.foods.totalPrice);
  sumPrice = sumPrice.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });

  const navigate = useNavigate();


  const handleAddOrder = async () => {
    const day = new Date();
let month = day.getMonth();
    const newOrder = {
      id: crypto.randomUUID(),
      foodName: cartItem.map((cart) => cart.foodName),
      totalPrice: sumPrice,
      street: street,
      province: province,
      district : district,
      commune : commune,
      month : month,
    };
 
    await dispatch(addNewOrder(newOrder));
    window.location.href = "/combo";
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
      notify()
  }

  const handleDelete = async (list) => {
    dispatch(removeCartItems(list.id));
    dispatch(setPrice(list.price))

  };



  return (
    <>
      <section class="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12">
              <div
                class="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div class="card-body p-0">
                  <div class="row g-0">
                    <div class="col-lg-8">
                      <div class="p-5">
                        <div class="d-flex justify-content-between align-items-center mb-5">
                          <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                          <h6 class="mb-0 text-muted">3 items</h6>
                        </div>

                        {cartItem.map((list) => (
                          <>
                            <div class="row mb-4 d-flex justify-content-between align-items-center">
                              <div class="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={list.images}
                                  class="img-fluid rounded-3"
                                  alt="Cotton T-shirt"
                                />
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-3">
                                <h6 class="text-muted">{list.categories}</h6>
                                <h6 class="text-black mb-0">{list.foodName}</h6>
                              </div>
                              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button
                                  class="btn btn-link px-2"
                                 
                                >
                                  <i class="fas fa-minus"></i>
                                </button>

                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={count}
                                  type="number"
                                  class="form-control form-control-sm"
                                />

                                <button
                                  class="btn btn-link px-2"
                                
                                >
                                  <i class="fas fa-plus"></i>
                                </button>
                              </div>
                              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 class="mb-0">
                                  {list.price.toLocaleString("vi", {
                                    style: "currency",
                                    currency: "VND",
                                  })}
                                </h6>
                              </div>
                              <div class="col-md-1 col-lg-1 col-xl-1 text-end" onClick={() => handleDelete(list)}>
                                <a href="#!" class="text-muted">
                                  <i class="fas fa-times"></i>
                                </a>
                              </div>
                            </div>
                          </>
                        ))}

                        <div class="pt-5" onClick={() => navigate("/combo")}>
                          <h6 class="mb-0">
                            <a href="#!" class="text-body">
                              <i class="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 bg-grey">
                      <div class="p-5">
                        <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr class="my-4" />

                        <div class="d-flex justify-content-between mb-4">
                          <h5 class="text-uppercase">
                            quantity: {cartItem.length}
                          </h5>
                          <h5>{sumPrice}</h5>
                        </div>

                        <h5 class="text-uppercase mb-3">Address</h5>
                        <Province />

                        <h5 class="text-uppercase mb-3">Street</h5>

                        <div class="mb-5">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              class="form-control form-control-lg"
                              value={street}
                              onChange={(e) => setStreet(e.target.value)}
                            />
                            <label class="form-label" for="form3Examplea2">
                              Enter your number and street
                            </label>
                          </div>
                        </div>

                        <hr class="my-4" />

                        <div class="d-flex justify-content-between mb-5">
                          <h5 class="text-uppercase">Total price</h5>
                          <h5>{sumPrice}</h5>
                        </div>

                        <button
                          type="button"
                          class="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                          onClick={toggle }
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


                                  <ToastContainer />
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Please confirm</ModalHeader>
        <ModalBody>
        Are you sure you want to order these products?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=> {handleAddOrder()  }}>
          Confirm 
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
