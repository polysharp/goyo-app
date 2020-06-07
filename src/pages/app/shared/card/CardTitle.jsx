import styled from 'styled-components';
import tw from 'tailwind.macro';

const CardTitle = styled.h2`
  ${tw`text-lg font-black leading-tight tracking-tight`}

  color: ${({ theme }) => theme.primary};
`;

export default CardTitle;
