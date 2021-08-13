import styled from '@emotion/styled';

export const LeftSide = styled.div`
@media screen and (min-width: 768px) {
margin-right: 30px;
}
`;

export const RightSide = styled.ul`
 width: 240px;

 @media screen and (min-width: 768px) {
     width:380px;
 }


`;

export const Movie = styled.div`
   padding:12px;
   border-bottom: 2px solid #6e7073;

@media screen and (min-width: 768px) {
   display:flex;
}
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

export const MovieImg = styled.img`
 height: 356px;
  width: 240px;
  border-radius: 5px;

  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
    margin-top: 16px;
  }

  @media screen and (min-width: 768px) {
      height: 374px;
    width: 264px;
    // margin-right: 32px;
  }

  @media screen and (min-width: 1024px) {
    height: 478px;
    width: 396px;
  }
`;
