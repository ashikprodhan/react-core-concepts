import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  const nayoks = ['Razzak','Riaz', 'Sakib', 'Salman','Bappi','Shuvo']

  const products = [
    { name: 'Photoshop', price: '$99.99' },
    { name: 'Illustrator', price: '$78.90' },
    { name: 'PDF', price: '$55' },
    { name: 'Primier El', price: '$255' }
  ]
  const friends = ['Saniur','Ali','Ahmed','Salauddin','Robin']
 
  return (
    <div className="App">
      <header className="App-header">

        <p>I am react Person</p>
        <Users></Users>
        <Counter></Counter>
     

        <ul>
         
          {nayoks.map(nayok => <li>{nayok}</li>)}

          {products.map(product => <li>{product.name}</li>)}
          {products.map(pd => <Products product={pd} ></Products>)}
        
        </ul>
       
      

        <Person name="Ashik" job="React Developer"></Person>
        <Person name="Ranga" job="Assistance chemist"></Person>
        <Person name="Abid" job="Student"></Person>





      </header>
    </div>
  );
}
function Counter() {
  const [count,setCount]=useState(10);
  const handleIncrease = () =>setCount(count + 1);
  
  const handleDecrease = () => setCount(count - 1);
  
return (
  <div>
    <h1> count :{count}</h1>
    <button onClick={() =>setCount(count + 1)}>increase</button>
    <button onClick={() =>setCount(count - 1)}>Decrease</button>
  </div>
)  
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data) )
  },[])
  return (
    <div>
      <h1>Dynamic users :{users.length}</h1>
      <ul>
        {users.map(user => <li>{user.phone}</li>)}
      </ul>
    </div>
  )
  
}

function Products(props) {
  const productStyle = {
    border: '3px solid green',
    borderRadius: '11px',
    height: '400px',
    width: '300px',
    backgroundColor: 'grey',

  }
  const { name, price } = props.product;

  return (
    <div style={productStyle}>
      <h2>Name:{name}</h2>
      <h5>Price {price} </h5>
      <button>Buy now</button>
    </div>
  )

}




function Person(props) {

  return (
    <div style={{ border: '2px solid green', margin: '15px', borderRadius: '15px', width: '400px' }}>
      <h1>Name :{props.name}</h1>
      <h3>Profession :{props.job}</h3>
    </div>
  )

}


export default App;
