import styled from 'styled-components';
import { themeGet } from 'styled-system';

export const StyledButton = styled.button`
  font-weight: ${({ active }) => active ? themeGet('fontWeight.bold') : themeGet('fontWeight.default')};
`;

export const StyledBar = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
`;
