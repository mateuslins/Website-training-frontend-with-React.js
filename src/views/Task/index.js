import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/Calendar.png';
import iconClock from '../../assets/Clock.png';

function Task() {

    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();

    async function lateVerify() {
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
          .then(response => {
            setLateCount(response.data.length)
          })
      }

      useEffect(() => {
        lateVerify();
      }, []);
    
    return (
        <S.Container>
            <Header lateCount={lateCount} />

            <S.Form>
                <S.TypeIcons>
                    {
                        TypeIcons.map((icon, index) => (
                            index > 0 && //&& serve como if já q é uma verificação simples
                            <button type="button" onClick={ () => setType(index) }>
                                <img src={icon} alt="Tipo da tarefa" 
                                className={ type && type != index && "inative" } /*se existir type e for diferente do index (escolhido), a classe é inative *//> 
                            </button>
                        ))
                    }
                </S.TypeIcons>

                <S.Input>
                    <span>Título</span>
                    <input type="text" placeholder="Título da tarefa"></input>
                </S.Input>

                <S.TextArea>
                    <span>Descrição</span>
                    <textarea rows={5} placeholder="Detalhes da tarefa"></textarea>
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input type="date" placeholder="Data da tarefa"></input>
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input type="time" placeholder="Hora da tarefa"></input>
                </S.Input>

                <S.Options>
                    <div>
                        <input type="checkbox"></input>
                        <span>CONCLUÍDO</span>
                    </div>
                    <button type="button">EXCLUIR</button>
                </S.Options>

                <S.Save>
                    <button type="button">SALVAR</button>
                </S.Save>
            </S.Form>

            <Footer />
        </S.Container>
    )
}

export default Task;