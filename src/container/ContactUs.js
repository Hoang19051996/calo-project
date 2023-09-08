import { useNavigate } from "react-router-dom";
import { Footer } from "../component/Footer";
import Header from "../component/Nav";
import BreadCrumbs from "../component/Breadcrumbs";

export const ContactUs = () => {
    const navigate = useNavigate();
  return (
    <>
    <Header />
    <br></br>
    <div style={{paddingLeft : "5%"}}>
        <BreadCrumbs page="Contact Us" />
        </div>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-lg-9 font-family">
            <h1 class="mb-3">Contact Us</h1>
            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="your-name" class="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="your-name"
                    name="your-name"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="your-surname" class="form-label">
                    Your Surname
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="your-surname"
                    name="your-surname"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="your-email" class="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="your-email"
                    name="your-email"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="your-subject" class="form-label">
                    Your Subject
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="your-subject"
                    name="your-subject"
                  />
                </div>
                <div class="col-12">
                  <label for="your-message" class="form-label">
                    Your Message
                  </label>
                  <textarea
                    class="form-control"
                    id="your-message"
                    name="your-message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div class="col-12">
                  <div class="row">
                    <div class="col-md-6">
                      <button
                        
                        type="submit"
                        class="btn btn-dark w-100 fw-bold"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
                <div class="pt-5" onClick={() => navigate("/")}>
                          <h6 class="mb-0">
                            <a href="#!" class="text-body">
                              <i class="fas fa-long-arrow-alt-left me-2"></i>
                              Back to homepage
                            </a>
                          </h6>
                        </div>
              </div>
            </form>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
};
