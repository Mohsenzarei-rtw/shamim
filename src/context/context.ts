import { createContext, Dispatch } from 'react';
import { ListActions, ListState } from '../types/list';
import { initialState } from '../config/constants';

export const ListContext = createContext<{
  state: ListState;
  dispatch: Dispatch<ListActions>;
}>({
  state: initialState,
  dispatch: () => null,
});
