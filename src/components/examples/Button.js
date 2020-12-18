import styled from "styled-components"

const Button = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Langar&display=swap');

  a {
    color: #4856e7;
  }

  .buttons {
    margin: 0;
    padding: 0;
    font-family: 'Langar', cursive;
    font-size: 10px;
    position: absolute;
  }

  .btn-hover {
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin: 20px;
    height: 40px;
    text-align: center;
    border: none;
    background-size: 300% 100%;

    border-radius: 50px;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }

  .btn-hover:hover {
    background-position: 100% 0;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }

  .btn-hover:focus {
    outline: none;
  }

  .btn-hover.color-1 {
    background-image: linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021);
    box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);
  }
`

export default Button