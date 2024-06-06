import styled from 'styled-components';

export const MenuOptionLabelContainer = styled.div<{
  sublabel?: React.ReactNode;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 0;
`;
