import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import {FormRow, Logo} from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Rohit"/>
        <FormRow type="text" name="lastName" labelText="last name" defaultValue="Kirti"/>
        <FormRow type="text" name="location" defaultValue="India"/>
        <FormRow type="email" name="email" defaultValue="rohit@example.com"/>
        <FormRow type="password" name="password" defaultValue="Rohit"/>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member? <Link to="/login" className="member-btn">Login</Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
