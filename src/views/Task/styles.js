import styled from "styled-components";
import * as S from "./styles";

export const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.div`
  width: 50%;
  margin-bottom: 50px;
`

export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .inative{
    opacity: 0.5;
  }

  button{
    background: none;
    border: none;
  }
  
  img{
    width: 30px;
    height: 30px;
    margin: 10px;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }
`

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span{
    color: #707070;
    margin: 5px 0;
  }

  input{
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #EE6b26;
  }

  img{
    width: 20px;
    height: 20px;
    position: relative;
    left: 96%;
    bottom: 36px;
  }
`

export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  span{
    color: #707070;
    margin: 5px 0;
  }

  textarea{
    font-size: 16px;
    border: 1px solid #EE6b26;
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  
  &:hover{
    opacity: 0.7;
  }

  button{
    font-weight: bold;
    font-size: 18px;
    color: #20295F;
    background: none;
    border: none;
  }

  div{
    display: flex;
    align-items: center;
    color: #EE6B26;
    font-wight: bold;
    font-size: 18px;
  }
`

export const Save = styled.div`
  width: 100%;

  margin-top: 30px;

  button{
    height: 50px;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    color: #FFF;
    background: #EE6B26;
    border: none;
    border-radius: 30px;
    paddding: 20px;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }
`