import styled from '@emotion/styled';

export const LeftSide = styled.div`
margin-right: 30px;
`;

export const RightSide = styled.ul`
`;

export const Movie = styled.div`
display:flex;
border-bottom: 2px solid #6e7073;
padding:12px;
`;

export const Genres = styled.ul`
display: flex;
& :not(:last-child){
    margin-right:8px;
}
`;

export const Button=styled.button`
margin-top: 14px;
margin-left: 12px;
margin-bottom: 10px;`;
