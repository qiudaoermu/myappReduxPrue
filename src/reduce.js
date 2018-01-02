
/*
export default (state,action) => {
	return {
		changeNum:changeNum(state,action)
	}
}


function changeColor(state=0,action){

	if(action.type=='changetoBlack'){
		return 'black'
	}else{
		return 'red'
	}
}
*/
import { combineReducers } from 'redux';
//import changeNum from './changeNum'

/*const todoApp = combineReducers({
  changeNum
})
*/

/*var combineReducers1 = function(obj){
    //内部具体代码

    var finalState = {};
    function reducer(state,action){
        //reducer具体逻辑

        for (var p in obj) {
         //根据key属性值调用function(state.属性名，action)
         finalState[p] = obj[p](state[p], action);
        }

        //返回state
        return finalState;
    }

    //返回最终的reducer
    return reducer;
}*/


 function combineReducers1(obj){
   var finalState = {};
    function reducer(state,action){
        //reducer具体逻辑

        for (var p in obj) {
         	//根据key属性值调用function(state.属性名，action)
         	finalState[p] = obj[p](state, action);

        }

        //返回state
        return finalState;
    }

    //返回最终的reducer
    return reducer();

};

function changeColor(state='green',action){

	if(action.type=='black'){
		
		return state = action.type
	}else{
		return state
	}
}

function changeNum2(state=0,action){

		if(action.type=='add'){
			return state+1
		}else if(action.type=='minus'){
			return state-1
		}else{
			return state
		}
}
const todoApp = combineReducers({
  changeNum2,
  changeColor
})

export default todoApp

