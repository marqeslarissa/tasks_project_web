import React from "react";
import * as S from "./styles";
import logo from '../../assets/elipse4.png'

function TaskCard() {
  return (
    <S.Container>
      <S.TopCard>
        <img src={logo} alt="Icone de Plus" />
        <h3>Título da Tarefa</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>31/12/2021</strong>
        <span>18:00</span>
      </S.BottomCard>
    </ S.Container>
  );
}

export default TaskCard;
