import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import {Logo} from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span>App
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            eligendi sint dolores quam iusto minus numquam molestiae, qui
            incidunt mollitia commodi ipsam doloremque saepe optio veniam eos
            ex, quas voluptatum!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
