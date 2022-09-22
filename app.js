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
    news.slice(0, 2).map(article => {
        const div = document.createElement('div')
        div.innerHTML = `
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
        newsDiv.appendChild(div)
    })
}

