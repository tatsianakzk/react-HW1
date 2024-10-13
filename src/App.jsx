import './App.css';
import Header from './Components/Header/Header';
import CatImage from './Components/CatComponent/CatComponent';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cat-gallery">
        <CatImage />
        <CatImage />
        <CatImage />
        <CatImage />
        <CatImage />
        <CatImage />
        <CatImage />
      </div>
      <Footer />
    </div >
  );
}

export default App;