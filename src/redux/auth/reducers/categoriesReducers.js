import { FETCH_CATEGORY , ADD_CATEGORY , GET_CATEGORIES, UPDATE_CATEGORY ,  DELETE_CATEGORY} from '../actions/type'

import {db} from '../firebase'

import {RepositoryFactory} from '../../../repository/RepositoryFactory'
const CategoriesRepository = RepositoryFactory.get("category")
const categories =  db.collection('categories')

const initialState = {
	categories:[],
	
    
}
    

function reducer(state = initialState, action) {
	switch (action.type) {
		// case ADD_CATEGORY:
		// 	return {
		// 	...state,
        //     };
            
	
        // case FETCH_CATEGORY: {
           
		// 	const data = [];
		// 	action.payload.docs.forEach(doc => {
		// 		data.push({...doc.data(),id:doc.id});
		// 	});
		// 	return {
		// 		...state,
		// 		posts: data,
		// 	};
		// }
				   
		// case DELETE_CATEGORY: {
			
		// 	return {
		// 		...state,
				
		// 	};
		// }
		  
		
		case GET_CATEGORIES:{
            //  console.log(action.payload);
			return{

                   ...state,
				   categories:action.payload
				  
			}
		}	

		
		// case UPDATE_CATEGORY: {
		// 	return {
		// 		...state,
		// 	};
		// }
		
       

        default:
            return state;
            
    }
}


export default reducer;