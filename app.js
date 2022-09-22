// https://newsapi.org/v2/everything?q=tesla&from=2022-08-22&sortBy=publishedAt&apiKey=e693cf4f1ff54b608629f9dec121619a

const loadNews = () => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-08-22&sortBy=publishedAt&apiKey=e693cf4f1ff54b608629f9dec121619a')
        .then(res => res.json())
        .then(data => displayNews(data))
}
loadNews()

const displayNews = (data) => {
    const news = data.articles;

    // news middle 
    const newsDiv = document.getElementById('highlight')
    news.slice(0, 2).map(article => {
        const highlightDiv = document.createElement('div')
        highlightDiv.classList.add('py-5')
        highlightDiv.innerHTML = `
        <div>
            <a href="${article.url}" target="_blank">
                <img src="${article.urlToImage}"  alt="" class="w-full object-cover">
            </a>
        </div>
        <div>
            <h1 class="text-xl hover:text-one font-semibold py-2">
            <a href="#">${article.title}</a>
            </h1>
            <p class="leading-6 tracking-wide">${article.description}</p>
        </div>
        `
        newsDiv.appendChild(highlightDiv)
    })

    // news left 
    const newsLeft = document.getElementById('left')
    news.slice(3, 7).map(article => {
        const highlightLeft = document.createElement('div')
        highlightLeft.classList.add('py-2')
        highlightLeft.innerHTML = `
        <div>
            <h1 class="text-xl hover:text-one font-semibold py-2">
                <a href="${article.url}" target="_blank">${article.title}</a>
            </h1>
            <p class="leading-6 tracking-wide">${article.description}</p>
        </div>
        `
        newsLeft.appendChild(highlightLeft)
    })

    // news right 
    const newsRight = document.getElementById('right')
    news.slice(8, 12).map(item => {
        const highlightLeft = document.createElement('div')
        highlightLeft.classList.add('py-2')
        highlightLeft.innerHTML = `
        <div>
            <h1 class="text-xl hover:text-one font-semibold py-2">
                <a href="${item.url}" target="_blank">${item.title}</a>
            </h1>
            <p class="leading-6 tracking-wide">${item.description}</p>
        </div>
        `
        newsRight.appendChild(highlightLeft)
    })

    // update part 
    const update = document.getElementById('update')
    news.slice(13, 17).map(item => {
        const updateDiv = document.createElement('div')
        updateDiv.classList.add('py-2')
        updateDiv.innerHTML = `
        <div class="smooth">
            <a href="${item.url}" target="_blank">
                <img src="${item.urlToImage}"  alt="" class="w-full object-cover h-48">
            </a>
        </div>
        <div>
            <h1 class="text-xl text-five font-semibold py-2">
            ${item.title}
            </h1>            
        </div>
        `
        update.appendChild(updateDiv)
    })

}

// https://jsonplaceholder.typicode.com/comments
const loadOpinion = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => showOpinion(data))
}
loadOpinion()

const showOpinion = (data) => {
    const opinion = document.getElementById('opinion')
    data.slice(0, 3).map(user => {
        const userDiv = document.createElement('div')
        userDiv.classList.add('py-2')
        userDiv.innerHTML = `
        <div class="text-lg bg-two p-3 h-full">
        <p class="pb-4 ">${user.body}</p>
        <h1 class=" text-one">${user.name}</h1>
        <h1 ><i>${user.email}</i></h1>      
        </div>
        `
        opinion.appendChild(userDiv)
    })


}