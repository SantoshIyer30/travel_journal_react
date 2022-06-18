import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Details from './Details';

function App() {
  const cardItems = Details.map(item =>{
    return<Card 
      key={item.id}
      {...item}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <div className='cards'>
      {cardItems}
      </div>
    </div>
  );
}

export default App;
