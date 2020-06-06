import styled from 'styled-components';
import tw from 'tailwind.macro';

const CardTitle = styled.h2`
  ${tw`font-bold leading-tight tracking-tight`}

  color: ${({ theme }) => theme.primary};
`;

export default CardTitle;
