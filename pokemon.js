class Pokemon{
  constructor(name, damage, sound, move, type = 'normal'){
  this.name = name;
  this.health = 100;
  this.damage = damage;
  this.sound = sound;
  this.move = move;
  this.type = type;
  this.strength = this.findStrength();
  this.weakness = this.findWeakness();
  }
  findStrength(){
      if (this.type === 'fire') { return 'grass' }
      if (this.type === 'grass') { return 'water' }
      if (this.type === 'water') { return 'fire' }
      if (this.type === 'normal') { return '' }
  }
  findWeakness(){
    if (this.type === 'fire') { return 'water' }
    if (this.type === 'grass') { return 'fire' }
    if (this.type === 'water') { return 'grass' }
    if (this.type === 'normal') { return '' }
  }
  useYourMove(){
    return this.move
  }
  talk(){
    return this.sound
  }
}


class Trainer{
  constructor(name){
    this.name = name;
    this.storage = [];
  }
  catch(pokemon){
    this.storage.push(pokemon)
  }
}

class Battle{
  constructor(trainer1, trainer2){
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }

  fight(pokemon1, pokemon2) {
    this.trainer1.storage = pokemon1;
    this.trainer2.storage = pokemon2;
    let pokemon1RemainingHealth = pokemon1.health
    let pokemon2RemainingHealth = pokemon2.health
    console.log("---------------------------------------------------")
    console.log(`${pokemon1.name}'s remaining health: ${pokemon1RemainingHealth} | ${pokemon2.name}'s remaining health: ${pokemon2RemainingHealth}`)
    console.log("---------------------------------------------------")

      if (pokemon1RemainingHealth > 0) {
        if (pokemon2.type === pokemon1.strength) {
          pokemon2RemainingHealth = pokemon2RemainingHealth - (pokemon1.damage * 1.25);
          console.log(`${pokemon1.name}'s attack --> super effective!!`)
        } else if (pokemon2.type === pokemon1.weakness) {
          pokemon2RemainingHealth = pokemon2RemainingHealth - (pokemon1.damage * 0.75);
          console.log(`${pokemon1.name}'s attack --> not very effective :(`)
        } else {
          pokemon2RemainingHealth = pokemon2RemainingHealth - pokemon1.damage;
          console.log(`${pokemon1.name}'s attack --> effective!`)
        }
      } else {
        console.log(`${pokemon2.name} wins!`) 
      }

      if (pokemon2RemainingHealth > 0) {
        if (pokemon1.type === pokemon2.strength) {
          pokemon1RemainingHealth = pokemon1RemainingHealth - (pokemon2.damage * 1.25);
          console.log(`${pokemon2.name}'s attack --> super effective!!`)
        } else if (pokemon1.type === pokemon2.weakness) {
          pokemon1RemainingHealth = pokemon1RemainingHealth - (pokemon2.damage * 0.75);
          console.log(`${pokemon2.name}'s attack --> not very effective :(`)
        } else {
          pokemon1RemainingHealth = pokemon1RemainingHealth - pokemon2.damage;
          console.log(`${pokemon2.name}'s attack --> effective!`)
        }
      } else {
        console.log(`${pokemon1.name} wins!`)
     }
     console.log("---------------------------------------------------")
    console.log(`${pokemon1.name}'s remaining health: ${pokemon1RemainingHealth} | ${pokemon2.name}'s remaining health: ${pokemon2RemainingHealth}`)
    console.log("---------------------------------------------------")
    }
   }



module.exports = { Pokemon, Trainer, Battle };