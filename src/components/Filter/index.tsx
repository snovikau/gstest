import React, { ComponentClass, FC } from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import { DropdownControl } from 'components/Dropdown';
import { FilterItem, FilterWrapper } from './styles';

export type Component =
  ComponentClass<any, any> | FC<any> | 'input' | 'select' | 'textarea' | 'dropdown' | undefined;

interface Props {
  controls: {
    component: Component,
    label: string,
    name: string,
    range: string[],
    type?: string,
  }[];
  values: {
    [key: string]: any;
  };
  onChange: (FormState: any) => void;
}

const FilterForm: FC <Props> = (
  {
    controls, values, onChange,
  }
) => (
  <>
    <Form
      initialValues={values}
      onSubmit={onChange}
      render={() => (
        <form>
          <FormSpy
            subscription={{ values: true }}
            onChange={(formState) => {
              onChange(formState);
            }}
          />
          <FilterWrapper>
            {controls.map(({
              component, type, label, name, range,
            }) => (
              <FilterItem key={name}>
                <label htmlFor={name}>{label}</label>
                {
                  component === 'dropdown'
                    ? <DropdownControl name={name} range={range} />
                    : <Field name={name} component={component} type={type} />
                }
              </FilterItem>
            ))}
          </FilterWrapper>
        </form>
      )}
    />
  </>
);

export default FilterForm;
