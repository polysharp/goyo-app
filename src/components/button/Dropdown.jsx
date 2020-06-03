import styled, { css } from 'styled-components';

const Dropdown = styled.button`
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
