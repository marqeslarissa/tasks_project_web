import styled from "styled-components";

export const Container = styled.div`
  width: 260px;
  height: 60px;
  background: ${props => props.actived ? '#EE6B26' : '#20295F'};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img{
    widht: 38px;
    height: 38px;
    
  }
  
  span{
    color: #fff;
    font-weight: bold;
    align-self:flex-end;
    font-size: 18px;
  }

  &:hover{
    background: #EE6B26;
  }
`
