import { Container, Row } from "reactstrap";
import { margin, padding, width } from "@mui/system";
import Meat from "../Assets/Meat.jpg";
import Rice from "../Assets/Rice.jpg";
import BMI_1 from "../Assets/bmi/BMI_1.jpg";
import FreshFruit from "../Assets/freshfruit.png";
import Juice from "../Assets/juice.png";
import FreshVegetable from "../Assets/Freshveget.png";
import Fastfood from "../Assets/fastfood.png";
import BlogImage1 from "../Assets/d34394fbf4521378cc6882b47eaa6d4b.jpg";
import BlogImage2 from "../Assets/A Complete Guide to Citrus Fruits.jpg";

import menu from "../Assets/bmi/Menu.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../component/Footer";
import Header from "../component/Nav";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-banner">
        <Header transparent="transparent" />

        <div class="col-lg-5 text-home ">
          <h3 class="fw-light text-white animated slideInRight">
            Natural &amp; Organic
          </h3>
          <h1 class="display-4 text-white animated slideInRight">
            Healthy <span class="fw-light text-dark">Food</span> <br />
            For Healthy Life
          </h1>
          <p class="text-white mb-4 animated slideInRight">
            An eating plan that helps promote health and manage your weight
            includes a variety of healthy foods. Enjoy weekly meals with no
            hassle, easy order and receive fresh package from anywhere.
          </p>
          <p
            href=""
            class="btn btn-dark py-2 px-4 me-3 animated slideInRight"
            onClick={() => navigate("/combo")}
          >
            Explore Now
          </p>
          <p
            href=""
            class="btn btn-outline-dark py-2 px-4 animated slideInRight"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </p>
        </div>
      </div>
      <br></br>
      <div class="container">
        <div class="row flex-wrap">
          <div class="col-md-2 center" onClick={() => navigate("/freshfruit")}>
            {" "}
            <a>
              <figure>
                <img
                  style={{ borderRadius: 25 }}
                  alt="Fresh Fruit"
                  width={"100%"}
                  height={"210px"}
                  src={FreshFruit}
                />
              </figure>
              <span>
                <span className="sixItems">
                  <span>Fresh Fruit</span>
                </span>
              </span>
            </a>
          </div>
          <div class="col-md-2 center" onClick={() => navigate("/juice")}>
            {" "}
            <a>
              <figure>
                <img
                  style={{ borderRadius: 25 }}
                  alt="Juice"
                  width={"100%"}
                  height={"210px"}
                  src={Juice}
                />
              </figure>
              <span>
                <span className="sixItems">
                  <span>Juice</span>
                </span>
              </span>
            </a>
          </div>
          <div class="col-md-2 center" onClick={() => navigate("/vegetable")}>
            {" "}
            <a>
              <figure>
                <img
                  style={{ borderRadius: 25 }}
                  alt="Fresh Vegetable"
                  width={"100%"}
                  height={"210px"}
                  src={FreshVegetable}
                />
              </figure>
              <span>
                <span className="sixItems">
                  <span>Fresh Vegetable</span>
                </span>
              </span>
            </a>
          </div>

          <div class="col-md-2 center" onClick={() => navigate("/fast-food")}>
            {" "}
            <a>
              <figure>
                <img
                  style={{ borderRadius: 25 }}
                  alt="Fast Food"
                  width={"100%"}
                  height={"210px"}
                  src={Fastfood}
                />
              </figure>
              <span>
                <span className="sixItems">
                  <span>Fast Food</span>
                </span>
              </span>
            </a>
          </div>

          <div class="col-md-2 center" onClick={() => navigate("/meat")}>
            {" "}
            <a>
              <figure>
                <img
                  style={{ borderRadius: 25 }}
                  alt="Meat"
                  width={"100%"}
                  height={"210px"}
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
          <div class="col-md-2 center" onClick={() => navigate("/others")}>
            {" "}
            <a>
              <figure>
                <img
                  style={{ borderRadius: 25 }}
                  alt="Others"
                  width={"100%"}
                  height={"210px"}
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

      <div class="container" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <div class="row">
          {" "}
          <div class="col-md-6 section-01">
            <img src={BMI_1} width={"100%"} />
          </div>
          <div className=" col-md-6 " id="section1">
            <span>Why is BMI Important ?</span>
            <p>
              BMI (Body Mass Index) is important as it is widely regarded that
              your chances of having a longer and healthier life are improved if
              you have a healthy BMI.
            </p>
            <p
              class="btn text-white py-2 px-4 me-3 animated slideInRight button-section"
              onClick={() => navigate("/bmi")}
              style={{ backgroundColor: "#abc937" }}
            >
              Explore now
            </p>
          </div>
        </div>
      </div>

      <div className="section2-banner ">
        <div class="col-lg-5 text-home ">
          <br /> <br />
          <h1 class="display-4 text-black animated slideInRight">
            How Many Calories Do You Need?
          </h1>
          <p class="text-black mb-4 animated slideInRight">
            If the body is provided with the necessary amount of calories each
            day, the body will function normally. On the contrary, providing too
            many or too few calories will cause health problems.
          </p>
          <p
            class="btn text-white py-2 px-4 me-3 animated slideInRight button-section"
            onClick={() => navigate("/calculatorcalo")}
            style={{ backgroundColor: "#abc937" }}
          >
            Calculate now
          </p>
        </div>
      </div>

      <br></br>
      <div class="container" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <div class="row">
          {" "}
          <div className=" col-md-6 " id="section1" style={{ paddingTop: 30 }}>
            <span>Try creating your menu</span>
            <p>
              The menu can tell you the necessary nutritional indicators, why
              don't you try it
            </p>
            <p
              class="btn text-white py-2 px-4 me-3 animated slideInRight button-section"
              onClick={() => navigate("/bmi")}
              style={{ backgroundColor: "#abc937" }}
            >
              Explore now
            </p>
          </div>
          <div class="col-md-6 img-hide">
            <img src={menu} width={"100%"} />
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
            <div className="col-md-6" style={{ paddingTop: 10 }}>
              <div class="flex-latest-blog">
                <div onClick={() => navigate("/blog-6-great")}>
                  <img src={BlogImage1} />
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
            <div className="col-md-6" style={{ paddingTop: 10 }}>
              <div class="flex-latest-blog">
                <div onClick={() => navigate("/blog-6-great")}>
                  <img src={BlogImage2} />
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
