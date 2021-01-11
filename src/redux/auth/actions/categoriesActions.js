import {ADD_CATEGORY , FETCH_CATEGORY , GET_CATEGORIES, UPDATE_CATEGORY , DELETE_CATEGORY} from './type'

import {RepositoryFactory} from '../../../repository/RepositoryFactory'
var CategoriesRepository = RepositoryFactory.get("categories")



export function editCategory(editobj) {
   return async (dispatch) => {
// try{
        let {data} = await CategoriesRepository.editCategory(editobj)
        console.log(data);
        dispatch(fetchcategories())
// }
// catch (error) {
//     alert("Category not deleted")
// }
    
	};
}
export function fetchcategories() {
    // console.log("jdjks");
    return async (dispatch) => {
	let  {data}=  await CategoriesRepository.getCategory()
         console.log(data)    
               dispatch({
                type: GET_CATEGORIES,
                payload: data.category,
            });
      };
}  

export function deleteCategory( delobj){
 return async (dispatch) =>{

    console.log(delobj);
        let  {data} = await CategoriesRepository.deleteCategory(delobj)
        console.log(data);
        
        dispatch(fetchcategories())
    }
}
export  function addCategory(Obj) {
     return   async (dispatch) => {
        try {
            
            let {data} =  await CategoriesRepository.addCategory(Obj)
            dispatch(fetchcategories())
        } catch (error) {
            alert("Category not deleted")
        }
            //   dispatch({
            //     type: ADD_CATEGORY, 
            //     payload: data.category
            // }) 
         }


}


