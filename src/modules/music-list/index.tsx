import React, { FC, useState } from 'react';
import Grid from 'components/Grid';
import FilterForm, { Component } from 'components/Filter';
import Pagination, { ITEMS_ON_PAGE_DEFAULT } from 'components/Pagination';

/* Mocked data */
const mockGrid = {
  columns: [
    {
      key: 'singer',
      name: 'Singer',
    },
    {
      key: 'song',
      name: 'Song',
    },
    {
      key: 'genre',
      name: 'Genre',
    },
    {
      key: 'year',
      name: 'Year',
    },
  ],
  data: [
    {
      id: '1',
      values: [
        {
          key: 'singer',
          value: '1',
        },
        {
          key: 'song',
          value: 'John 22',
        },
        {
          key: 'genre',
          value: 'Autumn',
        },
        {
          key: 'year',
          value: '2020',
        },
      ],
    },
    {
      id: '2',
      values: [
        {
          key: 'singer',
          value: '2',
        },
        {
          key: 'song',
          value: 'Mila 2',
        },
        {
          key: 'genre',
          value: 'Autumn',
        },
        {
          key: 'year',
          value: '2010',
        },
      ],
    },
    {
      id: '3',
      values: [
        {
          key: 'singer',
          value: '3',
        },
        {
          key: 'song',
          value: 'John',
        },
        {
          key: 'genre',
          value: 'Rock',
        },
        {
          key: 'year',
          value: '2011',
        },
      ],
    },
    {
      id: '4',
      values: [
        {
          key: 'singer',
          value: '4',
        },
        {
          key: 'song',
          value: 'John',
        },
        {
          key: 'genre',
          value: 'Punk',
        },
        {
          key: 'year',
          value: '2018',
        },
      ],
    },
    {
      id: '5',
      values: [
        {
          key: 'singer',
          value: '5',
        },
        {
          key: 'song',
          value: 'John',
        },
        {
          key: 'genre',
          value: 'Punk',
        },
        {
          key: 'year',
          value: '2009',
        },
      ],
    },
    {
      id: '6',
      values: [
        {
          key: 'singer',
          value: '6',
        },
        {
          key: 'song',
          value: 'John',
        },
        {
          key: 'genre',
          value: 'Autumn',
        },
        {
          key: 'year',
          value: '2020',
        },
      ],
    },
    {
      id: '7',
      values: [
        {
          key: 'singer',
          value: '7',
        },
        {
          key: 'song',
          value: 'John 777',
        },
        {
          key: 'genre',
          value: 'Autumn 777',
        },
        {
          key: 'year',
          value: '2070',
        },
      ],
    },
    {
      id: '8',
      values: [
        {
          key: 'singer',
          value: '8',
        },
        {
          key: 'song',
          value: 'John 888',
        },
        {
          key: 'genre',
          value: 'Autumn 888',
        },
        {
          key: 'year',
          value: '2078',
        },
      ],
    },
  ],
};
const mockFilter = [
  {
    component: 'dropdown' as Component,
    label: 'Singer',
    name: 'singer',
    range: ['Singer 1', 'Singer 2', 'Singer 3'],
  },
  {
    component: 'dropdown' as Component,
    label: 'Genre',
    name: 'genre',
    range: ['Genre 1', 'Genre 2', 'Genre 3'],
  },
  {
    component: 'dropdown' as Component,
    label: 'Year',
    name: 'year',
    range: ['2020', '2019', '2018'],
  },
];
const mockFilterValues = {};
/* End of Mocked data */

const FILTER_FIELDS_LIST = ['singer', 'genre', 'year'];

const MusicList: FC = () => {
  const [gridData, setGridData] = useState(mockGrid.data);
  const [gridViewPort, setGridViewPort] = useState({
    offset: 0,
    limit: ITEMS_ON_PAGE_DEFAULT,
  });

  /* There should be BE request, not a FE logic */
  const applyFilter = ({ values: formValues }) => {
    const fieldsList = FILTER_FIELDS_LIST.filter(fieldName => formValues[fieldName]);

    if (fieldsList.length === 0) {
      setGridData(mockGrid.data);
      return;
    }

    const newGridData = mockGrid.data.filter(item => fieldsList.reduce(
      (result, fieldName) => {
        const fieldValue = item?.values?.find(({ key }) => key === fieldName)?.value;
        return result && (
          fieldValue
            ? fieldValue?.toLowerCase()?.indexOf(formValues[fieldName].toLowerCase()) + 1
            : 0
        );
      },
      1
    ));

    setGridData(newGridData);
  };

  const applyPage = (offset, limit) => {
    setGridViewPort({
      offset,
      limit,
    });
  };

  const offset = gridData.length <= gridViewPort.offset ? 0 : gridViewPort.offset;

  return (
    <div>
      <FilterForm controls={mockFilter} values={mockFilterValues} onChange={applyFilter} />
      <Grid
        columns={mockGrid.columns}
        data={gridData.slice(offset, offset + gridViewPort.limit)}
      />
      <Pagination totalItems={gridData.length} onChange={applyPage} />
    </div>
  );
};

export default MusicList;
