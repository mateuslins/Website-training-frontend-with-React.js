import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.div`
    width: 50%;
`;

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    img{
        width: 75px;
        height: 75px;
        margin: 15px 5px;

        cursor: pointer;

        &:hover{
            opacity: 0.75;
        }
    }

    .inative{
        opacity: 0.5;
    }

    button{
        background: none;
        border: none;
    }
`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0px;

    span{
        color: #707070;
        margin-bottom: 5px;
        font-weight: bold;
    }

    input{
        font-size: 16px;
        padding: 5px 0px;
        border: none;
        border-bottom: 1px solid #FF8000;
    }

    img{
        width: 20px;
        height: 20px;
        position: relative;
        left: 97.5%;
        bottom: 30px;
    }
`;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0px;

    span{
        color: #707070;
        margin-bottom: 5px;
        font-weight: bold;
    }

    textarea{
        border: 1px solid #FF8000;
        border-radius: 5px;
        padding: 5px;
        font-size: 16px;
    }
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    div{
        display: flex;
        align-items: center;
        color: #FF8000;
        font-weight: bold;
        font-size: 16px;
    }

    button{
        font-weight: bold;
        color: #12126D;
        background: none;
        border: none;
        font-size: 16px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }
`;

export const Save = styled.div`
    margin-top: 30px;

    button{
        width: 100%;
        padding: 15px;
        background: #FF8000;
        border: none;
        border-radius: 30px;

        cursor: pointer;

        font-size: 16px;
        font-weight: bold;
        color: white;

        &:hover{
            opacity: 0.7;
        }
    }
`;