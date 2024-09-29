import React from 'react';
import HealthLabels from './HealthLabels';
import { useContext } from 'react';
import { DarkContext } from '../context/DarkContext';
import caloriesvg from '../svgs/Calorie.svg'
import dietlabelsvg from '../svgs/DietLabel.svg'
function Recipe({ label, image_url, healthLabels,onclick,calories,ditelabel }) {
    const {dark} = useContext(DarkContext)
    return (
        <div className={!dark?"w-96 p-4 h-[25em] bg-fuchsia-100 rounded-2xl flex flex-col gap-4 justify-center items-center text-white overflow-hidden hover:transform hover:scale-[1.02] transition-all ease-in-out duration-300 cursor-pointer hover:shadow-md hover:shadow-neutral-500":
        "w-96 p-4 h-fit bg-[#131212] rounded-2xl flex flex-col gap-4 justify-center items-center text-white overflow-hidden  hover:transform hover:scale-[0.95] hover:shadow-md hover:shadow-neutral-600 transition-all ease-in-out duration-300 cursor-pointer"}>
            <span className={!dark?"overflow-hidden font-font-poppins text-stone-800 font-semibold max-[950px]:text-sm max-[450px]:text-xs":"overflow-hidden text-slate-200 font-font-poppins font-semibold max-[950px]:text-sm max-[450px]:text-xs"}>{label}</span>
            <img src={image_url} alt="recipe_image" className='w-32 h-32 object-contain rounded-lg overflow-hidden max-[450px]:w-24 max-[450px]:h-24' />
            <div className="w-full px-4 py-2 rounded-xl  items-center gap-2 flex flex-row overflow-x-scroll">
                {healthLabels.map((item, index) => <HealthLabels key={index} label={item} />)}
            </div>
            <div className='w-full flex justify-between'>
                <span className={!dark?'w-fit px-2 py-1 flex justify-center items-center gap-2 text-xs bg-stone-200 rounded-lg shadow-md font-mono text-slate-600 max-[450px]:text-xs max-[400px]:text-[12px]':
      'w-fit px-2 py-1 flex justify-center items-center gap-2 text-xs bg-[#232121] rounded-lg shadow-md font-mono text-slate-200 max-[450px]:text-xs max-[400px]:text-[12px]'}><img src={caloriesvg} alt='calorie-svg' className='w-6 max-[450px]:w-5'/>{calories} Kcal</span>
      <span className={!dark?'w-fit px-2 py-1 flex justify-center items-center gap-2 text-xs bg-stone-200 rounded-lg shadow-md font-mono text-slate-600 max-[450px]:text-xs max-[400px]:text-[12px]':
      'w-fit px-2 py-1 flex justify-center items-center gap-2 text-xs bg-[#232121] rounded-lg shadow-md font-mono text-slate-200 max-[450px]:text-xs max-[400px]:text-[12px]'}><img src={dietlabelsvg} alt='calorie-svg' className='w-6 invert max-[450px]:w-4'/>{ditelabel[0]}</span>
            </div>
            <button onClick={onclick} className={!dark?'text-sm font-font-poppins text-zinc-800 outline-none hover:transform hover:scale-x-110 transition-all ease-linear duration-200':
        'text-sm font-font-poppins text-zinc-200 outline-none hover:transform hover:scale-x-110 transition-all ease-linear duration-200'}>
                see more
            </button>
        </div>
    );
}

export default Recipe;
