import BorderBox from 'components/@commons/BorderBox';
import FlexContainer from 'components/@commons/FlexContainer';
import Text from 'components/@commons/Text';
import { Check, InputBox, InputLabel } from 'components/PageStyledComponents/admin/AddGroup';
import React from 'react';

const InputBar = ({
  onChange,
  id,
  labelName,
  validation,
  inputType,
  onClick,
  value,
  readOnly,
}: InputProps): JSX.Element => {
  return (
    <FlexContainer $gap="8px" onClick={onClick}>
      <InputLabel htmlFor={id}>
        <Text margin="0">{labelName}</Text>
      </InputLabel>
      <BorderBox border width="100%">
        <FlexContainer $direction="row" $gap="0" $align="center">
          <InputBox id={id} value={value} type={inputType || 'text'} onChange={onChange} readOnly={readOnly} />
          {validation && <Check />}
        </FlexContainer>
      </BorderBox>
    </FlexContainer>
  );
};

interface InputProps {
  id: string;
  labelName: string;
  validation: boolean;
  inputType?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  value?: string;
  readOnly?: boolean;
}

export default InputBar;
