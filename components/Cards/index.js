// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(data => {
    const articles = data.data.articles; 
    const articleTopic = Object.keys(articles);

    articleTopic.map(topics => {
      articles[`${topics}`].map(article => {
        cardsContainer.append(createCard(article));
      });
    });
  })
.catch (err => {
    console.log('there is an error', err)
})


// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container')

function createCard (object) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const authorContainer = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const author = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    authorContainer.classList.add('author')
    imgContainer.classList.add('img-container')

    card.appendChild(headline)
    card.appendChild(authorContainer)
    authorContainer.appendChild(imgContainer)
    authorContainer.appendChild(author)
    imgContainer.appendChild(img)

    img.src = object.authorPhoto
    headline.textContent = object.headline
    author.textContent = object.authorName


    return card;




}