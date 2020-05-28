import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';

const Form = styled.form`
  ${tw`flex flex-col items-center justify-center h-screen px-4 md:px-6 lg:px-10 xl:px-16`}
`;

const Heading = styled.h1`
  ${tw`text-xl font-bold text-center text-gray-900 uppercase`}
`;

const Input = styled.input`
  ${tw`relative block w-full px-3 py-2 text-gray-900 bg-gray-100 border border-transparent rounded-md`}

  &:focus {
    ${tw`border-gray-700 outline-none`}
  }
`;

const Button = styled.button`
  ${tw`w-full px-4 py-2 font-semibold text-white bg-gray-900 border border-transparent rounded-md`}

  ${({ disabled }) =>
    disabled
      ? css`
          ${tw`opacity-50 cursor-not-allowed`}
        `
      : css`
          &:hover {
            ${tw`bg-gray-700`}
          }
          &:focus {
            ${tw`border-gray-700 shadow-outline outline-none`}
          }
        `}
`;

const Link = styled.button`
  ${tw`block w-full px-4 py-2 font-semibold text-center text-gray-900 border-2 border-gray-900 rounded-md`}

  ${({ disabled }) =>
    disabled
      ? css`
          pointer-events: none;
          ${tw`opacity-50`}
        `
      : css`
          &:hover {
            ${tw`text-white bg-gray-700 border-gray-700`}
          }
          &:focus {
            ${tw`border-gray-700 shadow-outline outline-none`}
          }
        `}
`;

export { Form, Heading, Input, Button, Link };
