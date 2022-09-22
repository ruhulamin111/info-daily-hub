// https://newsapi.org/v2/everything?q=tesla&from=2022-08-22&sortBy=publishedAt&apiKey=e693cf4f1ff54b608629f9dec121619a

const loadNews = () => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-08-22&sortBy=publishedAt&apiKey=e693cf4f1ff54b608629f9dec121619a')
        .then(res => res.json())
        .then(data => displayNews(data))
}
loadNews()

const displayNews = (data) => {
    const news = data.articles;
    const newsDiv = document.getElementById('highlight')
    const newsLeft = document.getElementById('left')
    const newsRight = document.getElementById('right')

    // news middle 
    news.slice(1, 3).map(article => {
        const highlightDiv = document.createElement('div')
        highlightDiv.classList.add('py-5')
        highlightDiv.innerHTML = `
        <div>
            <a href="#">
                <img src="${article.urlToImage}"  alt="" class="w-full object-cover">
            </a>
        </div>
        <div>
            <h1 class="text-2xl hover:text-one font-semibold py-2">
            <a href="#">${article.title}</a>
            </h1>
            <p class="leading-6 tracking-wide">${article.description}</p>
        </div>
        `
        newsDiv.appendChild(highlightDiv)
    })

    // news left 
    news.slice(6, 10).map(portal => {
        const highlightLeft = document.createElement('div')
        highlightLeft.classList.add('py-2')
        highlightLeft.innerHTML = `
        <div>
            <h1 class="text-2xl hover:text-one font-semibold py-2">
                <a href="#">${portal.title}</a>
            </h1>
            <p class="leading-6 tracking-wide">${portal.description}</p>
        </div>
        `
        newsLeft.appendChild(highlightLeft)
    })

    // news right 
    news.slice(12, 16).map(portalr => {
        const highlightLeft = document.createElement('div')
        highlightLeft.classList.add('py-2')
        highlightLeft.innerHTML = `
        <div>
            <h1 class="text-2xl hover:text-one font-semibold py-2">
                <a href="#">${portalr.title}</a>
            </h1>
            <p class="leading-6 tracking-wide">${portalr.description}</p>
        </div>
        `
        newsRight.appendChild(highlightLeft)
    })



}
