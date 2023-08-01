import  {useState} from 'react';
import './index.css';



const Color = ({color, setSelectedColor}) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState('');
  
  
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: {selectedColor} </div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
