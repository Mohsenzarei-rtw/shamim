import { accounts } from './api';
import { ListState } from '../types/list';

export const initialState: ListState = {
  firstList: accounts,
  secondList: [],
};
