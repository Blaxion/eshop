import React, { Component } from 'react';

class Panier extends Component {
    rendre = (e,i) =>{
        this.props.onRendre(e,i)
    }
    render() {
        return (
            <div>
                {this.props.panier.map((e,i) => {
                    return(
                        <p key={i}>{e.nom} || 1.u <button onClick = {() => {this.rendre(e,i)}}>RENDRE</button></p>
                    )
                })}
            </div>
        );
    }
}

export default Panier;