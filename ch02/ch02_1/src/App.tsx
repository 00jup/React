import React from 'react'
import logo from './logo.svg'
import './App.css'
import {useState} from 'react'

// function MyButton() {
//   return <button>I'm a button</button>
// }
function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there. <br /> How do you do?
      </p>
    </>
  )
}
function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }
  return <button onClick={handleClick}>Clicked {count}</button>
}

const products = [
  {title: 'cabbage', isFruit: 0, id: 1},
  {title: 'garlic', isFruit: 0, id: 2},
  {title: 'apple', isFruit: true, id: 3}
]
function ShoppingList() {
  // const [count, setCount] = useState(0)

  // function handleClick() {
  //   setCount(count + 1)
  // }
  const listname = products.map(products => (
    <li key={products.id} style={{color: products.isFruit ? 'magenta' : 'blue'}}>
      {products.title}
    </li>
  ))
  return (
    <>
      <ul>{listname}</ul>
      <Profile />
      <MyButton />
      <MyButton />
    </>
  )
}

// function App() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//       <AboutPage />
//     </div>
//   )
// }

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}

//export default Profile
export default ShoppingList
