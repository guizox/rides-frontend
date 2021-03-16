
import { InputGroup, InputLeftElement, InputRightElement, Icon } from '@chakra-ui/react';
import { MdAttachMoney } from 'react-icons/md';
import React from 'react';
import { ApplicationFormItem } from '../interfaces';
import DefaultInput from './Default';

interface Props {
  item: ApplicationFormItem,
  values: any,
  [prop: string]: any
}

const CurrencyText = ({ item, values, ...rest }: Props) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        color="gray.300"
        fontSize="1.2em"
      />
      <DefaultInput
        item={item}
        values={values}
        {...rest}
        paddingLeft={'10px'}
      />
      <InputRightElement children={<Icon as={MdAttachMoney} color="green.500" />} />
    </InputGroup>
  )
}

export default CurrencyText;