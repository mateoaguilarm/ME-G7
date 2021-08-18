import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { ThemeProvider } from './contexts/themeContext'

function App() {
  return (
    <div className="App">
      <h1>hola en app 💻</h1>

      <Header />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
