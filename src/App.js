import '../src/css/App.css';
import FrontPage from './components/RollScreen'
import Dices from './components/Dices'



function App() {
  return (
    <div>
      <FrontPage>
        <Dices/>
      </FrontPage>
    </div>
  );
}

export default App;
