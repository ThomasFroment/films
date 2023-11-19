const films = [
    ['Earwig and the Witch', 'Gorō Miyazaki'],
    ['The Red Turtle', 'Michael Dudok de Wit'],
    ['When Marnie Was There', 'Hiromasa Yonebayashi'],
    ['The Tale of the Princess Kaguya', 'Isao Takahata'],
    ['The Wind Rises', 'Hayao Miyazaki'],
    ['From Up on Poppy Hill', 'Gorō Miyazaki'],
    ['Arrietty', 'Hiromasa Yonebayashi'],
    ['Ponyo', 'Hayao Miyazaki'],
    ['Tales from Earthsea', 'Gorō Miyazaki'],
    ['Howl\'s Moving Castle', 'Hayao Miyazaki'],
    ['The Cat Returns', 'Hiroyuki Morita'],
    ['Spirited Away', 'Hayao Miyazaki'],
    ['My Neighbors the Yamadas', 'Isao Takahata'],
    ['Princess Mononoke', 'Hayao Miyazaki'],
    ['Whisper of the Heart', 'Yoshifumi Kondō'],
    ['Pom Poko', 'Isao Takahata'],
    ['Porco Rosso', 'Hayao Miyazaki'],
    ['Only Yesterday', 'Isao Takahata'],
    ['Kiki\'s Delivery Service', 'Hayao Miyazaki'],
    ['My Neighbor Totoro', 'Hayao Miyazaki'],
    ['Grave of the Fireflies', 'Isao Takahata'],
    ['Castle in the Sky', 'Hayao Miyazaki'],
]

const directors = [...new Set(films.map(film => film[1]))];

const filmsBy = document.getElementById('filmsBy');

films.forEach(film => {
    const li = document.createElement('li');
    li.innerHTML = `${film[0]} : ${film[1]}`;
    if (film[1] == 'Hayao Miyazaki') {
        li.classList.add('red');
    }
    filmsBy.appendChild(li);
})

const directorsList = document.getElementById('directors');

directors.forEach(director => {
    const li = document.createElement('li');
    li.innerHTML = director;
    directorsList.appendChild(li);
})

const directorsFilmsList = document.getElementById('directorsfilmsList');

const map = new Map();
directors.forEach(director => {
    const li = document.createElement('li');
    li.innerHTML = director;
    directorsFilmsList.appendChild(li);

    const ul = document.createElement('ul');
    li.appendChild(ul);

    map.set(director, ul);
});

films.forEach(film => {
    const li = document.createElement('li');
    li.innerHTML = film[0];
    map.get(film[1]).appendChild(li);
});