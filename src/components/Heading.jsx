import styled from 'styled-components';
import tw from 'tailwind.macro';

const Heading = styled.h1`
  ${tw`text-xl font-bold text-center uppercase`}

  color: ${({ theme }) => theme['900']};
`;

export default Heading;
