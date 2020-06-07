import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';

const Dropdown = styled.button`
  ${tw`rounded`}

  ${({ theme }) => {
    return css`
      color: ${theme.dropdown.normal.color};
      &:hover {
        color: ${theme.dropdown.hover.color};
      }
      &:focus {
        color: ${theme.dropdown.focus.color};
      }
    `;
  }};
`;

export default Dropdown;
