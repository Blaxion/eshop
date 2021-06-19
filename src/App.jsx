import React from 'react'
import Panier from './components/Panier.jsx';
import Articles from './components/Articles.jsx';

export default class App extends React.Component {
  state = {
    argent: 20,
    panier: [],
    articles: [
      {
        nom: "Coca Cola",
        prix: 1,
        stock: 10,
        url_image: './image/coca.jpg'
      },
      {
        nom: "Fanta",
        prix: 1.5,
        stock: 5,
        url_image: './image/fanta.jpg'
      },
      {
        nom: "Iced Tea",
        prix: 2,
        stock: 15,
        url_image: './image/tea.jpg'
      }
    ]
  }
  parentAcheter = (larticle, i) => {
    let StateBis = this.state;
    StateBis.argent = StateBis.argent - larticle.prix;
    StateBis.panier = [...StateBis.panier, larticle];
    StateBis.articles[i].stock--
    this.setState({ StateBis }, () => console.log(StateBis))
  }

  parentRendre = (e, i) => {
    let StateBis = this.state;
    StateBis.argent = StateBis.argent + e.prix;
    StateBis.articles[this.articlesIndex(StateBis,e.nom)].stock++
    StateBis.panier.splice(i, 1);
    this.setState({ StateBis }, () => console.log(StateBis))
  }

  articlesIndex = (state, articleName) => {
    let articlesTab = [];
    state.articles.forEach((e) => {
      articlesTab.push(e.nom)
    });
    return articlesTab.indexOf(articleName)
  }

  render() {
    return (
      <div>
        <span> Mon argent : {this.state.argent} €</span>
        <Articles argent={this.state.argent} articles={this.state.articles} onAcheter={this.parentAcheter} />
        <Panier panier={this.state.panier} onRendre={this.parentRendre} />
      </div>
    );
  }
}

