import styled from 'styled-components';
import tw from 'tailwind.macro';

const Input = styled.input`
  ${tw`relative block w-full px-3 py-2 text-gray-900 bg-gray-100 border border-transparent rounded-md`}

  color: ${({ theme }) => theme['900']};
  background-color: ${({ theme }) => theme['100']};

  &:focus {
    border-color: ${({ theme }) => theme['700']};
    ${tw`outline-none`}
  }
`;

export default Input;
