import { FC } from 'react';
import { ListItem as ListItemType } from '../types/list';

const ListItem: FC<ListItemType> = ({ label, name, ...rest }) => {
  return (
    <li className={`w-full rounded-t-lg border-b border-gray-200 ${rest.checked && 'bg-slate-100'}`}>
      <div className="flex items-center ps-3">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
          id={name}
          {...rest}
        />
        <label htmlFor={name} className="ms-2 w-full py-3 text-sm font-medium text-gray-900">
          {label ?? name}
        </label>
      </div>
    </li>
  );
};
export default ListItem;
