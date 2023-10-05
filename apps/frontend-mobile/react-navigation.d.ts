import { NavigationProp, ParamListBase } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends ParamListBase {}
  }
}

export function useNavigation<T extends NavigationProp>(): T;
