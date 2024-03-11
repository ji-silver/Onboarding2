import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from "./pages/Login.tsx";
import Board from "./pages/Board.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Login />} />
                <Route path={'/board'} element={<Board />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
