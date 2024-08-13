import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import { loginRoute } from "../utils/APIRoutes";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/");
    }
  }, [navigate]);

  const handleValidation = () => {
    const { username, password } = values;
    if (password === "") {
      toast.error("Password is required", toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error("Username is required", toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.message, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <div className="brand">
            <img src={logo} alt="logo" />
            <h1>Snappy</h1>
          </div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Login User</button>
          <span>
            Don't have any account? <Link to="/register">Register</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2rem;
    background-color: #00000076;
    padding: 3rem 5rem;
    input {
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      background-color: transparent;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    button {
      padding: 1rem 2rem;
      text-align: center;
      border: none;
      border-radius: 0.4rem;
      background-color: #997af0;
      color: white;
      cursor: pointer;
      font-weight: bold;
      font-size: 1rem;
      text-transform: uppercase;
      &:hover {
        transition: 0.4s ease-in-out;
        background-color: #4e0eff;
      }
    }
    span {
      color: white;
      text-align: center;
      font-size: 1rem;
      text-transform: uppercase;
      a {
        color: #997af0;
        text-decoration: none;
        margin-left: 0.5rem;
        font-weight: bold;
        &:hover {
          color: #4e0eff;
          text-decoration: underline;
        }
      }
    }
  }
`;

export default Login;
