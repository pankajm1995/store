
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import { fetchtodos } from './redux/slice/todo';
function App() {
    const dispatch=useDispatch();
    const state = useSelector(state=>state)
    console.log(state);
    if(state.todo.isLoading)
    {
      return <h1>Loading...</h1>
    }
    return(
        <div className='App'>
          <h1>App Component</h1>
          <button onClick={(e)=>dispatch(fetchtodos(e))}> 
            click Me
          </button>
          {
            state.todo.data && state.todo.data.map((e)=>(<li>{e.title}</li>))
          }
        </div>
    )
}

export default App;
