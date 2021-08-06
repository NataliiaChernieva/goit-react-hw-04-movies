import styled from '@emotion/styled';

export const CurrentCast = styled.ul`
display:grid;
max-width: calc(100vw-80px);
grid-template-columns: repeat( auto-fill, minmax(180px, 1fr));
grid-gap: 20px;
margin-top: 20px;
border-top: 2px solid #6e7073;
padding: 20px 12px;`;