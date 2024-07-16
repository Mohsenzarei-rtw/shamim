import { useContext } from 'react';
import ListItem from './listItem';
import { ListContext } from '../context/context';
import { checkListItem } from '../context/listReducer';

interface Props<T> {
  items: T;
  title?: string;
}

export const List = <T = any>({ title, items }: Props<Array<T>>) => {
  const { dispatch } = useContext(ListContext);

  return (
    <article className="block max-h-96 min-w-72 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
      {title && (
        <>
          <h5 className="mt-4 text-center text-2xl font-bold text-gray-900">{title}</h5>
          <hr className="mt-4 h-px border-0 bg-gray-300" />
        </>
      )}
      <ul className="min-h-60 w-full border text-sm font-medium text-gray-900">
        {items &&
          items.map((item: any) => (
            <ListItem
              onChange={() => dispatch(checkListItem({ ...item, checked: !item?.checked }))}
              checked={!!item?.checked}
              key={item.id}
              name={item.id}
              label={item.name}
            />
          ))}
      </ul>
    </article>
  );
};
