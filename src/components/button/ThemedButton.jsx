import styled, { css } from 'styled-components';

import Nav from './Nav';
import Modal from './Modal';
import Dropdown from './Dropdown';

const ThemedButton = styled.button`
  ${({ theme, selected }) => {
    if (selected) {
      return css`
        color: #1a202c;
        border-color: ${theme.modal.hover.color};
        &:hover {
          color: ${theme.modal.hover.color};
        }
        &:focus {
          color: ${theme.modal.focus.color};
        }
      `;
    }

    return css`
      color: #1a202c;
      &:hover {
        color: ${theme.modal.hover.color};
      }
      &:focus {
        color: ${theme.modal.focus.color};
      }
    `;
  }};
`;

ThemedButton.Nav = Nav;
ThemedButton.Modal = Modal;
ThemedButton.Dropdown = Dropdown;

export default ThemedButton;
