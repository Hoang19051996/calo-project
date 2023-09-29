import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"
import i18n from "../i18n/i18n";
import EN from "../Assets/ENG.jpg";
import VN from "../Assets/VN.png";
export const Footer = () => {
    const navigate = useNavigate();
    const { t } = useTranslation("translation");
    const onClickVN = () => {
      i18n.changeLanguage("vie");
    };
    const onClickEN = () => {
      i18n.changeLanguage("eng");
    };
    return(

        <>
 
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-5">
            <h6>{t("about")}</h6>
            <p class="text-justify">{t("about_text")}
</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>{t("gallery")}</h6>
            <ul class="footer-links">
              <li onClick={()=> navigate("/freshfruit")}>{t("freshfruit")}</li>
              <li onClick={()=> navigate("/juice")}>{t("juice")}</li>
              <li onClick={()=> navigate("/vegetable")}>{t("vegetable")}</li>
              <li onClick={()=> navigate("/fastfood")}>{t("fastfood")}</li>
              <li onClick={()=> navigate("/meat ")}>{t("meat")}</li>
              <li onClick={()=> navigate("/others")}>{t("others")}</li>
             
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li onClick={() => navigate("/contact-us")}>{t("contact_us")}</li>
              <li onClick={() => navigate("/bmi")}>BMI</li>
              <li onClick={() => navigate("/dailycalo")}>{t("daily_calorie")}</li>
              <li onClick={() => navigate("/combo")}>{t("menu")}</li>
            </ul>
          </div>
        </div>
 
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by &nbsp;
         <a href="#">Nguyen Huy Hoang</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa-brands fa-google"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa-brands fa-instagram"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
        
        
        </>
    )
}