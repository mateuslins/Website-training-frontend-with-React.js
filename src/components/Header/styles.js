import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #12126D;
    border-bottom: 5px solid #FF8000;
    
    display: flex;
`;

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img{
        
    }
`;

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;

    a{
        color: white;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #FF8000;
        }
    }

    #notification{
        img{
            width: 40px;
            height: 40px;
        }

        span{
            background: white;
            color: #FF8000;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -25px;
            right: 15px;
        }

        &:hover{
            opacity: 0.5;
        }
    }

    .dividir::after{
        content: "|";
        margin: 0px 10px;
        color: white;
    }
`;