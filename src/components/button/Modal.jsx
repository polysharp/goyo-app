import styled, { css } from 'styled-components';

const Modal = styled.button`
  ${({ theme, selected }) => {
    if (selected) {
      return css`
        color: ${theme.modal.normal.color};
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
      color: ${theme.modal.normal.color};
      &:hover {
        color: ${theme.modal.hover.color};
      }
      &:focus {
        color: ${theme.modal.focus.color};
      }
    `;
  }};
`;

export default Modal;
