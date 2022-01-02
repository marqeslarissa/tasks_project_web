import React, { useState, useEffect } from "react";
import * as S from "./styles";
import api from "../../services/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterCard from "../../components/FilterCard";
import TaskCard from "../../components/TaskCard";

function Home() {
  const [filterActived, setFilterActived] = useState('all'); // recebe nome do estado e a funcao que atualiza o estado
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11`)
      .then(response => {
        setTasks(response.data)
        console.log(response.data)
      })
  }
  useEffect(() => {  //useEffect é uma function distapada toda vez que a tela for carregada
    loadTasks(); //chama a funcao e carrega as informacoes do DB
  }, [filterActived]) //toda vez que mudar o estado do filtro o loadtasks é carregado

  return (
    <S.Container>
      <Header />
      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterActived == "all"} />
        </button>
        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" actived={filterActived == "today"} />
        </button>
        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterActived == "week"} />
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={filterActived == "month"} />
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={filterActived == "year"} />
        </button>
      </S.FilterArea>
      <S.Title>
        <h3>TAREFAS</h3>
      </S.Title>
      <S.Content>
        {
          tasks.map(t => (
            <TaskCard type={t.title} title={t.title} when={t.when}/>
          ))
        }
      </S.Content>
      <Footer />
    </S.Container>
  );
}

export default Home;
