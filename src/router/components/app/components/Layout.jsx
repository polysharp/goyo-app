import styled from 'styled-components';
import tw from 'tailwind.macro';

const Layout = styled.main`
  ${tw`min-h-screen min-w-screen`}
  background-color: ${({ theme }) => theme['900']};
`;

export default Layout;
