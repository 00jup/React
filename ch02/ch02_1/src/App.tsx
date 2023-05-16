import React from 'react'
import logo from './logo.svg'
import './App.css'

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
  function handleClick() {
    alert('You clicked me!')
  }
  return <button onClick={handleClick}>click me</button>
}

const products = [
  {title: 'cabbage', isFruit: 0, id: 1},
  {title: 'garlic', isFruit: 0, id: 2},
  {title: 'apple', isFruit: true, id: 3}
]
function ShoppingList() {
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
