import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Toast,
  ToastBody,
  ToastHeader,
} from "reactstrap";
import { URL_API_ACCOUNTS } from "./RegisterContainer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/global";
import { Link, useNavigate } from "react-router-dom";

export const LoginContainer = () => {
    const {handleSubmit, control} = useForm();
    const dispatch = useDispatch()
    const [loginSuccess, setLoginSuccess] = useState(true);
    const navigate= useNavigate();
    const handleLogin = async (values) => {
        const responseAccounts = await axios.get(URL_API_ACCOUNTS)
        const accountLoginFound = responseAccounts.data.find(account => account.username === values.username)

        if ( accountLoginFound && accountLoginFound.password === values.password) {
           
            setLoginSuccess(true)
            dispatch(setUser(accountLoginFound))
            localStorage.setItem('user', JSON.stringify(accountLoginFound))
            navigate('/dashboard')
    

        } else {
            setLoginSuccess(false)
        }
    }
  return (
    <>
      <Container style={{ margin: 100 }}>
        <h3>Login Page</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <InputGroup>
            <InputGroupText>@</InputGroupText>
            <Controller name='username' control={control} render={({field}) => (
             <Input {...field} placeholder="name" type="text" />
  )} />

           
          </InputGroup>
          <br></br>
          <Controller name='password' control={control} render={({field}) => (
             <Input {...field} placeholder="password" type="password" />
  )} />
        
          <br />
          <Button type="submit"> Login</Button>
          <Link to='/register'>
            <Button color="primary" style={{marginLeft: 30}}>Register</Button>
            </Link>
        </form>
        <Toast isOpen={!loginSuccess} >
            <ToastHeader icon="danger" toggle={() => setLoginSuccess(!loginSuccess)} >
                Login Fail
            </ToastHeader>
            <ToastBody>
                Please check username, password
            </ToastBody>

        </Toast>
      </Container>
    </>
  );
};
