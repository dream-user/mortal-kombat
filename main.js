/* Task #0 */

const player1 = {
    name: 'Sonya',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Bow and Arrow', 'Pollaxe', 'Pistol'],
    attack: function () {
        console.log(player2.name + 'Fight...')
    }
};

const player2 = {
    name: 'Kitana',
    hp: 60,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Cleaver', 'Flying Blade', 'Staff'],
    attack: function () {
        console.log(player1.name + 'Fight...')
    }
};

/* Task #1 + Task #2 */

function createPlayer(playerClass, playerInfo) {
    const $player1 = document.createElement('div');
    $player1.classList.add(playerClass);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = playerInfo.hp + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerInfo.name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $image = document.createElement('img');
    $image.src = playerInfo.img;

    $character.appendChild($image);

    const $root = document.querySelector('.arenas');
    $root.appendChild($player1);
}

createPlayer('player1', player1);
createPlayer('player2', player2);