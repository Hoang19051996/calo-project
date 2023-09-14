import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";

export const URL_API_ACCOUNTS = "https://64c7a27fa1fe0128fbd50f1c.mockapi.io/accounts";
export const RegisterContainer = () => {
    const {handleSubmit, control} = useForm()
    const navigate = useNavigate();
    const handleRegister = (value) => {
        axios.post(URL_API_ACCOUNTS , value)
        navigate("/login")
    }
  return (
    <>
      <>
        <Container style={{ margin: 100 }}>
          <h3>Register Page</h3>
          <form onSubmit={handleSubmit(handleRegister)}>
            <InputGroup>
              <InputGroupText>@</InputGroupText>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="name" type="email" required/>
                )}
              />
            </InputGroup>
            <br></br>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="password" type="password" required/>
              )}
            />

            <br />
           
            <Button type="submit" color="primary" >Register</Button>
            <Link to='/login'>
            <Button>Login</Button>
            </Link>
           
          </form>
        </Container>
      </>
    </>
  );
};
