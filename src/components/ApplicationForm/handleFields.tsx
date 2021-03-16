
import React from 'react';
import CurrencyText from './components/CurrencyText';
import DefaultInput from './components/Default';
import { ApplicationFormItem } from './interfaces';

interface Props {
  item: ApplicationFormItem,
  errors: any,
  values: any,
  onChange: (e: any) => void;
  setFieldValue: (a: string, b: any) => void;

}

const handleFields = ({ item, errors, values, onChange, setFieldValue }: Props) => {
  if (item.inputType === 'currency') {
    return (
      <CurrencyText
        item={item}
        variant="outline"
        placeholder={item.label}
        type={item.type}
        isInvalid={!!errors[item.accessor]}
        errors={errors}
        values={values}
        onChange={(e: any) => {
          onChange({ key: item?.accessor, value: e.target.value });
          setFieldValue(item?.accessor, e.target.value);

        }}

      />
    )
  }

  return <DefaultInput
    item={item}

    variant="outline"
    placeholder={item.label}
    type={item.type}
    isInvalid={!!errors[item.accessor]}
    values={values}
    errors={errors}
    onChange={(e: any) => {
      onChange({ key: item?.accessor, value: e.target.value });
      setFieldValue(item?.accessor, e.target.value);
    }}
  />
}

export default handleFields;