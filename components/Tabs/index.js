// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(topic => {
        const topics = document.querySelector('.topics')
        return topic.data.topics.map(topic =>{
            return topics.appendChild(Tab(topic))
        })
    })
    .catch (err => {
        console.log('there is an error', err)
    })

// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(topic){
    const tab = document.createElement('div')

    tab.classList.add('tab')

    tab.textContent = topic
     
    return tab
}
