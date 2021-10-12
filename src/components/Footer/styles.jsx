import styled from 'styled-components';

export const Footer = styled.div`
    margin-top: 111px;
    padding: 40px 70px;
    width: 100%;
    border-top: 0.1px solid#A5A1A1;

    @media (max-width: 375px) {
        margin-top: 0;
        padding: 20px 33px;
        max-width: 375px;
    }
`;

export const Email = styled.div`

    p{
        font-weight: bold;
        font-size: 14px;
        margin: 10px 0;
    }

    input{
        width: 397px;
        height: 40px;
        background: #FFFFFF;
        border: 0.5px solid #D9D9D9;
        border-radius: 5px 0px 0px 5px;
    }
    input::placeholder{
        padding-left: 10px;
        color: #A8A4A4;
    }
    input:focus {
    color: #A8A4A4;
    border: 1px solid #A8A4A4;;
    }
    button{
        padding-bottom: 2px;
        border: 0;
        width: 152px;
        height: 40px;
        background: #5CA720;
        border-radius: 0px 5px 5px 0px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        transition: 0.3s;
    }
    button:hover{
        cursor: pointer;
        background-color: #3f8109;
    }
`;

export const Pages = styled.div`
    display: flex;
    flex-direction: column;
    
    a{
        font-weight: bold;
        font-size: 14px;
        margin: 5px 0;
    }
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #F9F9F9;
    
    @media (max-width: 375px) {
        flex-direction: column;

        input, button{
            margin-top: 10px;
            width: 100%;
        }
    }
`;
export const Bottom = styled.div`
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    a{
        padding: 0 8px;
    }
`;