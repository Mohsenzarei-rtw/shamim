import { InputHTMLAttributes } from 'react';

export interface ListItem extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export interface Accounts {
  id: string;
  name: string;
  age: number;
  score: string;
  checked?: boolean;
}

export enum ListActionType {
  forward = 'FORWARD',
  forwardAll = 'FORWARDALL',
  back = 'BACK',
  backAll = 'BACKALL',
  checkItem = 'CHECKITEM',
}

export interface ListActions {
  type: ListActionType;
  payload: Accounts;
}

export interface ListState {
  firstList: Accounts[];
  secondList: Accounts[];
}
