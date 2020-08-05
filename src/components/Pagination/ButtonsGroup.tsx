import React, { FC } from 'react';
import { StyledButton } from 'components/Pagination/styles';

interface Props {
  range: number[],
  active: number,
  onButtonClick: (number) => void,
}

export const ButtonsGroup: FC<Props> = (
  {
    range, active, onButtonClick,
  }
) => (
  <span>
    {
      range.map(current => (
        <StyledButton
          active={current === active}
          type="button"
          key={current}
          onClick={() => onButtonClick(current)}
        >
          {current}
        </StyledButton>
      ))
    }
  </span>
);
