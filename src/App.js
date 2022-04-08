import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

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