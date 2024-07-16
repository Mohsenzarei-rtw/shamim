import { useContext } from 'react';
import { ListContext } from '../context/context';
import Button from './button';
import { back, backAll, forward, forwardAll } from '../context/listReducer';

const ListButton = () => {
  const { dispatch } = useContext(ListContext);

  return (
    <article className="mx-4 flex flex-col *:my-2">
      <Button onClick={() => dispatch(forward())}>&gt;</Button>
      <Button onClick={() => dispatch(forwardAll())}>&gt;&gt;</Button>
      <Button onClick={() => dispatch(back())}>&lt;</Button>
      <Button onClick={() => dispatch(backAll())}>&lt;&lt;</Button>
    </article>
  );
};
export default ListButton;
