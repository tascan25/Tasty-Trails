import { createContext,useState,useEffect,useContext} from "react";
import React from 'react'
export const RecipeContext = createContext()
function RecipeContextProvider({children}) {
  const [query,setQuery] = useState('paneer')
    const [search,setSearch] = useState('')
 const [recipe, setRecipe] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const appId = '712163e1';
    const appKey = '0c84845cf7a6e19dd0739b987c974ce8';
    const base_url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;
  
    useEffect(() => {
      const fetchRecipe = async () => {
        setIsLoading(true);
        try {
          const resp = await fetch(base_url);
          if (!resp.ok) {
            throw new Error('Unable to fetch recipe at this moment. Please try again after some time!');
          }
          const data = await resp.json();
          setRecipe(data.hits); // Set the hits array from the response
        } catch (error) {
          setError(error);
        }
        setIsLoading(false);
      };
      fetchRecipe();
    }, [query]);
    function handelRecipeSearch(){
      setQuery(search)
      setSearch('')
  }
  function handelSearch(e){
    setSearch(e)

}
  return (
    <RecipeContext.Provider value={{recipe,isLoading,error,handelRecipeSearch,query,setQuery,search,setSearch,handelSearch}}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeContextProvider
