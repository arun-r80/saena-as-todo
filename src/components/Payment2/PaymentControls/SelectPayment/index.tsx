import React from 'react';
import Select from '@material-ui/core/Select';
import { FormControl } from '@material-ui/core';
import styled from 'styled-components';

const SelectWrapper = styled.div`
    width: ${props => props.width};
`

const SelectPayment: typeof SelectWrapper = (props:Partial<{width: string}>) => {
    const {width} = props;

  return(
  <SelectWrapper width={width}>
      I am Select Wrapper {width}
  </SelectWrapper>
  
  )
}

export default SelectPayment;
 


