import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
