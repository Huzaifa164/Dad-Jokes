const joke = document.querySelector('#joke');
const jokeBtn = document.getElementById('jokeBtn');

// const createJoke = () => {
//     const setHeader = {
//         headers: {
//             "Accept": "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//         joke.innerHTML = data.joke
//     })
//     .catch((error) => console.log(error));
// }

const createJoke = async () => {
    const setHeader = {
        headers: {
            'Accept': 'application/json'
        }
    }
    try {
        const res = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await res.json();
        joke.innerHTML = data.joke;
    }catch(error) {
        console.log(`The error is ${error}.`);
    }
    
}

jokeBtn.addEventListener('click', createJoke);
createJoke();