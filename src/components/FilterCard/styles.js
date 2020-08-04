import styled from 'styled-components';

export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${props => props.actived ? '#FF8000' : '#12126D'};
    padding: 10px;
    
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    cursor: pointer;

    img{
        width: 25px;
        height: 25px;
    }

    span{
        color: white;
        font-weight: bold;
        font-size: 18px;
        align-self: flex-end;
    }

    &:hover{
        background: #FF8000;
    }
`;