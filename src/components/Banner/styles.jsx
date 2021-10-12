import styled from 'styled-components';
import img from '../../img/banner.png';
import mobile from '../../img/banner-mobile.png';

export const Container = styled.div`
    background-image: url(${img});
    width: 100%;
    height: 375px;
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;

    @media (max-width: 375px) {
       background-position: center;
       background-repeat: no-repeat; 
       height: 221px;
    }
`;