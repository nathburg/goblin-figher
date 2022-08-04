const goblinContainerEl = document.getElementById("goblin-container");

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
