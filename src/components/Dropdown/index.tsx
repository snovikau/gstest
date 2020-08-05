import React, { FC } from 'react';
import { Field } from 'react-final-form';

interface Props {
  name: string;
  range: string[];
}

export const DropdownControl: FC<Props> = (
  { name, range }
) => (
  <Field name={name}>
    {({ input }) => (
      <>
        <input
          list={`${name}_list`}
          type="text"
          onChange={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
        />
        <datalist id={`${name}_list`}>
          <option key="empty" value="" aria-label="none" />
          {
            range
              ? range.map(
                (optionValue) => <option key={optionValue} value={optionValue}>{optionValue}</option>
              )
              : null
          }
        </datalist>
      </>
    )}
  </Field>
);
