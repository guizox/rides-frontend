
import { Input } from '@chakra-ui/input';
import { Grid } from '@chakra-ui/layout';
import React from 'react';
import { ApplicationFormItem } from '../interfaces';

interface Props {
  values: any,
  item: ApplicationFormItem,
  [a: string]: any
}


const DefaultInput = ({ values, item, errors, ...rest }: Props) => {
  const [showOptions, setShowOptions] = React.useState(false);

  return (
    <React.Fragment>
      <Input
        value={values[item?.accessor]}
        variant="outline"
        placeholder={item.label}
        type={item.type}
        isInvalid={errors ? !!errors[item?.accessor] : false}
        {...rest}
        // eslint-disable-next-line no-mixed-operators
        onFocus={() => setShowOptions((item && item.options && item?.options?.length > 0) || false)}
        onBlur={() => {
          setTimeout(() => {
            setShowOptions(false)
          }, 100);
        }}
      />
      {showOptions &&
        <Grid position="absolute" width="200px" backgroundColor="#fff" zIndex={1} border="1px solid #f0f0f0" padding="5px" boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'} >
          {item?.options?.map((str: string) =>
            <Grid
              padding={'10px'}
              border='1px solid #f0f0f0'
              cursor="pointer"
              mt={'3px'}
              onClick={() => {
                rest.onChange({
                  target: {
                    value: str
                  }
                });
                setShowOptions(false);
              }}>
              <p>
                {str}
              </p>
            </Grid>
          )}
        </Grid>}
    </React.Fragment>
  )
}

export default DefaultInput;