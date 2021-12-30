import React from "react";
import * as S from "./styles";
import logo from '../../assets/elipse4.png'

function Header() {
  return (
    <S.Container>
     <S.LeftSide>
       <img src={logo} alt="logo" />
     </S.LeftSide>
     <S.RightSide>
     </S.RightSide>
     </S.Container>
  );
}

export default Header;
