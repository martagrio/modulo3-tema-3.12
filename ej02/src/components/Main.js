import React from 'react';
import './Main.css';
import PropTypes from 'prop-types';

class Main extends React.Component {

  render() {
    return (
      <div className={`main__box ${ this.props.color === false ? 'light' : 'dark'}`}>
				<h1 className={`main__title ${ this.props.color === false ? 'light' : 'dark'}`}>vamos a ver cómo cambiamos de estilo</h1>
				<p className={`main__text ${ this.props.color === false ? 'light' : 'dark'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam fuga culpa soluta quos asperiores nulla, possimus nobis at corporis quasi fugiat voluptate ipsum! Suscipit vero vitae dolores perferendis repudiandae!</p>		
      </div>
    );
  }
}

Main.propTypes = {
	color: PropTypes.bool.isRequired
}
export default Main;
