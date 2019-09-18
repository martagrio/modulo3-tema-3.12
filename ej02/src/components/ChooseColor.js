import React from 'react';
import './ChooseColor.css';
import PropTypes from 'prop-types';

class ChooseColor extends React.Component {

  render() {
    return (
      <div className={`ChooseColor ${ this.props.color === false ? 'light' : 'dark'}`}>
				<label htmlFor="dark">DARK
					<input type="radio" name="color" id="dark" 
						className={this.props.color === false ? 'light' : 'dark'}
						onChange={this.props.changeColor}
						checked={this.props.id === 'dark'}
					/>
				</label>

				<label htmlFor="light">LIGHT
					<input type="radio" name="color" id="light" 
						className={this.props.color === false ? 'light' : 'dark'}
						onChange={this.props.changeColor}
						checked={this.props.id === 'light'}
					/>
				</label>
              
      </div>
    );
  }
}

ChooseColor.propTypes = {
	changeColor: PropTypes.func,
	color: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired
}

export default ChooseColor;