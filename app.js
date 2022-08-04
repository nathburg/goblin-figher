const goblinContainerEl = document.getElementById("goblin-container");
const goblinNameInputEl = document.getElementById("goblin-name-input");
const goblinNameButtonEl = document.getElementById("goblin-name-button");

let goblins = [
    {
        name: "Bad Goblin",
        HP: 3
    },
    {
        name: "Worse Goblin",
        HP: 3
    }
]

displayGoblins();

goblinNameButtonEl.addEventListener('click', () => {
    if (goblinNameInputEl.value != "") {
        const newGoblin = {
            name: goblinNameInputEl.value,
            HP: 3
        };
        goblins.push(newGoblin);
        displayGoblins();
    }
});

function renderGoblin(goblin) {
    const goblinEl = document.createElement('div');
    goblinEl.textContent = `${goblin.name} 👹 ${goblin.HP} HP`;
    goblinEl.classList.add('goblin');

    return goblinEl;
}

function displayGoblins() {
    goblinContainerEl.textContent = '';
    for (let goblin of goblins) {
        const newGoblin = renderGoblin(goblin);
        goblinContainerEl.append(newGoblin);
    }
}
