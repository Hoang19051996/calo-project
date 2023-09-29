import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import i18n from "../i18n/i18n";
import { setUser } from "../store/global";
import { Navigate, useNavigate } from "react-router-dom";
import no_image from "../Assets/no-image.png";
import ENG from "../Assets/ENG.jpg";
import VN from "../Assets/VN.png";

export const SideBarAdmin = () => {
  const username = useSelector((state) => state.global.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear("user");
    dispatch(setUser({ username: "", password: "" }));
    navigate("/login");
  };

  
  const { t } = useTranslation("translation");
  const changeLanguage = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
  return (
    <>
      <div>
        <nav class="menu" tabindex="0">
          <div class="smartphone-menu-trigger"></div>
          <header class="avatar">
            <img src={no_image} />
            <br/> <br/>
            <h5>{username}</h5>
            <u
              onClick={handleLogout}
              style={{ color: "red", cursor: "pointer" }}
            >
              {t("logout")}
            </u>  
            <div>
              <br></br>
            <select onChange={changeLanguage}>
        <option value="eng">English</option>
        <option value="vie">Vietnam</option>
      </select>
      </div>
          </header>
          <ul>
            <li tabindex="0" class="icon-dashboard" onClick={() => navigate("/dashboard")}>
              <span> <i class="fa-solid fa-chart-line"></i> {t("dashboard")}</span>
            </li>
            <li tabindex="0" class="icon-customers" onClick={() => navigate("/admin")}>
              <span><i class="fa-solid fa-list-check"></i> {t("admin")}</span>
            </li>
            <li tabindex="0" class="icon-users">
              <span><i class="fa-solid fa-user"></i> {t("user")}</span>
            </li>
            <li tabindex="0" class="icon-settings">
              <span><i class="fa-solid fa-gear"></i> {t("setting")}</span>
            </li>
            <li tabindex="0" class="icon-settings" onClick={() => navigate("/")}>
              <span><i class="fa-solid fa-house"></i> Home</span>
            </li>

          </ul>
        </nav>
      </div>
    </>
  );
};
