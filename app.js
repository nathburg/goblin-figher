const goblinContainerEl = document.getElementById('goblin-container');
const goblinNameInputEl = document.getElementById('goblin-name-input');
const goblinNameButtonEl = document.getElementById('goblin-name-button');
const yourStatusEl = document.getElementById('your-status');
const goblinStatusEl = document.getElementById('goblin-status');
const protagonistStatsEl = document.getElementById('protagonist-stats');
const goblinGraveEl = document.getElementById('goblin-grave');

let yourHP = 10;
let vanquishedGoblinCounter = 0;
let goblins = [
    {
        name: 'Bad Goblin',
        HP: 3,
        emoji: '👹'
    },
    {
        name: 'Worse Goblin',
        HP: 3,
        emoji: '👹'
    }
]

displayGoblins();

goblinNameButtonEl.addEventListener('click', () => {
    if (goblinNameInputEl.value !== '') {
        const newGoblin = {
            name: goblinNameInputEl.value,
            HP: 3,
            emoji: '👹'
        };
        goblins.push(newGoblin);
        displayGoblins();
    }
    goblinNameInputEl.value = '';
});

function renderGoblin(goblin) {
    const goblinEl = document.createElement('button');
    goblinEl.textContent = `${goblin.name} ${goblin.emoji} ${goblin.HP} HP`;
    goblinEl.classList.add('goblin');
    goblinEl.addEventListener('click', () => {
        if (goblin.HP > 0) {
            if (Math.random() > .5) {
                goblin.HP--;
                if (goblin.HP === 0) {
                    goblin.emoji = '💀';
                    displayGoblins();
                    goblinStatusEl.textContent = `You vanquished ${goblin.name}!`;
                    vanquishedGoblinCounter++;
                    if (vanquishedGoblinCounter === 1) {
                        goblinGraveEl.textContent = 'You vanquished 1 goblin.';
                    } else {
                        goblinGraveEl.textContent = `You vanquished ${vanquishedGoblinCounter} goblins.`;
                    }
                } else {
                    goblinStatusEl.textContent = `You hit ${goblin.name}!`;
                    displayGoblins();
                }                
            } else {
                goblinStatusEl.textContent = `Your attack missed!`;
            }
            if (Math.random() > .7) {
                yourHP--;
                yourStatusEl.textContent = `You've been hit by ${goblin.name}!`;
                protagonistStatsEl.textContent = `${yourHP} HP`;
            } else {
                yourStatusEl.textContent = `${goblin.name}'s attack missed!`;
            }
        }
    });    
    return goblinEl;
}

function displayGoblins() {
    goblinContainerEl.textContent = '';
    for (let goblin of goblins) {
        const newGoblin = renderGoblin(goblin);
        goblinContainerEl.append(newGoblin);
    }
}


