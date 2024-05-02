import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFoundFeature from './components/NotFound/NotFound.jsx';
import Album from './features/Album/Album.jsx';
import ProductFeature from './features/Product/Product.jsx';
import Todo from './features/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/todos" element={<Todo />} />
        <Route exact path="/albums" element={<Album />} />
        <Route exact path="/products" element={<ProductFeature />} />
        <Route path="*" element={<NotFoundFeature />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
