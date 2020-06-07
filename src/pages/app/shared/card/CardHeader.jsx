import styled from 'styled-components';
import tw from 'tailwind.macro';

const CardHeader = styled.div`
  ${tw`relative flex flex-row items-center px-6 py-4 border-b border-gray-200`}

  ${({ align }) => {
    switch (align) {
      case 'start':
        return tw`justify-start`;
      case 'center':
        return tw`justify-center`;
      case 'end':
        return tw`justify-end`;
      default:
        return tw`justify-start`;
    }
  }}
`;

export default CardHeader;
