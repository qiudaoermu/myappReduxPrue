import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import {changeNum,add} from './changeNum'
import reduce from './reduce'
import Counter from './Counter'
import ChangeColor from './changeColor'
console.log(reduce)
//console.log(changeNum);
//console.log(createStore)
const store = createStore(reduce);
console.log(store.getState())
//console.log(store);

/*ReactDOM.render(<Counter 
		value = {store.geState()}
		OnIncreament = {() =>store.dispatch({type:'add'}) }
		Ondecreament = {() =>store.dispatch({type:'minus'})}

	/>, document.getElementById('root'));*/


class MainSection extends React.Component{
	render(){
		console.log(store.getState())
		return (

				<div>
					<Counter 
						value = {store.getState().changeNum2}
						OnIncreament = {() =>store.dispatch({type:'add'})}
						Ondecreament = {() =>store.dispatch({type:'minus'})}
					>
					</Counter>
					<ChangeColor
						bgc = {store.getState().changeColor}
						cclor = {() =>store.dispatch({type:'black'})}
					>
					</ChangeColor>	

				</div>
			)
		
	}
}
function render() {
	
	 ReactDOM.render(<MainSection/>, document.getElementById('root'));
}

const renderRedux = () =>ReactDOM.render(
		<Counter 
			value = {store.getState()}
			OnIncreament = {() =>store.dispatch({type:'add'}) }
			Ondecreament = {() =>store.dispatch({type:'minus'})}

		/>, document.getElementById('root')
	)
render();
//renderRedux()
store.subscribe(render);
registerServiceWorker();
