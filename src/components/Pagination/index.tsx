import React, { FC, useState } from 'react';
import { ButtonsGroup } from 'components/Pagination/ButtonsGroup';
import { StyledBar } from 'components/Pagination/styles';

interface Props {
  totalItems: number;
  onChange: (offset: number, limit: number) => void;
}

export const ITEMS_ON_PAGE_DEFAULT = 5;
const configItemsOnPage = [ITEMS_ON_PAGE_DEFAULT, 10, 25, 50, 100];

const Pagination: FC<Props> = ({ totalItems, onChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsOnPage, setItemsOnPage] = useState(ITEMS_ON_PAGE_DEFAULT);

  const pagesCount: number = Math.ceil(totalItems / itemsOnPage);
  const pagesRange: number[] = [];

  for (let i = 1; i <= pagesCount; i += 1) {
    pagesRange.push(i);
  }

  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
    onChange(itemsOnPage * (pageNum - 1), itemsOnPage);
  };

  const handleItemsCountChange = (itemsCount: number) => {
    setCurrentPage(1);
    setItemsOnPage(itemsCount);
    onChange(0, itemsCount);
  };

  return (
    <StyledBar>
      <ButtonsGroup range={pagesRange} active={currentPage} onButtonClick={handlePageChange} />
      <ButtonsGroup range={configItemsOnPage} active={itemsOnPage} onButtonClick={handleItemsCountChange} />
    </StyledBar>
  );
};

export default Pagination;
