import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

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
            </S.Form>

            <Footer />
        </S.Container>
    )
}

export default Task;