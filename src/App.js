import { useDispatch } from 'react-redux';
import './App.css';
import { Counter } from './app/features/counter/Counter';
import { fetchPosts } from './app/features/post/postSlice';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchPosts());
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
