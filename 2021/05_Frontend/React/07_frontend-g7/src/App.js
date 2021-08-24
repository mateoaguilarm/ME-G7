import Signup from './components/Signup';
import firebaseApp from './firebase';

console.log(firebaseApp);

function App() {
  return (
    <div className="App">
      <h1>hola en App 💻</h1>
      <Signup />
    </div>
  );
}

export default App;
