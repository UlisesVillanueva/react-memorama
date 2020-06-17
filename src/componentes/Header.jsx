import React, {Component } from 'react';
import '../estilos/Header.css'

export default class Header extends Component {
    render() {
      return (
        <header> 
          <div className="titulo">Memorama</div>
            <div>

              <button className="boton-reiniciar" onClick={this.props.resetearPartida}>
                Reiniciar la partida
              </button>
          </div>
          <div className="titulo">
            Intentos: {this.props.numeroDeIntentos}
          </div>
        </header>
      );
    }
  };