import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: #20295F;
  border-top: 5px solid #EE6B26;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  span{
    color: #fff;
  }
`

export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  img{
    width: 50px;
    hight: 50px;
  }
`

export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    &:hover{
      color: #EE6B26;
    }
  }

  #notifications{
    img {
      width: 30px;
      height: 30px;
    }
    span{
      background: #fff;
      color: #EE6B26;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }
    
    &:hover{
      opacity: 0.5;
    }
  }
  .dividir::after{
    content: "|";
    margin: 0 10px;
    color: #fff;
  }
`