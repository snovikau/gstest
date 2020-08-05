import styled from 'styled-components';

export const FilterWrapper = styled.div`
 display: flex;
 flex-direction: row;
 
 @media(max-width: 768px) {
  flex-direction: column;
 }  
`;

export const FilterItem = styled.div`
  height: 20px;
  padding: 5px;
  
  & span {
    display: none;
  }
  
  & label {
    margin-right: 10px;
  }
  
   @media(max-width: 768px) {
    & label {
      width: 70px;
      display: inline-block;
    }
   }  
  
`;
