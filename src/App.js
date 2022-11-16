import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux';
import './App.css';
import { Counter } from './app/features/counter/Counter';
import { fetchPosts } from './app/features/post/postSlice';
import { Posts } from './components/Posts';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchPosts());
  return (
    <div className="App">
      <Counter />
      <Posts></Posts>
    </div>
  );
}

export default App;
