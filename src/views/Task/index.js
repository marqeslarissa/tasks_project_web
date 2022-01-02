import React, { useState, useEffect } from "react";
import * as S from "./styles";
import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TypeIcons from "../../utils/typeIcons"
import iconCalendar from "../../assets/calendar.png";

function Task() {
  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11`)
      .then(response => {
        setLateCount(response.data.length)
      })
  }
  useEffect(() => {
    lateVerify();
  }, [])

  return (
    <S.Container>
      <Header lateCount={lateCount} />
      <S.Form>
        <S.TypeIcons>
          {
            TypeIcons.map((icon, index) => (
              index > 0 && 
              <button type="button" onClick={() => setType(index)}>
                <img src={icon} alt="tipo da tarefa" className={type && type != index && 'inative'} />
              </button>
            ))
          }
        </S.TypeIcons>
        <S.Input>
          <span>Título</span>
          <input type="text" placeholder="Digite o título"></input>
        </S.Input>
        <S.TextArea>
          <span>Descrição</span>
          <textarea type="textarea" rows={5} placeholder="Digite a descrição" />
        </S.TextArea>
        <S.Input>
          <span>Data</span>
          <input type="date"></input>
          {/* <img src={iconCalendar} alt="calendario" /> */}
        </S.Input>
        <S.Input>
          <span>Hora</span>
          <input type="time"></input>
        </S.Input>
        <S.Options>
          <div>
          <input type="checkbox" />
            <span>Concluído</span>
          </div>
          <button type="button">Excluir</button>
        </S.Options>
        <S.Save>
          <button type="button">Salvar</button>
        </S.Save>
      </S.Form>
      <Footer />
    </S.Container>
  );
}

export default Task;
