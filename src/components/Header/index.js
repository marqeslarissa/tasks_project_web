import React from "react";
import * as S from "./styles";
import logo from '../../assets/elipse4.png'
import notifications from '../../assets/notifications.png'

function Header({lateCount, ClickNotification}) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="logo" />
      </ S.LeftSide>
      <S.RightSide>
        <a href="#">Inìcio</a>
        <span className="dividir"/>
        <a href="#">Nova Tarefa</a>
        <span className="dividir"/>
        <button onclick={ClickNotification}>
          <img src={notifications} alt="Notificação"/>
          <span>{lateCount}</span>
        </button>
      </ S.RightSide>
    </ S.Container>
  );
}

export default Header;
