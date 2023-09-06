import { Container, Row } from "reactstrap";
import { Header } from "../component/Nav";
import { margin, padding, width } from "@mui/system";
import Meat from "../Assets/Meat.jpg";
import Rice from "../Assets/Rice.jpg";
import BMI_1 from "../Assets/bmi/BMI_1.jpg";
import healthybanner from "../Assets/healthy fruits and vegetables green.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../component/Footer";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-banner">
        <Header />

        <div class="col-lg-5 text-home ">
          <h3 class="fw-light text-white animated slideInRight">
            Natural &amp; Organic
          </h3>
          <h1 class="display-4 text-white animated slideInRight">
            Healthy <span class="fw-light text-dark" >Food</span> <br />
            For Healthy Life
          </h1>
          <p class="text-white mb-4 animated slideInRight">
          An eating plan that helps promote health and manage your weight includes a variety of healthy foods.  Enjoy weekly meals with no hassle, easy order and receive fresh package from anywhere.

          </p>
          <p href="" class="btn btn-dark py-2 px-4 me-3 animated slideInRight" onClick={() => navigate('/combo')}>
            Explore Now
          </p>
          <p
            href=""
            class="btn btn-outline-dark py-2 px-4 animated slideInRight" onClick={() => navigate('/contact-us')}
          >
            Contact Us
          </p>
        </div>
      </div>
      <br></br>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2" onClick={() => navigate("/freshfruit")}>
            {" "}
            <a>
              <figure>
                <img
                  style={{ borderRadius: 25 }}
                  alt="Fresh Fruit"
                  width={"100%"}
                  src="https://mageblueskytech.com/armania/media/catalog/category/xArmania_Organic_03.png.pagespeed.ic.u1PjMNsVl2.webp "
                />
              </figure>
              <span>
                <span className="sixItems">
                  <span>Fresh Fruit</span>
                </span>
              </span>
            </a>
          </div>
          <div class="col-md-2"  onClick={() => navigate("/juice")}>
            {" "}
            <a>
              <figure>
                <img
                  style={{ borderRadius: 25 }}
                  alt="Juice"
                  width={"100%"}
                  src="https://mageblueskytech.com/armania/media/catalog/category/xArmania_Organic_09.png.pagespeed.ic.99YN7SXxUp.webp"
                />
              </figure>
              <span>
                <span className="sixItems">
                  <span>Juice</span>
                </span>
              </span>
            </a>
          </div>
          <div class="col-md-2" onClick={() => navigate("/vegetable")}>
            {" "}
            <a>
              <figure>
                <img
                  style={{ borderRadius: 25 }}
                  alt="Fresh Vegetable"
                  width={"100%"}
                  src="https://mageblueskytech.com/armania/media/catalog/category/xArmania_Organic_07_1.png.pagespeed.ic.5xo_ENIkKD.webp"
                />
              </figure>
              <span>
                <span className="sixItems">
                  <span>Fresh Vegetable</span>
                </span>
              </span>
            </a>
          </div>

          <div class="col-md-2"  onClick={() => navigate("/fast-food")}>
            {" "}
            <a>
              <figure>
                <img
                  style={{ borderRadius: 25 }}
                  alt="Fast Food"
                  width={"100%"}
                  src="https://mageblueskytech.com/armania/media/catalog/category/xArmania_Organic_15_1.jpg.pagespeed.ic.EoBU6_sFBt.webp"
                />
              </figure>
              <span>
                <span className="sixItems">
                  <span>Fast Food</span>
                </span>
              </span>
            </a>
          </div>

          <div class="col-md-2"  onClick={() => navigate("/meat")}>
            {" "}
            <a>
              <figure>
                <img
                  style={{ borderRadius: 25 }}
                  alt="Meat"
                  width={"100%"}
                  src={Meat}
                />
              </figure>
              <span>
                <span className="sixItems">
                  <span>Meat</span>
                </span>
              </span>
            </a>
          </div>
          <div class="col-md-2"  onClick={() => navigate("/others")}>
            {" "}
            <a>
              <figure>
                <img
                  style={{ borderRadius: 25 }}
                  alt="Others"
                  width={"100%"}
                  src={Rice}
                />
              </figure>
              <span>
                <span className="sixItems">
                  <span>Others</span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-1"> </div>
          <div class="col-md-5">
            <img src={BMI_1} width={"100%"} style={{ padding: 31 }} />
          </div>

          <div className=" col-md-5 " id="section1">
            <span style={{ fontFamily: "Loutters ,sans-serif", fontSize: 50 }}>
              <strong>Why is BMI Important ? </strong>
            </span>
            <p>
              BMI (Body Mass Index) is important as it is widely regarded that
              your chances of having a longer and healthier life are improved if
              you have a healthy BMI.
            </p>
            <button onClick={() => navigate("/bmi")}>
              {" "}
              &nbsp; Find out more &nbsp;{" "}
            </button>
          </div>
          <div class="col-md-1"> </div>
        </div>
      </div>

      <div
        class="container-fluid"
        style={{ position: "relative", width: "80%" }}
      >
        <div class="row">
          <img src={healthybanner} />
          <div class="bottom-left">
            <p>
              <strong>How Many Calories Do You Need?</strong>
            </p>
            <span>
              The amount of calories people absorb daily through drinks and
              food. <br></br>If the body is provided with the necessary amount
              of calories each day, the body will function normally. <br></br>On
              the contrary, providing too many or too few calories will cause
              health problems.
            </span>
            <br></br>
            <br></br>
            <button onClick={() => navigate("/calculatorcalo")}>
              {" "}
              &nbsp; Find out more &nbsp;{" "}
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container" style={{ textAlign: "center" }}>
        <p className="font">
          <strong>LATEST BLOG</strong>
        </p>
        <p>
          Weight loss is a process, food accounts for 70% of it, here are some
          useful information that you may be interested in
        </p>
      </div>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div class="row">
            <div className="col-md-6">
              <div class="flex-latest-blog">
                <div>
                  <img src="https://mageblueskytech.com/armania/media/rokanthemes/blog/images/t/h/xthumb-organic-blog3_1.jpg.pagespeed.ic.1P1YpBYA1T.webp" />
                </div>
                <div class="blog-post-info">
                  <h4 class="post-title">
                    6 great benefits of eating fresh fruit daily
                  </h4>
                  <div>
                    <div>Organic</div>
                    <div>
                      <span>30 Sep</span>
                    </div>
                  </div>
                  <p>
                    Fruit has a lot of nutrients, fiber and vitamins so it will
                    help you be physically and mentally healthy...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="flex-latest-blog">
                <div>
                  <img src="https://mageblueskytech.com/armania/media/rokanthemes/blog/images/t/h/xthumb-organic-blog2.jpg.pagespeed.ic.mXjRQFVqfO.webp" />
                </div>
                <div class="blog-post-info">
                  <h4 class="post-title">Benefits of bananas and peaches</h4>
                  <div>
                    <div>Organic</div>
                    <div>
                      <span>30 Sep</span>
                    </div>
                  </div>
                  <p>
                    Bananas are very popular with Vietnamese people. Bananas are
                    year-round, easy to preserve...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      <Footer />
    </>
  );
};
