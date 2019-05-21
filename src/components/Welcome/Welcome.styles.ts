import { SafeAreaView } from "react-navigation";
import { Text } from "../Text/Text";
import { mb, ml, mt, mx, my } from "../Theme/mixins/spacing";
import { styled } from "../Theme/styled";

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  ${mx(2)}
`;

export const LibrariesContainer = styled.View`
  width: 100%;
`;

export const LibrariesTitle = styled(Text)`
  ${mt(3)}
  ${mb(2)}
`;

export const LibrariesName = styled(Text)`
  ${my(1)}
  ${ml(2)}
`;
