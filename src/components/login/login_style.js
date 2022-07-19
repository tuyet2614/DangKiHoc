import styled from "styled-components";
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-size: cover;
    background-image: linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)),url("https://th.bing.com/th/id/R.2b2d9b4b90f0323a79bcdea79af08374?rik=aljFa9XvqVx0mw&pid=ImgRaw&r=0");
    align-items: center;
    justify-content: center;
    color: white;
    z-index: -1;
`;
export const Wrapper_form = styled.form`
    background-color: #9152f8;
    width: 500px;
    height: 95%;
    opacity: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
`;
export const Tieude = styled.h1`
    margin: 30px;
`;
export const Tl = styled.img`
    width: 120px; 
    border-radius: 50%;
    margin-top: 50px;
`;
export const T_ip = styled.input`
    width: 100%; 
    padding: 10px;
    border-radius: 5px;
    margin: 10px auto;
`;
export const Button = styled.button`
    width: 150%; 
    padding: 10px;
    border-radius: 20px;
    margin: 20px auto;
`;
