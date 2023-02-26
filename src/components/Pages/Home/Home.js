import { useDispatch, useSelector } from 'react-redux'
import './Home.css'

function Home(){
    const count = useSelector(store => store.count)
    const dispatch = useDispatch()

    return(
        <div className="home_page">
            <h1>Home page</h1>
            <p>{count}</p>

            <button onClick={() => dispatch({type: 'INCR'})}>Инкремент</button>
            <button onClick={() => dispatch({type: 'DECR'})} >Декремент</button>
        </div>
    )
}

export default Home