import { useDispatch, useSelector } from 'react-redux';
import './App.css';


function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const add = (event) => {
    dispatch({
      type: 'ADD',
      payload: +event.target.value
    })
  }
  const reset = (event) => {
    dispatch({
      type: 'RESET',
      payload: +event.target.value
    })
  }
  const remove = (event) => {
    dispatch({
      type: 'REMOVE',
      payload: +event.target.value
    })
  }


  return (
    <main>
      <div className='display'>{state}</div>
      <div className='navigation'>
        <button value='5' onClick={remove}>remove 5</button>
        <button value='1' onClick={remove}>remove 1</button>
        <button value='0' onClick={reset}>reset</button>
        <button value='1' onClick={add}>add 1</button>
        <button value='5' onClick={add}>add 5</button>
      </div>
    </main>
  );
}

export default App;
