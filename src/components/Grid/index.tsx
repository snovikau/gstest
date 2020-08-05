import React, { FC, useCallback } from 'react';
import { GridTable } from './styles';

interface Props {
  columns: {
    key: string,
    name: string,
  }[];
  data: {
    id: string,
    values: {
      key: string,
      value: string,
    }[]
  }[];
}

const Grid: FC<Props> = ({ columns, data }) => {
  const getColumnName = useCallback(
    (columnKey) => columns.find(({ key }) => key === columnKey)?.name,
    [columns]
  );

  return (
    <GridTable>
      <thead>
        <tr>
          {columns.map(({ name, key }) => <th key={key}>{name}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          data.map(({ id, values }) => (
            <tr key={id}>
              {
                values.map(
                  ({ value, key }) => (
                    <td key={key}>
                      <span>{getColumnName(key)}</span>
                      {value}
                    </td>
                  )
                )
              }
            </tr>
          ))
        }
      </tbody>
    </GridTable>
  );
};

export default Grid;
