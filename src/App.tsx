import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Holding from "./pages/HoldingPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Holding />} />
                <Route path="/landingtest" element={<MainPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;
