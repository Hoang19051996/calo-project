import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CalculatorCalo from './CalculatorCalo'
import Activities from './Activities'
import DailyCalo from './DailyCalo'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AdminPage } from './container/Admin';
import { Provider } from 'react-redux';
import store from './store/store';
import { LoginContainer } from './container/LoginContainer';
import { RegisterContainer } from './container/RegisterContainer';
import { RequireAuth } from './component/RequireAuth';
import { HomePage } from './container/Home';
import { FreshFruit } from './container/FreshFruit';
import { Meat } from './container/Meat';
import { ComboPage } from './container/ComboPage';
import { CartDetail } from './container/CartDetail';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />



const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter ( [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/bmi',
    element: <App />
  },
  {
    path:'/calculatorcalo',
    element: <CalculatorCalo /> 
  },
  {
    path:'/dailycalo',
    element:    <DailyCalo /> 
  },
  {
    path:'/login',
    element:    <LoginContainer />
  },
  {
    path:'/register',
    element:    <RegisterContainer />
  },
  {
    path:'/admin',
    element:  <RequireAuth> <AdminPage/></RequireAuth>  
  },
  {
    path:'/freshfruit',
    element:    <FreshFruit />
  },
  {
    path:'/meat',
    element:    <Meat />
  },
  {
    path:'/combo',
    element:    <ComboPage />
  },
  {
    path:'/cart-detail',
    element:    <CartDetail />
  },
])
root.render(

    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>

   
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
