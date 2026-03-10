// import React from 'react'

// const App = () => {
//   // localStorage.clear()
//   // sessionStorage.clear()
//   // localStorage.setItem("user","nitin")
//    const user = localStorage.getItem('user')
//     console.log(user)

//   return (
//     <div>App</div>
//   )
// }

// export default App



// object ko string ky formet my send karna 
// import React from 'react'

// const App = () => {
//    const user={
//      username:'nitin',
//      age:18,
//      city:'bopal'

//    }
//     localStorage.setItem('user',JSON.stringify(user))
//   return (
//     <div>App</div>
//   )
// }

// export default App

// object form my get karna hty user ko 


import React from 'react'

const App = () => {
   const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
   
  return (
    <div>App</div>
  )
}

export default App