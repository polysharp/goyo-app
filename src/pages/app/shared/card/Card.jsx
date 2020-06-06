import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';

const Card = styled.div`
  ${tw`flex flex-col rounded shadow`}

  ${({ useTheme }) => {
    if (useTheme) {
      return css`
        background-color: ${({ theme }) => theme.primary};
      `;
    }

    return tw`bg-white`;
  }};
`;

export default Card;
