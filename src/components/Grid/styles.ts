import styled from 'styled-components';
import { themeGet } from 'styled-system';

export const GridTable = styled.table`
  width: 100%;
  table-layout: fixed;
  
  & thead > tr > th {
    background-color: ${themeGet('colors.gray.100')};
    font-weight: ${themeGet('fontWeight.bold')};
    text-align: left;
  }
  
  & tbody > tr > td {
    background-color: ${themeGet('colors.white')};
  }
  
  & tbody > tr:nth-child(even) > td {
    background-color: ${themeGet('colors.gray.200')};
  }
  
  & td span {
    display: none;
  }
    
  @media(max-width: 768px) {
    & thead {
      display: none;
    }
    & tr {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }
    & td {
      margin: 0 -1px -1px 0;
      padding-top: 10px;
      position: relative;
      width: 50%;
    }
    & td span {
      display: block;
      font-weight: ${themeGet('fontWeight.bold')};
    }
  }
  
  @media(max-width: 480px) {
    & td {
      width: 100%;
    }
  }
`;
