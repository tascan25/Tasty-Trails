import Header from './header'
import { useContext } from 'react'
import InputQuery from './InputQuery'
import { DarkContext } from '../context/DarkContext'
import RecipeContextProvider from '../context/RecipeContext'
import RecipeCont from './RecipeCont'

function Home() {
const {dark} = useContext(DarkContext)
  return (
    <>
      <Header />
      <main>
        <div className={!dark?'w-full min-h-screen flex flex-col justify-around max-[450px]:justify-evenly max-[950px]:justify-evenly ':
        'w-full min-h-screen flex flex-col justify-around bg-[#121212] max-[450px]:justify-evenly max-[950px]:justify-evenly '}>
          <RecipeContextProvider>
          <InputQuery/>
            <RecipeCont />
            </RecipeContextProvider>
        </div>
      </main>
    </>
  )
}

export default Home
