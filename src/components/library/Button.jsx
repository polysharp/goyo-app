import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';

const Button = styled.button`
  ${tw`w-full px-4 py-2 font-semibold text-white border border-transparent rounded-md`}

  background-color: ${({ theme }) => theme['900']};

  ${({ disabled }) =>
    disabled
      ? css`
          ${tw`opacity-50 cursor-not-allowed`}
        `
      : css`
          &:hover {
            background-color: ${({ theme }) => theme['700']};
          }
          &:focus {
            border-color: ${({ theme }) => theme['700']};
            ${tw`shadow-outline outline-none`}
          }
        `}
`;

const Link = styled.button`
  ${tw`block w-full px-4 py-2 font-semibold text-center border-2 rounded-md`}

  color: ${({ theme }) => theme['900']};
  border-color: ${({ theme }) => theme['900']};

  ${({ disabled }) =>
    disabled
      ? css`
          pointer-events: none;
          ${tw`opacity-50`}
        `
      : css`
          &:hover {
            background-color: ${({ theme }) => theme['700']};
            border-color: ${({ theme }) => theme['700']};
            ${tw`text-white`}
          }
          &:focus {
            border-color: ${({ theme }) => theme['700']};
            ${tw`shadow-outline outline-none`}
          }
        `}
`;

export { Button, Link };
