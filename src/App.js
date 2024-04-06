import Album from './features/Album/Album.jsx';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Todo from './features/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/todos" element={<Todo />} />
        <Route exact path="/albums" element={<Album />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
