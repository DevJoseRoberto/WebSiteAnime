document.getElementById("meuBotao").addEventListener("click", function () {
    var mensagem = document.getElementById("mensagem");
    // Alterna a exibição da mensagem
    if (mensagem.style.display === "none") {
        mensagem.style.display = "block";
    } else {
        mensagem.style.display = "none";
    }
});


const characters = [
    {
        name: 'Tanjiro Kamado',
        image: 'image/tanjiro.webp' 
    },
    {
        name: 'Nezuko Kamado',
        image: 'image/nezuko.jpeg' 
    },
    {
        name: 'Zenitsu Agatsuma',
        image: 'image/zenitsu.webp' 
    },
    {
        name: 'Inosuke Hashibira',
        image: 'image/inosuke1.webp' 
    },
    {
        name: 'Kanao Tsuyuri',
        image: 'image/kanao1.jpg' 
    }
];

const button = document.getElementById('meuBotao');
const container = document.getElementById('characterContainer');

button.addEventListener('click', function () {
    if (container.style.display === 'none' || container.style.display === '') {
        container.innerHTML = ''; 
        characters.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');

            const img = document.createElement('img');
            img.src = character.image;
            img.alt = character.name;

            const name = document.createElement('div');
            name.classList.add('character-name');
            name.innerText = character.name;

            characterDiv.appendChild(img);
            characterDiv.appendChild(name);
            container.appendChild(characterDiv);
        });
        container.style.display = 'flex'; 
    } else {
        container.style.display = 'none'; 
    }
});