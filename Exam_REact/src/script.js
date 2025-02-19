/*
  App
  <App />
*/

var App = React.createClass({
  getInitialState: function () {
    return {
      articles: {
        'article': {
          "color": "FEC006",
          "title": "Snow in Turkey Brings Travel Woes",
          "thumbnail": "",
          "category": "News",
          "excerpt": "Heavy snowstorm in Turkey creates havoc as hundreds of villages left without power, and hundreds of roads closed",
          "date": new Date()
        },
        'article-1': {
          "color": "2196F3",
          "title": "Landslide Leaving Thousands Homeless",
          "thumbnail": "",
          "category": "News",
          "excerpt": "An aburt landslide in the Silcon Valley has left thousands homeless and on the streets.",
          "date": new Date()
        },
        'article-2': {
          "color": "FE5621",
          "title": "Hail the size of baseballs in New York",
          "thumbnail": "",
          "category": "News",
          "excerpt": "A rare and unexpected event occurred today as hail the size of snowball hits New York citizens.",
          "date": new Date()
        },
        'article-3': {
          "color": "673AB7",
          "title": "Earthquake destorying San Fransisco",
          "thumbnail": "",
          "category": "News",
          "excerpt": "A massive earthquake just hit San Fransisco leaving behind a giant crater.",
          "date": new Date()
        },
          'article-4': {
            "color": "FEC006",
            "title": "Snow in Turkey Brings Travel Woes",
            "thumbnail": "",
            "category": "News",
            "excerpt": "Heavy snowstorm in Turkey creates havoc as hundreds of villages left without power, and hundreds of roads closed",
            "date": new Date()
          },
          'article-5': {
            "color": "2196F3",
            "title": "Landslide Leaving Thousands Homeless",
            "thumbnail": "",
            "category": "News",
            "excerpt": "An aburt landslide in the Silcon Valley has left thousands homeless and on the streets.",
            "date": new Date()
          },
          'article-6': {
            "color": "FE5621",
            "title": "Hail the size of baseballs in New York",
            "thumbnail": "",
            "category": "News",
            "excerpt": "A rare and unexpected event occurred today as hail the size of snowball hits New York citizens.",
            "date": new Date()
          },
          'article-7': {
            "color": "673AB7",
            "title": "Earthquake destorying San Fransisco",
            "thumbnail": "",
            "category": "News",
            "excerpt": "A massive earthquake just hit San Fransisco leaving behind a giant crater.",
            "date": new Date()
        }
      }
    }
  },
  renderArticle: function (key) {
    return (
      <div className="column">
        <Article key={key} index={key} details={this.state.articles[key]} />
      </div>
    )
  },
  render: function () {
    return (
      <div className="app">
        <div className="container">
          {Object.keys(this.state.articles).map(this.renderArticle)}
        </div>
      </div>
    )
  }
});

/*
  Article
  <Article />
*/
var Article = React.createClass({
  render: function () {
    var details = this.props.details,
        styles = {
          backgroundColor: '#' + details.color
        };
    
    return (
      <article className="article">
        <h3 className="article__category" style={styles}>{details.category}</h3>
        <h2 className="article__title">{details.title}</h2>
        <p className="article__excerpt">{details.excerpt}</p>
      </article>
    )
  }
});

ReactDOM.render(<App />, document.querySelector('#app'));
