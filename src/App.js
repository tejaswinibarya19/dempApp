import logo from './logo.svg';
import './App.css';
import Products from './components/Products'
function App() {
  const response=[
    {
    itemName:"Maggie",
    itemDate:"1",
    itemMonth:"June",
    itemYear:"2000"
  },
  {
    itemName:"Sunfeast",
    itemDate:"1",
    itemMonth:"july",
    itemYear:"2000"
  },
  {
    itemName:"Parle-G",
    itemDate:"1",
    itemMonth:"August",
    itemYear:"2000"
  },
  ];
  
   return (

    <div>
      <Products items={products}></Products>
    </div>
    
  );
}

export default App;
