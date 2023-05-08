// Defines Character Object
const player = {
    name: "Player",
    level: 1,
    exp: 0,
    health: 100,
    attack: 20,
    defense: 10
}

// Creates Goblin Enemy
const enemy = {
    name: "Goblin",
    exp: 5,
    health: 30,
    attack: 20,
    defense: 10
}

// Checks for KO
function isKO (defender, player, enemy) {
    if (defender.health <= 0) {
        console.log(`${defender.name} has been defeated`)
        if (defender.name === enemy.name) {
            //player.exp += enemy.exp;
            console.log("Victorious!")
        } else {
            console.log("Game Over")
        }
    }
}

// Calulates damage. Takes defense away from attack, then adds a 25% pos/neg variance and checks for a *1.5 critical hit (10% chance)
function damageCalc(attacker, defender, player) {
    let baseDamage = attacker.attack - defender.defense;
    damageMod = Math.floor((Math.random() * 50) + 75) /100;
    let crit = Math.ceil(Math.random() * 10);
    let finalDamage = Math.floor(baseDamage * damageMod)
    if (crit >= 9) {
        finalDamage = Math.ceil(finalDamage * 1.5)
        console.log("Critical Hit!")
    }
    console.log(`${attacker.name} deals ${finalDamage} to ${defender.name}`)
    defender.health = defender.health - finalDamage;
    console.log(`${defender.name} has ${defender.health} remaining`);
    isKO(defender, player, enemy)
}

// checks and runs  damage calculation
function battleTurn(attacker, defender, player, enemy) {
    if (attacker.health > 0 && defender.health > 0) {
        console.log(`${attacker.name}'s turn`)
        damageCalc(attacker, defender)
    }
}

// Runs a full round, allowing both characters to attack
function combatRound(player, enemy) {
    battleTurn(player, enemy)
    battleTurn(enemy, player)
}