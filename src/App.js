import React, { Component } from 'react';
import './App.css';
import Validation from './Component/Validation';
import Char from './Component/Char';
class App extends Component {
	state = {
		userInputName: ''
	};

	changeInputName = (event) => {
		this.setState({ userInputName: event.target.value });
	};
	deleteInputName = (index) => {
		const text = this.state.userInputName.split('');
		text.splice(index, 1);
		const updateText = text.join('');
		this.setState({ userInputName: updateText });
	};

	render() {
		const { userInputName } = this.state; // instead of using this.state.userInputName  everytime you can just destructure the state and use userInputName alone
		// here is a link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
		const listName = userInputName.split('').map((chars, index) => {
			return <Char character={chars} key={index} clicked={() => this.deleteInputName(index)} />;
		});
		return (
			<div>
				<input type="Text" onChange={this.changeInputName} value={userInputName} />
				<p>{userInputName}</p>
				<Validation inputLength={userInputName.length} />
				{listName}
			</div>
		);
	}
}

export default App;
