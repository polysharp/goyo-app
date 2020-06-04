import styled from 'styled-components';
import tw from 'tailwind.macro';

const BoardTitle = styled.h1`
  ${tw`text-lg font-bold leading-tight tracking-tight uppercase`}

  color: ${({ theme }) => theme.typo};
`;

export default BoardTitle;
