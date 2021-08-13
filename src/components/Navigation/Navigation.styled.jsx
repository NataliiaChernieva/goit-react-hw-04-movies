import styled from '@emotion/styled';

export const CurrentNavigation = styled.nav`
// display: flex;
width:100%;
background-color:#3d3939;
text-transform: uppercase;
padding: 10px 30px;
font-weight: 500;
& a{
     text-decoration: none;
     color:#d7d7d7;
    }
& :not(:last-child){
    margin-right: 20px;
}
`;

export const Header = styled.header`
height: 40px;
`;



