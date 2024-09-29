import React from 'react';
import { useEffect, useRef, useContext } from 'react';
import HealthLabels from './HealthLabels';
import Macros from './Macros';
import { DarkContext } from '../context/DarkContext';
import svgcalorie from '../svgs/Calorie.svg'
import dietlabelsvg from '../svgs/DietLabel.svg'
import Source from './Source';
function Modal({ open, onclose, recipeselected }) {
  const { dark } = useContext(DarkContext)
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
    else{
      dialog.current.close();
    }
  }, [open]);

  return (
    <dialog ref={dialog}  className='mx-auto my-auto w-[50vw] overflow-y-scroll rounded-xl backdrop:bg-stone-900/90
    max-[1025px]:w-[70vw] max-[950px]:w-[75vw] max-[450px]:w-full max-[450px]:min-h-svh' onClose={onclose}>
      {recipeselected && (
        <div className={!dark ? 'p-4 flex flex-col justify-center items-center gap-4 bg-slate-300 w-full h-full' :
          'p-4 flex flex-col justify-center items-center gap-4 bg-[#121212] w-full h-full '}>
            <Source label={recipeselected.source} url={recipeselected.url}/>
          <h2 className={!dark ? 'text-lg font-font-poppins text-slate-700 font-semibold max-[450px]:text-xs max-[400px]:text-[10px]' : 'text-lg font-font-poppins text-slate-200 font-semibold max-[450px]:text-xs max-[400px]:text-[10px]'}>{recipeselected.label}</h2>
          <img src={recipeselected.image} alt="recipe_image" className='w-40 h-40 object-contain rounded-lg overflow-hidden shadow-md shadow-neutral-400 max-[450px]:w-20 max-[450px]:h-20' />
          <div className='w-full px-4 py-2 rounded-xl items-center gap-2 flex flex-row overflow-x-scroll'>
            {recipeselected.healthLabels.map((label, index) => (
              <HealthLabels key={index} label={label} />
            ))}
          </div>
          <div className='w-[90%] flex justify-between items-center'>
            <span className={!dark ? 'w-fit px-2 py-1 flex justify-center items-center gap-2 text-xs bg-stone-200 rounded-lg shadow-md font-mono text-slate-600 max-[450px]:text-xs max-[400px]:text-[12px]' :
              'w-fit px-2 py-1 flex justify-center items-center gap-2 text-xs bg-[#242323] rounded-lg shadow-md font-mono text-slate-200 max-[450px]:text-xs max-[400px]:text-[12px]'}><img src={svgcalorie} alt='calorie-svg' className='w-6 max-[450px]:w-5' />{Math.round(recipeselected.calories)} Kcal</span>
            <span className={!dark ? 'w-fit px-2 py-1 flex justify-center items-center gap-2 text-xs bg-stone-200 rounded-lg shadow-md font-mono text-slate-600 max-[450px]:text-xs max-[400px]:text-[12px]' :
              'w-fit px-2 py-1 flex justify-center items-center gap-2 text-xs bg-[#242323] rounded-lg shadow-md font-mono text-slate-200 max-[450px]:text-xs max-[400px]:text-[12px]'}><img src={dietlabelsvg} alt='calorie-svg' className='w-6 invert max-[450px]:w-4' />{recipeselected.dietLabels[0]}</span>
          </div>

          <span className={!dark ? 'text-lg font-font-poppins text-slate-700 text-left max-[450px]:text-sm max-[400px]:text-xs' : 'text-lg font-font-poppins text-slate-200 text-left max-[450px]:text-sm max-[400px]:text-xs'}>Ingridents</span>
          <ul className={!dark ? 'flex flex-col justify-start gap-3 bg-slate-100 text-slate-600 text-left w-[90%] rounded-lg p-5 shadow-sm max-h-80 overflow-y-scroll hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer' :
            'flex flex-col justify-start gap-3 bg-[#242323] text-slate-200 text-left  w-[90%] rounded-lg p-5 shadow-sm max-h-80 overflow-y-scroll hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer'}>
            {recipeselected.ingredientLines.map((item, index) => <li key={index} className='ml-4 font-font-poppins text-sm max-[450px]:text-xs max-[400px]:text-[11px]'>{item}</li>)}
          </ul>
          <div className={!dark ? 'flex justify-around items-center w-[90%] rounded-lg bg-slate-200 p-2' : 'flex justify-around items-center w-[90%] rounded-lg bg-[#242323] p-2'}>
            <span className={!dark ? 'text-slate-700 text-sm max-[950px]:text-xs max-[450px]:text-[11px] max-[400px]:text-[9px]' : 'text-slate-200 text-sm max-[950px]:text-xs max-[450px]:text-[11px] max-[400px]:text-[9px]'}>Cuisine : <span className={!dark?'text-slate-600 font-medium':'text-slate-50 font-medium'}>{recipeselected.cuisineType[0]}</span></span>
            <span className={!dark ? 'text-slate-700 text-sm max-[950px]:text-xs max-[450px]:text-[11px] max-[400px]:text-[9px]' : 'text-slate-200 text-sm max-[950px]:text-xs max-[450px]:text-[11px] max-[400px]:text-[9px]'}>Meal : <span className={!dark?'text-slate-600 font-medium':'text-slate-50 font-medium'}>{recipeselected.mealType[0]}</span></span>
            <span className={!dark ? 'text-slate-700 text-sm max-[950px]:text-xs max-[450px]:text-[11px] max-[400px]:text-[9px]' : 'text-slate-200 text-sm max-[950px]:text-xs max-[450px]:text-[11px] max-[400px]:text-[9px]'}>Duisine : <span className={!dark?'text-slate-600 font-medium':'text-slate-50 font-medium'}>{recipeselected.dishType[0]}</span></span>
          </div>
          <span className={!dark ? 'text-base font-font-poppins text-slate-700 text-left max-[450px]:text-sm max-[400px]:text-xs' : 'text-base font-font-poppins text-slate-200 text-left max-[450px]:text-sm max-[400px]:text-xs'}>Macronutrients</span>
          <ul className={!dark ? 'flex flex-col justify-start gap-3 bg-slate-100 text-slate-600 text-left w-[90%] rounded-lg p-5 shadow-sm max-h-80 overflow-y-scroll' :
            'flex flex-col justify-start gap-3 bg-[#242323] text-slate-200 text-left  w-[90%] rounded-lg p-5 shadow-sm max-h-80 overflow-y-scroll'}>
            <Macros
              label={recipeselected.totalNutrients.ENERC_KCAL.label}
              quantity={Math.round(recipeselected.totalNutrients.ENERC_KCAL.quantity)}
              unit={recipeselected.totalNutrients.ENERC_KCAL.unit} />
            <Macros
              label={recipeselected.totalNutrients.FAT.label}
              quantity={Math.round(recipeselected.totalNutrients.FAT.quantity)}
              unit={recipeselected.totalNutrients.FAT.unit} />
            <Macros
              label={recipeselected.totalNutrients.FASAT.label}
              quantity={Math.round(recipeselected.totalNutrients.FASAT.quantity)}
              unit={recipeselected.totalNutrients.FASAT.unit} />
            <Macros
              label={recipeselected.totalNutrients.FATRN.label}
              quantity={Math.round(recipeselected.totalNutrients.FATRN.quantity)}
              unit={recipeselected.totalNutrients.FATRN.unit} />
            <Macros
              label={recipeselected.totalNutrients.FAMS.label}
              quantity={Math.round(recipeselected.totalNutrients.FAMS.quantity)}
              unit={recipeselected.totalNutrients.FAMS.unit} />
            <Macros
              label={recipeselected.totalNutrients.FAPU.label}
              quantity={Math.round(recipeselected.totalNutrients.FAPU.quantity)}
              unit={recipeselected.totalNutrients.FAPU.unit} />
            <Macros
              label={recipeselected.totalNutrients.CHOCDF.label}
              quantity={Math.round(recipeselected.totalNutrients.CHOCDF.quantity)}
              unit={recipeselected.totalNutrients.CHOCDF.unit} />
            <Macros
              label={recipeselected.totalNutrients.FIBTG.label}
              quantity={Math.round(recipeselected.totalNutrients.FIBTG.quantity)}
              unit={recipeselected.totalNutrients.FIBTG.unit} />
            <Macros
              label={recipeselected.totalNutrients.SUGAR.label}
              quantity={Math.round(recipeselected.totalNutrients.SUGAR.quantity)}
              unit={recipeselected.totalNutrients.SUGAR.unit} />
            <Macros
              label={recipeselected.totalNutrients.PROCNT.label}
              quantity={Math.round(recipeselected.totalNutrients.PROCNT.quantity)}
              unit={recipeselected.totalNutrients.PROCNT.unit} />
            <Macros
              label={recipeselected.totalNutrients.CHOLE.label}
              quantity={Math.round(recipeselected.totalNutrients.CHOLE.quantity)}
              unit={recipeselected.totalNutrients.CHOLE.unit} />
            <Macros
              label={recipeselected.totalNutrients.NA.label}
              quantity={Math.round(recipeselected.totalNutrients.NA.quantity)}
              unit={recipeselected.totalNutrients.NA.unit} />
            <Macros
              label={recipeselected.totalNutrients.MG.label}
              quantity={Math.round(recipeselected.totalNutrients.MG.quantity)}
              unit={recipeselected.totalNutrients.MG.unit} />
            <Macros
              label={recipeselected.totalNutrients.K.label}
              quantity={Math.round(recipeselected.totalNutrients.K.quantity)}
              unit={recipeselected.totalNutrients.K.unit} />
            <Macros
              label={recipeselected.totalNutrients.FE.label}
              quantity={Math.round(recipeselected.totalNutrients.FE.quantity)}
              unit={recipeselected.totalNutrients.FE.unit} />
            <Macros
              label={recipeselected.totalNutrients.ZN.label}
              quantity={Math.round(recipeselected.totalNutrients.ZN.quantity)}
              unit={recipeselected.totalNutrients.ZN.unit} />
            <Macros
              label={recipeselected.totalNutrients.P.label}
              quantity={Math.round(recipeselected.totalNutrients.P.quantity)}
              unit={recipeselected.totalNutrients.P.unit} />
            <Macros
              label={recipeselected.totalNutrients.VITA_RAE.label}
              quantity={Math.round(recipeselected.totalNutrients.VITA_RAE.quantity)}
              unit={recipeselected.totalNutrients.VITA_RAE.unit} />
            <Macros
              label={recipeselected.totalNutrients.VITC.label}
              quantity={Math.round(recipeselected.totalNutrients.VITC.quantity)}
              unit={recipeselected.totalNutrients.VITC.unit} />
            <Macros
              label={recipeselected.totalNutrients.VITB12.label}
              quantity={Math.round(recipeselected.totalNutrients.VITB12.quantity)}
              unit={recipeselected.totalNutrients.VITB12.unit} />
            <Macros
              label={recipeselected.totalNutrients.VITD.label}
              quantity={Math.round(recipeselected.totalNutrients.VITD.quantity)}
              unit={recipeselected.totalNutrients.VITD.unit} />
            <Macros
              label={recipeselected.totalNutrients.TOCPHA.label}
              quantity={Math.round(recipeselected.totalNutrients.TOCPHA.quantity)}
              unit={recipeselected.totalNutrients.TOCPHA.unit} />
            <Macros
              label={recipeselected.totalNutrients.VITK1.label}
              quantity={Math.round(recipeselected.totalNutrients.VITK1.quantity)}
              unit={recipeselected.totalNutrients.VITK1.unit} />
            <Macros
              label={recipeselected.totalNutrients.VITB6A.label}
              quantity={Math.round(recipeselected.totalNutrients.VITB6A.quantity)}
              unit={recipeselected.totalNutrients.VITB6A.unit} />
            <Macros
              label={recipeselected.totalNutrients.WATER.label}
              quantity={Math.round(recipeselected.totalNutrients.WATER.quantity)}
              unit={recipeselected.totalNutrients.WATER.unit} />
          </ul>
          <form method='dialog'>
            <button className='text-slate-100 rounded-md bg-[#242323] w-fit py-1 px-2 font-font-poppins text-base max-[450px]:text-sm max-[400px]:text-xs'>close</button>
          </form>
        </div>
      )}
    </dialog>
  );
}

export default Modal;
