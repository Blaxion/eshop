import React, { Component } from 'react';
import './Articles.css'
class Articles extends Component {
    acheter = (larticle,i) =>{
        this.props.onAcheter(larticle,i)
    }
    render() {
        return (
            <div className="mes-articles">
                {
                    this.props.articles.map((e,i)=>{
                        let bgcolor;
                        if (e.stock === 0) {
                            bgcolor = 'bg-red'
                        }else if (e.stock === 1) {
                            bgcolor = 'bg-orange'
                        }else{
                            bgcolor = ''
                        }
                        return (
                        <div key={i} className={`card-article ${bgcolor}`}>
                            <img src={e.url_image} alt="" width="150px"/>
                            <p>{e.nom}</p>
                            <p>prix: {e.prix}€</p>
                            <p>stock: {e.stock}.u</p>
                            {(this.props.argent >= e.prix && e.stock !== 0 ) && 
                            <button onClick={()=>this.acheter(e,i)}>
                                Acheter
                            </button>
                            }
                        </div>)
                    })
                }
                
            </div>
        );
    }
}

export default Articles;