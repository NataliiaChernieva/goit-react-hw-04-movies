import styled from '@emotion/styled';

export const CurrentMovieList = styled.ul`
    justify-content: center;
    
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 293px 293px;
    grid-gap: 30px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 274px 274px 274px;
  }

  // @media screen and (max-width: 1024px) {  
  //  display: grid;
  // //min-width: calc(100vh-60px)
  // grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  // grid-row-gap: 20px;
  // margin-top: 0;
  // margin-bottom: 0;
  // padding: 0;
  // margin-left: auto;
  // margin-right: auto;}
`;

export const MovieItem = styled.li`
  min-height: 460px;
  width: 280px;

  @media screen and (max-width: 767px) {
    &:not(:last-child){
       margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 274px;
  }

  @media screen and (min-width: 1024px) {
     width: 274px;
  }
 `;

export const MovieImage = styled.img`
height: 398px;
width: 274px;
border-radius: 5px ;

  &:hover,
  &:focus{
    box-shadow: 0px 8px 43px rgba(255, 107, 1, 0.6);;
  }`;

export const MovieTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  line - height: 14px;
  margin-bottom: 6px;
  margin-top: 10px;
`;