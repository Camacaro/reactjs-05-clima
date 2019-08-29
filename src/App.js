import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import Clima from './componentes/Clima';
 
 class App extends Component {

	state = {
		error: '',
		consulta: {},
		resultado: {}
	}

	/**
	 * Al cargar el componente
	*/
	componentDidMount(){
		this.setState({
			error:false
		});
	}

	/**
	 * Se ejecuta al cambiar el coponente
	 * este toma dos parametros que son los props y state anteriores antes de actualizarse
	 */
	componentDidUpdate(prevProps, prevState){
		/**
		 * Este componenete se actualiza constantemente debido a varios factores, por ello se ejecuta muchas veces
		 * por ellos vamos a verificar que si el valor anterior es igual al actual no se ejecute la api si llega a cambiar qeu consulte la api
		 */
		if(prevState.consulta !== this.state.consulta){
			this.consultarApi();
		}
		
	}

	/**
	 * Metodo para consultar la API del clima
	 */
	consultarApi = () => {
		const {ciudad, pais} = this.state.consulta;

		if(!ciudad || !pais) return null;

		const appId = '82179fee8a73c4e311ba9f97e285ec32';
		/**
		 * &units=metric, es para ponerlo en centigrados
		 */
		let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&units=metric`;
		console.log(url);

		/**
		 * Query con fetch api, fetch es de js ES6
		 * Parametro recibe la url
		 */
		fetch(url)
			.then( resp => {
				/**
				 * ya que la respuesta viene en JSON, es lo que vamos a devovler
				 */
				return resp.json();
			})
			.then(datos => {
				//console.log(datos);

				/**
				 * Almacenar los datos en el state
				 */
				this.setState({
					resultado: datos
				});
			})
			.catch(error => {
				console.log(error);
			})

		 /**
		  * Leer la url y agregar la API KEY 
		  */

		  /**
		   * consultar fetch
		   */

		console.log(ciudad);
	}


	/**
	 * Respuesta del formulario para llenar el state
	 */
	datosConsulta = (respuesta) => {
		if(respuesta.ciudad === '' || respuesta.pais === ''){
			this.setState({
				error:true
			});
		}else{
			this.setState({
				consulta:respuesta,
				error:false
			});
		}
	}
	
	render() {

		const error = this.state.error;

		let resultado;

		if(error){
			resultado = <Error mensaje="Ambos campos son requeridos"/> 
		}else{
			resultado = <Clima resultado={this.state.resultado}/>
		}

		return (
			<div className="app">
	
				<Header
					titulo="Clima Ract"
				/>

				<Formulario
					datosConsulta={this.datosConsulta}
				/>

				{resultado}

			</div>
		);
	}
 }
 
 export default App;