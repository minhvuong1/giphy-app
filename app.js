var main = document.querySelector('main');
var form = document.querySelector('form');

var offset = 0;
var limit = 5;

function searchGiphy(e) {
    main.innerHTML = '';
    e.preventDefault();
    var search = document.querySelector('input');
    var apiKey = 'VuH8hO2D5ZIskAgpK3A3PnyS2GjRh1ci';
    var url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search.value}&offset=${offset}&limit=${limit}`;
    axios.get(url).then(response => {
        const result = response.data.data;
        console.log(response.data.data);
        result.forEach(gif => {
            var newImg = document.createElement('img');
            newImg.src = `https://media.giphy.com/media/${gif.id}/giphy.gif`;
            main.append(newImg);
        })
    })
}

function showMore(e) {
    e.preventDefault();
    var search = document.querySelector('input');
    var apiKey = 'VuH8hO2D5ZIskAgpK3A3PnyS2GjRh1ci';
    var url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search.value}&offset=${offset += 5}&limit=${limit}`;
    console.log(limit, offset)
    axios.get(url).then(response => {
        const result = response.data.data;
        console.log(response.data.data);
        result.forEach(gif => {
            var newImg = document.createElement('img');
            newImg.src = `https://media.giphy.com/media/${gif.id}/giphy.gif`;
            main.append(newImg);
        })
    })
}

var button = document.createElement('button');
button.textContent = "Show More";
document.body.append(button);

form.addEventListener('submit', searchGiphy);
button.addEventListener('click', showMore);