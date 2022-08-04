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

function renderGoblins() {
    const goblinsEl = document.createElement('div');
    for (let goblin of goblins) {
        const newGoblin = document.createElement('div');
        newGoblin.textContent = `${goblin.name} 👹 ${goblin.HP} HP`;
        newGoblin.classList.add('goblin');
        goblinsEl.append(newGoblin);
    }
    return goblinsEl;
}

function displayGoblins() {
    goblinContainerEl.textContent = '';
    goblinContainerEl.append(renderGoblins());
}
