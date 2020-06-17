import React, {Component} from 'react';
import FlipCard from 'react-flipcard';
import '../estilos/Carta.css'




export default class Carta extends Component {
    render() {
      return (
        <div className="carta" onClick={this.props.seleccionarCarta}>
          <FlipCard
            flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
            disabled={true}
          >
            <div className="portada"></div>
            <div className="contenido">
            <img className="imgBorder"src={`img/${this.props.icono}.jpg`} alt="." width="125" height="125"></img>
            {/* <i className={`fa ${this.props.icono} fa-5x`}></i> */}
            </div>
          </FlipCard>
        </div>
      )
    }  
  }