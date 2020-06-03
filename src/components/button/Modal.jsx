import styled, { css } from 'styled-components';

const Modal = styled.button`
  ${({ theme }) => {
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
