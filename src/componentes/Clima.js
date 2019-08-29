import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clima extends Component {
    
    mostrarResultado = () => {
        /**
         * Obtener los datos de la api
         */
        const {name, weather, main} = this.props.resultado;

        if(!name || !weather || !main){
            return null;
        }

        const urlIcon = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
        const alt = `clima de ${name}`;

        return (
            <div className="row">
                
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">

                    <div className="card-panel light-blue align-center">

                        <span className="white-text ">

                            <h2>Resultado Climade de: {name} </h2>
                            <p className="temperatura">
                                Actual: {main.temp} &deg;C
                                <img src={urlIcon} alt={alt} />
                            </p>
                            <p> Max. {main.temp_max}</p>
                            <p> Min. {main.temp_min}</p>

                        </span>

                    </div>

                </div>

                
            </div>
        )
    }
    
    render() {
        
        return (
            <div className="container">
                {this.mostrarResultado()}
            </div>
        );
    }
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;