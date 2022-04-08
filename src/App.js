import './style.css'
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";


export default function App(){
    return(
        <div className="App">
            <HomePage>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </HomePage>
        </div>
    )
}