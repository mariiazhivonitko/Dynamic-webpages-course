//import logo from './logo.svg';
import './App.css';
import Options from './components/Options';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('')
  const [bottles, setBottles] = useState(0)
  const [burnTime, setBurnTime] = useState(0)
  const [gender, setGender] = useState('Male')
  const [alcoholLevel, setAlcoholLevel] = useState(0)

  function calculate(e){
    e.preventDefault()
    let alco = 0
    if (gender=="Male"){
      alco = (bottles*0.33*8*4.5 - ((weight/10)*burnTime))/(weight*0.7)
    }
    else{
      alco = (bottles*0.33*8*4.5 - ((weight/10)*burnTime))/(weight*0.6)
    }
    if (alco < 0){
      alco=0
    }
    setAlcoholLevel(alco)
  }
  

  return (
    <div>
      <h3>Calculating alcogol blood level</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input type='number' value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label>
          <select value={bottles} onChange={e => setBottles(e.target.value)}>
            <Options min={1} max={10} pros={1} />
          </select>
        </div>
        <div>
          <label>Time</label>
          <select value={burnTime} onChange={e => setBurnTime(e.target.value)}>          
            <Options min={0.5} max={12} pros={0.5} />
          </select>
        </div>


        <div>
          <label>Gender</label>
          <input type='radio' id='Male' name='gender' value='Male' defaultChecked onChange={e => setGender(e.target.value)}></input>
          <label for='Male'>Male</label>
          <input type='radio' id='Female' name='gender' value='Female' onChange={e => setGender(e.target.value)}></input>
          <label for='Female'>Female</label>
        </div>
        <div>
          <output>{alcoholLevel.toFixed(2)}</output>
        </div>
        
        <div>
          <button>Claculate</button>
        </div>
        
      </form>
    </div>
  );
}

export default App;
