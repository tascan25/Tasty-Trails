// import Header from './components/header'
// import { useContext } from 'react'
// import InputQuery from './components/InputQuery'
// import { DarkContext } from './context/DarkContext'
// import DarkContextProvider from './context/DarkContext'
// import RecipeContextProvider from './context/RecipeContext'
// import RecipeCont from './components/RecipeCont'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import DarkContextProvider from './context/DarkContext'
import './App.css'
import Home from './components/Home'

function App() {
// const {dark} = useContext(DarkContext)
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  }
])
  return (
    <DarkContextProvider>
      {/* <Header />
      <main>
        <div className={dark?'w-full min-h-screen flex flex-col justify-center items-center':'w-full min-h-screen flex flex-col justify-center items-center bg-[#1a1f16]'}>
          <RecipeContextProvider>
          <InputQuery/>
            <RecipeCont />
            </RecipeContextProvider>
        </div>
      </main> */}
<RouterProvider router={router}/>
    </DarkContextProvider>

    
  )
}

export default App
