import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';

const Nav = styled.a`
  ${({ theme, selected }) => {
    if (selected) {
      return css`
        color: ${theme.nav.active.color};
        &:hover,
        &:focus {
          ${tw`text-gray-300`};
        }
      `;
    }

    return css`
      color: ${theme.nav.normal.color};
      &:hover {
        color: ${theme.nav.hover.color};
      }
      &:focus {
        color: ${theme.nav.focus.color};
      }
    `;
  }};
`;

export default Nav;
