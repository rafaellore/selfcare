import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px 50px;

    @media (max-width: 375px) {
    padding: 15px 20px;
    }
`;

export const Logo = styled.div`
    display: flex;
    margin-top: 3px;
    p{
        font-size: 18px;
        font-weight: bold;
        margin-left: 10px;
        margin-top: -4px;
    }
`;

export const Icons = styled.div`
   a{
       padding: 0 10px;
   }
   a:hover{
       cursor: pointer;
       color: #3f8109;
   }
`;
