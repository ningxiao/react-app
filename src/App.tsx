import './App.css';
import logo from './logo.svg';
import Hello from './components/Hello';
import { Counter } from './components/Counter';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './components/About';
const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <main className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Counter />
                                <About />
                            </>
                        } />
                        <Route path="/hello" element={
                            <Hello name="TypeScript" enthusiasmLevel={10} />
                        } />
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
    );
}
export default App;
