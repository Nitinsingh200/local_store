import React from 'react'

const App = () => {
  // localStorage.clear()
  // sessionStorage.clear()
  // localStorage.setItem("user","nitin")
   const user = localStorage.getItem('user')
    console.log(user)

  return (
    <div>App</div>
  )
}

export default App