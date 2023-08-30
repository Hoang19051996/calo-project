import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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

    const handleRegister = (value) => {
        axios.post(URL_API_ACCOUNTS , value)
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
                  <Input {...field} placeholder="name" type="text" />
                )}
              />
            </InputGroup>
            <br></br>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="password" type="password" />
              )}
            />

            <br />
           
            <Button type="submit" color="primary"> Register</Button>
            <Link to='/login'>
            <Button>Login</Button>
            </Link>
           
          </form>
        </Container>
      </>
    </>
  );
};
