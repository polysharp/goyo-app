import styled from 'styled-components';
import tw from 'tailwind.macro';

const DropdownHeader = styled.div`
  ${tw`relative flex flex-row items-center px-3 py-2`}

  ${({ align }) => {
    switch (align) {
      case 'start':
        return tw`justify-start`;
      case 'center':
        return tw`justify-center`;
      case 'end':
        return tw`justify-end`;
      default:
        return tw`justify-center`;
    }
  }}
`;

export default DropdownHeader;
