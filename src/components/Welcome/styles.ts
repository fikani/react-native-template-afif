import { Text } from "../Text/Text";
import { mb, mt } from "../Theme/mixins/spacing";
import { styled } from "../Theme/styled";

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const LibrariesTitle = styled(Text)`
  ${mt(3)}
  ${mb(2)}
`;
