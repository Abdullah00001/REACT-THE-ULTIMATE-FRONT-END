import './App.css';
import First from './First';
import Members from './components/Members';
function App() {
  return (
    <>
      <First device="redmi" brand="xiaomi" model="9A" serise={9}></First>
      <Members></Members>
    </>
  );
}

export default App;
