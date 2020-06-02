import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';

const Carret = styled.span`
  ${tw`block h-full rounded shadow`}
  height: 43px;

  ${({ theme }) => {
    if (theme.nav) {
      return css`
        background-color: ${theme.nav.carret};
      `;
    }

    return css`
      ${tw`bg-black`};
    `;
  }};
`;

export default Carret;
