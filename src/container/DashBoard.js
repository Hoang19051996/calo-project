import { useDispatch } from "react-redux";
import { BasicLineChart } from "../component/BasicLineChart";
import { SideBarAdmin } from "../component/SideBarAdmin";
import { fetchFoods, fetchOrders } from "../store/Food";
import React, { useEffect } from "react";
import BasicPie from "../component/PieChart";

export const DashBoard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, []);


    
  React.useEffect(() => {
    dispatch(fetchFoods());
  }, []);




  return (
    <>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <SideBarAdmin />
          </div>
          <div className="col-md-10">
            <div className="container">
              <div className="col-md-2"></div>
              <div className="col-md-5 bg-dash">
                <BasicLineChart />
              </div>
            
            </div>
            <br />
            <br />
            <div className="container " >
             
              <div className="col-md-12 bg-dash d-flex justify-content-center ">
                <BasicPie />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
