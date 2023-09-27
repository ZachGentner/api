const test = document.getElementById('test');
const form = document.getElementById('form');
const input = document.getElementById('input');

const key = 'YOUR_API_KEY';

form.addEventListener('submit', (e) => {

    e.preventDefault();
    getGif();
})

function getGif() {
    let term = input.value;
    input.value = "";
    let query = `https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${term}`;

    if (term !== '') {
        fetch(query, {mode: 'cors'})
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response.data.images.original.url);
                let source = response.data.images.original.url;
                test.children[0].setAttribute('src', source)
            })
            .catch(error => {
                console.log(error)                
            });
    }
}