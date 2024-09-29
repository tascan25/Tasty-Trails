import React from 'react'
import { useContext} from 'react'
import { DarkContext } from '../context/DarkContext'
import { RecipeContext } from '../context/RecipeContext'
function InputQuery() {
   const {dark} = useContext(DarkContext)
    const {handelRecipeSearch,handelSearch,search,query} = useContext(RecipeContext)
    
    return (
        <div className="w-fit h-fit rounded-xl mx-auto mt-10 relative">
            <input onChange={(e)=>handelSearch(e.target.value)} value={search} type="text" placeholder={query?`showing results for ${query}`:'search any recipe'} className={!dark?"w-[30vw] h-[6vh] outline-none bg-[#F8F8FF] rounded-3xl hover:outline-slate-200 px-4 py-2 text-slate-500 text-base font-font-poppins max-[450px]:w-[80vw] max-[450px]:text-xs max-[950px]:w-[70vw] max-[950px]:pl-4 max-[1025px]:w-[70vw] max-[1280px]:w-[60vw]":
            "w-[30vw] h-[6vh] outline-none bg-[#212020]  rounded-3xl hover:outline-[#181717] px-4 py-2  text-slate-200 font-font-poppins max-[450px]:w-[80vw] max-[450px]:text-xs max-[950px]:w-[70vw] max-[950px]:pl-4 max-[1025px]:w-[70vw] max-[1280px]:w-[60vw]"}/>
            <button onClick={handelRecipeSearch} className="cursor-pointer absolute top-0 right-0 mt-1 mr-2 max-[450px]:mt-2 max-[950px]:mt-4 max-[1024px]:mt-[1.2em]">🔎</button>
        </div>
    )
}

export default InputQuery
