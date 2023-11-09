import React from 'react';
import styled from 'styled-components';

interface Props {
  width?: string;
  gradation?: boolean;
  border?: boolean;
  borderColor?: string;
  children: React.ReactNode;
  as?: string;
}

const BorderBox = ({ width, gradation, border, borderColor, children, as }: Props): JSX.Element => {
  return (
    <StyledBorderBox $width={width} $gradation={gradation} $border={border} $borderColor={borderColor} as={as}>
      {children}
    </StyledBorderBox>
  );
};

interface StyledProps {
  $width?: string;
  $gradation?: boolean;
  $border?: boolean;
  $borderWidth?: string;
  $borderColor?: string;
}

const StyledBorderBox = styled.div<StyledProps>`
  background: ${({ theme }) => theme.color.backgroundColor};
  border: ${(props) => (props.$border ? 'solid' : 'none')};
  border-width: ${(props) => (props.$borderWidth ? props.$borderWidth : '1px')};
  border-color: ${(props) => (props.$borderColor ? props.$borderColor : props.theme.color.textColor)};
  box-shadow: ${(props) => (props.$gradation ? '0px 1px 5px rgba(0, 0, 0, 0.25)' : 'none')};
  width: ${(props) => (props.$width ? props.$width : '')};
`;

export default BorderBox;
