import styled from 'styled-components';

export const Container = styled.div`
   flex: 0 1 30%;
   padding: 35px 0;
   cursor: pointer;
    img{
        width: 303px;
        height: 303px;
        transition: 0.3s;
    }
    img:hover{
        width: 315px;
        height: 315px;
    }
    .price{
        display: flex;
        align-items: flex-end;
    }
    .title{
        margin: 10px 0;
    }
    .price p{
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 3px;
    }
    .value{
        margin: 0 !important;
        margin-left: 5px !important;
        font-size: 22px !important;
        color:  #5CA720;
    }
    @media (max-width: 375px) {
        margin-bottom: 30px;
        img{
            width: 126.44px;
            height: 126.44px;
            transition: 0.3s;
        }
        img:hover{
            width: 130px;
            height: 130px;
        }
        .value{
            font-size: 18px !important;
            color:  #5CA720;
            margin-bottom: 1px !important;
        }
        .price p{
            margin-bottom: 3px;
        }
    }

`;

