import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import i18n from "../i18n/i18n";
import { setUser } from "../store/global";
import { Navigate, useNavigate } from "react-router-dom";
import no_image from "../Assets/no-image.png";
export const SideBarAdmin = () => {
  const username = useSelector((state) => state.global.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation("translation");
  const changeLanguage = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
  const handleLogout = () => {
    localStorage.clear("user");
    dispatch(setUser({ username: "", password: "" }));
    navigate("/login");
  };
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
          </header>
          <ul>
            <li tabindex="0" class="icon-dashboard" onClick={() => navigate("/dashboard")}>
              <span>Dashboard</span>
            </li>
            <li tabindex="0" class="icon-customers" onClick={() => navigate("/admin")}>
              <span>Manage</span>
            </li>
            <li tabindex="0" class="icon-users">
              <span>Users</span>
            </li>
            <li tabindex="0" class="icon-settings">
              <span>Settings</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
