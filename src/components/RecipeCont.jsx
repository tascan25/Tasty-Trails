import React, {useContext,useState} from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { DarkContext } from '../context/DarkContext';
import Recipe from './Recipe';
import Modal from './Modal';
import LoadingAnimation from './LoadingAnimation';
function RecipeCont() {
  const {dark} = useContext(DarkContext)
  const [open,setOpen] = useState(false)
  const [selectedRecipe,setSelectedRecipe] = useState(null)
  const {recipe,isLoading,error} = useContext(RecipeContext)
  if (isLoading) {
    return(
      <div className={!dark?'w-[50vw] h-[50vh] flex justify-center items-center rounded-lg bg-[#F6F6F6] mx-auto max-[950px]:h-[40vh] ':
      'w-[50vw] h-[50vh] flex justify-center items-center rounded-lg bg-[#242323] mx-auto max-[950px]:h-[40vh] '}>
      <LoadingAnimation/>
      </div>
    ) 
  }
  if (!recipe.length) {
    return <div>No recipe data is available</div>;
  }
  function handelOpen(recipe){
    setSelectedRecipe(recipe)
    setOpen(true)
  }
  function handelOpenClose(){
    console.log("open is being set to false")
    setOpen(false)
  }
  return (
    <div className={!dark?'mt-10 mx-auto p-5 max-w-[90vw] max-h-[35vw] flex flex-wrap justify-center items-center gap-4  overflow-y-scroll rounded-lg shadow-inner bg-[#F6F6F6] max-[450px]:max-h-[80vh] max-[950px]:max-h-[75vh] max-[1025px]:max-h-[80vh] max-[1024px]:p-4':
    'mt-10 mx-auto p-5 max-w-[90vw] max-h-[35vw] flex flex-wrap justify-center items-center gap-4  overflow-y-scroll rounded-lg shadow-inner bg-[#242323] max-[450px]:max-h-[80vh] max-[950px]:max-h-[75vh] max-[1025px]:max-h-[80vh] max-[1024px]:p-4'}>
      {!isLoading && recipe.map((hit) => (
        <Recipe
          key={hit.recipe.label}
          image_url={hit.recipe.image}
          label={hit.recipe.label}
          healthLabels={hit.recipe.healthLabels}
          calories={Math.round(hit.recipe.calories)}
          ditelabel={hit.recipe.dietLabels}
          onclick={()=>{handelOpen(hit.recipe)}}
        />
      ))}
      <Modal open={open} onclose={handelOpenClose} recipeselected={selectedRecipe}/>
    </div>
  );
}

export default RecipeCont;
