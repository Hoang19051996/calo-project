import axios from "axios";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCommune, setDistrict, setProvince } from "../store/Food";


const apiUrl = "https://vietnam-administrative-division-json-server-swart.vercel.app";
const apiEndpointDistrict = apiUrl + "/district/?idProvince=";
const apiEndpointCommune = apiUrl + "/commune/?idDistrict=";


async function getDistrict(idProvince) {
  const { data: districtList } = await axios.get(
    apiEndpointDistrict + idProvince
  );
  return districtList;
}

async function getCommune(idDistrict) {
  const { data: communeList } = await axios.get(
    apiEndpointCommune + idDistrict
  );
  return communeList;
}

export const Province = () => {
  const [districtList, setDistrictList] = React.useState([]);
  const [communeList, setCommuneList] = React.useState([]);
  const [districtValue, setDistrictValue] = React.useState(0);
  const [communeValue, setCommuneValue] = React.useState(0);
  const [isLoadingDistrict, setIsLoadingDistrict] = React.useState(false);
  const [isLoadingCommune, setIsLoadingCommune] = React.useState(false);
  const dispatch = useDispatch();

  const handleChangeProvince = async (event) => {
    //value này là giá trị của thành phố đang được quy ước ví dụ như 79 là Hồ Chí Minh
    const value = event.target.value;

    // mình sẽ lấy được cái giá trị của thằng thành phố , thằng value trên nó đang là chuỗi string, 
    // sau khi mà lấy được rồi thì thằng label sẽ dựa vào đó in ra cái text
    let index = event.nativeEvent.target.selectedIndex;
    let labelProvince = event.nativeEvent.target[index].text;



    if (value === "0") {
      setDistrictList([]);
      setCommuneList([]);
      setDistrictValue("0");
      setCommuneValue("0");
      return;
    }
    setIsLoadingDistrict(true);
    const districtList = await getDistrict(value);
    setDistrictList(districtList);
    setIsLoadingDistrict(false);
    dispatch(setProvince(labelProvince))

  };

  const handleChangeDistrict = async (event) => {
    const value = event.target.value;
    let index = event.nativeEvent.target.selectedIndex;
    let labelDistrict = event.nativeEvent.target[index].text;


    setDistrictValue(value);
    if (value === "0") {
      setCommuneList([]);
      setCommuneValue("0");
    } else {
      setIsLoadingCommune(true);
      const communeList = await getCommune(value);
      setCommuneList(communeList);
      setIsLoadingCommune(false);
      dispatch(setDistrict(labelDistrict))
    }
  };
  const handleChangeCommune = (event) => {
    setCommuneValue(event.target.value);
    
    let index = event.nativeEvent.target.selectedIndex;
    let labelCommune = event.nativeEvent.target[index].text;
    dispatch(setCommune(labelCommune))
    
  };
  return (
    <div className="main-container">
      <div className="select-item">
        <label htmlFor="city-province">Province/City:</label>
        <select id="city-province" onChange={handleChangeProvince}>
          <option value="0">&nbsp;Choose Province/City...</option>
          <option value="01">&nbsp;Thành phố Hà Nội</option>
          <option value="79">&nbsp;Thành phố Hồ Chí Minh</option>
          <option value="31">&nbsp;Thành phố Hải Phòng</option>
          <option value="48">&nbsp;Thành phố Đà Nẵng</option>
          <option value="92">&nbsp;Thành phố Cần Thơ</option>
          <option value="02">&nbsp;Tỉnh Hà Giang</option>
          <option value="04">&nbsp;Tỉnh Cao Bằng</option>
          <option value="06">&nbsp;Tỉnh Bắc Kạn</option>
          <option value="08">&nbsp;Tỉnh Tuyên Quang</option>
          <option value="10">&nbsp;Tỉnh Lào Cai</option>
          <option value="11">&nbsp;Tỉnh Điện Biên</option>
          <option value="12">&nbsp;Tỉnh Lai Châu</option>
          <option value="14">&nbsp;Tỉnh Sơn La</option>
          <option value="15">&nbsp;Tỉnh Yên Bái</option>
          <option value="17">&nbsp;Tỉnh Hoà Bình</option>
          <option value="19">&nbsp;Tỉnh Thái Nguyên</option>
          <option value="20">&nbsp;Tỉnh Lạng Sơn</option>
          <option value="22">&nbsp;Tỉnh Quảng Ninh</option>
          <option value="24">&nbsp;Tỉnh Bắc Giang</option>
          <option value="25">&nbsp;Tỉnh Phú Thọ</option>
          <option value="26">&nbsp;Tỉnh Vĩnh Phúc</option>
          <option value="27">&nbsp;Tỉnh Bắc Ninh</option>
          <option value="30">&nbsp;Tỉnh Hải Dương</option>
          <option value="33">&nbsp;Tỉnh Hưng Yên</option>
          <option value="34">&nbsp;Tỉnh Thái Bình</option>
          <option value="35">&nbsp;Tỉnh Hà Nam</option>
          <option value="36">&nbsp;Tỉnh Nam Định</option>
          <option value="37">&nbsp;Tỉnh Ninh Bình</option>
          <option value="38">&nbsp;Tỉnh Thanh Hóa</option>
          <option value="40">&nbsp;Tỉnh Nghệ An</option>
          <option value="42">&nbsp;Tỉnh Hà Tĩnh</option>
          <option value="44">&nbsp;Tỉnh Quảng Bình</option>
          <option value="45">&nbsp;Tỉnh Quảng Trị</option>
          <option value="46">&nbsp;Tỉnh Thừa Thiên Huế</option>
          <option value="49">&nbsp;Tỉnh Quảng Nam</option>
          <option value="51">&nbsp;Tỉnh Quảng Ngãi</option>
          <option value="52">&nbsp;Tỉnh Bình Định</option>
          <option value="54">&nbsp;Tỉnh Phú Yên</option>
          <option value="56">&nbsp;Tỉnh Khánh Hòa</option>
          <option value="58">&nbsp;Tỉnh Ninh Thuận</option>
          <option value="60">&nbsp;Tỉnh Bình Thuận</option>
          <option value="62">&nbsp;Tỉnh Kon Tum</option>
          <option value="64">&nbsp;Tỉnh Gia Lai</option>
          <option value="66">&nbsp;Tỉnh Đắk Lắk</option>
          <option value="67">&nbsp;Tỉnh Đắk Nông</option>
          <option value="68">&nbsp;Tỉnh Lâm Đồng</option>
          <option value="70">&nbsp;Tỉnh Bình Phước</option>
          <option value="72">&nbsp;Tỉnh Tây Ninh</option>
          <option value="74">&nbsp;Tỉnh Bình Dương</option>
          <option value="75">&nbsp;Tỉnh Đồng Nai</option>
          <option value="77">&nbsp;Tỉnh Bà Rịa - Vũng Tàu</option>
          <option value="80">&nbsp;Tỉnh Long An</option>
          <option value="82">&nbsp;Tỉnh Tiền Giang</option>
          <option value="83">&nbsp;Tỉnh Bến Tre</option>
          <option value="84">&nbsp;Tỉnh Trà Vinh</option>
          <option value="86">&nbsp;Tỉnh Vĩnh Long</option>
          <option value="87">&nbsp;Tỉnh Đồng Tháp</option>
          <option value="89">&nbsp;Tỉnh An Giang</option>
          <option value="91">&nbsp;Tỉnh Kiên Giang</option>
          <option value="93">&nbsp;Tỉnh Hậu Giang</option>
          <option value="94">&nbsp;Tỉnh Sóc Trăng</option>
          <option value="95">&nbsp;Tỉnh Bạc Liêu</option>
          <option value="96">&nbsp;Tỉnh Cà Mau</option>
        </select>
      </div>

      <div
        className="select-item district-town-select"
        onChange={handleChangeDistrict}
      >
        <label htmlFor="district-town">District :</label>
        <select id="district-town" value={districtValue}>
          <option value="0">&nbsp;Choose District...</option>
          {districtList.map((district) => (
            <option value={district.idDistrict}>&nbsp;{district.name}</option>
          ))}
        </select>
        {isLoadingDistrict && (
          <span>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/qtv-music-shop.appspot.com/o/loading-icon%2Floading-icon-small.gif?alt=media&token=769f1086-0302-4e17-852e-e1409ec215b4"
              alt="loading-icon"
            />
          </span>
        )}
      </div>

      <div className="select-item ward-commune-select">
        <label htmlFor="ward-commune">Commune :</label>
        <select
          id="ward-commune"
          value={communeValue}
          onChange={handleChangeCommune}
        >
          <option value="0">&nbsp;Choose Commune...</option>
          {communeList.map((commune) => (
            <option value={commune.idCommune}>&nbsp;{commune.name}</option>
          ))}
        </select>
        {isLoadingCommune && (
          <span>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/qtv-music-shop.appspot.com/o/loading-icon%2Floading-icon-small.gif?alt=media&token=769f1086-0302-4e17-852e-e1409ec215b4"
              alt="loading-icon"
            />
          </span>
        )}
      </div>
    </div>
  );
}

