import { Accounts, ListActionType, ListActions, ListState } from '../types/list';

export const listReducer = (state: ListState, action: ListActions) => {
  const { type, payload } = action;
  switch (type) {
    case ListActionType.checkItem:
      const firstListSelected = !!state.firstList.find((item) => item.id === payload.id);
      if (firstListSelected) {
        const firstList = getUniqueList([...state.firstList, payload], 'id');
        return { ...state, firstList };
      } else {
        const secondList = getUniqueList([...state.secondList, payload], 'id');
        return { ...state, secondList };
      }

    case ListActionType.forward:
      const firstListSelectedItems = state.firstList.filter((item) => item.checked);
      const firstListDeletedItems = state.firstList.filter((item) => !item.checked);
      const secondListItems = unCheckListItem(firstListSelectedItems);

      state = {
        firstList: firstListDeletedItems,
        secondList: [...state.secondList, ...unCheckListItem(secondListItems)],
      };

      return state;

    case ListActionType.back:
      const secondListSelectedItems = state.secondList.filter((item) => item.checked);
      const secondListDeletedItems = state.secondList.filter((item) => !item.checked);

      return {
        secondList: secondListDeletedItems,
        firstList: [...state.firstList, ...unCheckListItem(secondListSelectedItems)],
      };

    case ListActionType.forwardAll:
      const secondList = getUniqueList([...state.secondList, ...state.firstList], 'id');

      return { firstList: [], secondList: unCheckListItem(secondList) };

    case ListActionType.backAll:
      const firstList = getUniqueList([...state.secondList, ...state.firstList], 'id');
      return { secondList: [], firstList: unCheckListItem(firstList) };

    default:
      return state;
  }
};

export const checkListItem = (account: Accounts) => ({
  type: ListActionType.checkItem,
  payload: account,
});

export const forward = () => ({
  type: ListActionType.forward,
});
export const forwardAll = () => ({
  type: ListActionType.forwardAll,
});
export const back = () => ({
  type: ListActionType.back,
});
export const backAll = () => ({
  type: ListActionType.backAll,
});

const getUniqueList = (list: any, key: string) => [...new Map(list.map((item: any) => [item[key], item])).values()];
const unCheckListItem = <T>(list: T[]) => list.map((item) => ({ ...item, checked: false }));
