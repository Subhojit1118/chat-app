import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {BiPowerOff} from 'react-icons/bi';
export default function Logout() {
    const navigate = useNavigate();
    const handleClick = async () => {
        localStorage.removeItem('chat-app-user');
        navigate('/login');
    };
  return (
    <Button>
      <BiPowerOff onClick={handleClick} />
    </Button>
  )
}

const Button = styled.div`
  display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #9a86f3;
    border: none;
    cursor: pointer;
  svg {
    color: #ebe7ff;
    font-size: 1.3rem;
  }
`;