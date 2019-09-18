import React from 'react';
import './App.css';
import ChooseColor from './components/ChooseColor';
import Main from './components/Main';


class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			dark: false,
			id: 'light'
		}

		this.changeColor = this.changeColor.bind(this);
  }
  
	changeColor(event){
		const radio = event.currentTarget.id;
		if (radio === 'light') {
			this.setState(
				{dark: false, id: 'light'}, () => localStorage.setItem('state', JSON.stringify(this.state)))
		} else {
			this.setState(
				{dark: true, id: 'dark'}, () => localStorage.setItem('state', JSON.stringify(this.state))
				)}
	} 

	componentDidMount() {
	const bool = JSON.parse(localStorage.getItem('state'));
	this.setState(bool)	
	}

	componentWillUnmount(){
		localStorage.setItem('state', JSON.stringify(this.state));
	} 
  render() {
    return (
      <div className="app">
      	<ChooseColor 
					color = {this.state.dark}
					id = {this.state.id}
					changeColor = {this.changeColor} 
				/>
				<Main color= {this.state.dark} />        
      </div>
    );
  }
}

export default App;
