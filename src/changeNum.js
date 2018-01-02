export  function changeNum(state = 0, action) {


		if(action.type=='add'){
			return state+1
		}else if(action.type=='minus'){
			return state-1
		}else{
			return state
		}


}

var a=  3;
export function add(){
	
}