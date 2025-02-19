/*
  App
  <App />
*/
var App = React.createClass({ displayName: "App",
  getInitialState: function () {
    return {
      articles: {
        'article': {
          "color": "FEC006",
          "title": "Snow in Turkey Brings Travel Woes",
          "thumbnail": "",
          "category": "News",
          "excerpt": "Heavy snowstorm in Turkey creates havoc as hundreds of villages left without power, and hundreds of roads closed",
          "date": new Date() },

        'article-1': {
          "color": "2196F3",
          "title": "Landslide Leaving Thousands Homeless",
          "thumbnail": "",
          "category": "News",
          "excerpt": "An aburt landslide in the Silcon Valley has left thousands homeless and on the streets.",
          "date": new Date() },

        'article-2': {
          "color": "FE5621",
          "title": "Hail the size of baseballs in New York",
          "thumbnail": "",
          "category": "News",
          "excerpt": "A rare and unexpected event occurred today as hail the size of snowball hits New York citizens.",
          "date": new Date() },

        'article-3': {
          "color": "673AB7",
          "title": "Earthquake destorying San Fransisco",
          "thumbnail": "",
          "category": "News",
          "excerpt": "A massive earthquake just hit San Fransisco leaving behind a giant crater.",
          "date": new Date() },

        'article-4': {
           "color": "FEC006",
            "title": "Snow in Turkey Brings Travel Woes",
           "thumbnail": "",
            "category": "News",
            "excerpt": "Heavy snowstorm in Turkey creates havoc as hundreds of villages left without power, and hundreds of roads closed",
            "date": new Date() },

        'article-5': {
        "color": "2196F3",
          "title": "Landslide Leaving Thousands Homeless",
          "thumbnail": "",
          "category": "News",
          "excerpt": "An aburt landslide in the Silcon Valley has left thousands homeless and on the streets.",
          "date": new Date() },

        'article-6': {
          "color": "FE5621",
          "title": "Hail the size of baseballs in New York",
          "thumbnail": "",
          "category": "News",
          "excerpt": "A rare and unexpected event occurred today as hail the size of snowball hits New York citizens.",
          "date": new Date() },

        'article-7': {
          "color": "673AB7",
          "title": "Earthquake destorying San Fransisco",
          "thumbnail": "",
          "category": "News",
          "excerpt": "A massive earthquake just hit San Fransisco leaving behind a giant crater.",
          "date": new Date() } } };



  },
  renderArticle: function (key) {
    return /*#__PURE__*/(
      React.createElement("div", { className: "column" }, /*#__PURE__*/
      React.createElement(Article, { key: key, index: key, details: this.state.articles[key] })));


  },
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "app" }, /*#__PURE__*/
      React.createElement("div", { className: "container" },
      Object.keys(this.state.articles).map(this.renderArticle))));



  } });


/*
  Article
  <Article />
*/
var Article = React.createClass({ displayName: "Article",
  render: function () {
    var details = this.props.details,
    styles = {
      backgroundColor: '#' + details.color };


    return /*#__PURE__*/(
      React.createElement("article", { className: "article" }, /*#__PURE__*/
      React.createElement("h2", { className: "article__title" }, details.title), /*#__PURE__*/
      React.createElement("p", { className: "article__excerpt" }, details.excerpt)));


  } });


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#app'));