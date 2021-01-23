const { Pokemon, Trainer, Battle } = require('./pokemon')

describe('Pokemon', () => {
  test('each pokemon has name property', () => {
    const testPokemon = new Pokemon('Snivy');
    expect(testPokemon.name).toBe('Snivy')
  })
  test('each pokemon has health property', () => {
    const testPokemon = new Pokemon('Snivy');
    expect(testPokemon.health).toBe(100)
  })
  test('each pokemon has attack damage property', () => {
    const testPokemon = new Pokemon('Snivy', 3);
    expect(testPokemon.damage).toBe(3)
  })
  test('each pokemon has sound property', () => {
    const testPokemon = new Pokemon('Snivy', 3, 'sni');
    expect(testPokemon.sound).toBe('sni')
  })
  test('each pokemon has move property', () => {
    const testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm');
    expect(testPokemon.move).toBe('leaf storm')
  })
  test('each pokemon has type property and default is set to normal', () => {
    let testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm', 'grass');
    expect(testPokemon.type).toBe('grass')
    testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm');
    expect(testPokemon.type).toBe('normal')
  })
describe('Pokemon strength function', () => {
    test('finds pokemons strength when function is invoked with pokemons type', () => {
      let testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm', 'fire');
      expect(testPokemon.strength).toBe('grass')
    
      testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm', 'grass')
      expect(testPokemon.strength).toBe('water')

      testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm', 'water')
      expect(testPokemon.strength).toBe('fire')

      testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm')
      expect(testPokemon.strength).toBe('')
    })
  });
});
describe('Pokemon weakness function', () => {
    test('finds pokemons weakness when function is invoked with pokemons type', () => {
      let testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm', 'fire');
      expect(testPokemon.weakness).toBe('water')
      testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm', 'grass');
      expect(testPokemon.weakness).toBe('fire')
      testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm', 'water');
      expect(testPokemon.weakness).toBe('grass')
      testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm');
      expect(testPokemon.weakness).toBe('')
  });
});
describe('Pokemon talk method', () => {
  test('talk method', () => {
    let testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm', 'fire')
    expect(testPokemon.talk()).toBe('sni')

    testPokemon = new Pokemon('Snivy', 3, 'boo', 'leaf storm', 'fire')
    expect(testPokemon.talk()).toBe('boo')
  })
})
describe('Pokemon useYourMoves method', () => {
  test('useYourMoves method', () => {
    let testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm', 'fire')
    expect(testPokemon.useYourMove()).toBe('leaf storm')
  })
})

describe('Trainers', () => {
  test('trainer has name property', () => {
    const testTrainer = new Trainer('Kieran');
    expect(testTrainer.name).toBe('Kieran')
  })
  test('trainer has storage property', () => {
    const testTrainer = new Trainer('Kieran');
    expect(testTrainer.storage).toEqual([])
  })
})
describe('catch method', () => {
  test('push a pokemon into the storage', () => {
    const testTrainer = new Trainer('Kieran');
    const testPokemon = new Pokemon('Snivy', 3, 'sni', 'leaf storm', 'fire')
    testTrainer.catch(testPokemon)
    expect(testTrainer.storage).toEqual([testPokemon])
  })
})
describe('Battle Method', () => {
  test('each battle has a trainer1 and trainer 2 property', () => {
    const testTrainer = new Trainer('Kieran');
    const testTrainer2 = new Trainer('Ayako');
    const testBattle = new Battle(testTrainer, testTrainer2);
    expect(testBattle.trainer1).toEqual({"name": "Kieran", "storage": []});
    expect(testBattle.trainer2).toEqual({"name": "Ayako", "storage": []});
  })
  test('fight method, contains 2 pokemon ready for battle', () => {
    const testTrainer = new Trainer('Kieran');
    const testPokemon1 = new Pokemon('Snivy', 30, 'sni', 'leaf storm', 'grass')
    testTrainer.catch(testPokemon1)
    const testTrainer2 = new Trainer('Ayako');
    const testPokemon2 = new Pokemon('Totodile', 30, 'toto', 'hydro pump', 'water')
    testTrainer2.catch(testPokemon2)
    const testBattle = new Battle(testTrainer, testTrainer2);
    testBattle.fight(testPokemon1, testPokemon2)
    expect(testBattle.trainer1.storage.name).toEqual('Snivy')
    expect(testBattle.trainer2.storage.name).toEqual('Totodile')
  })
});
describe('Battle Method', () => {
  test('winner of the battle', () => {
    const spy = jest.spyOn(console, 'log')
    const testTrainer = new Trainer('Kieran');
    const testPokemon1 = new Pokemon('Snivy', 100, 'sni', 'leaf storm', 'grass')
    testTrainer.catch(testPokemon1)
    const testTrainer2 = new Trainer('Ayako');
    const testPokemon2 = new Pokemon('Totodile', 30, 'toto', 'hydro pump', 'water')
    testTrainer2.catch(testPokemon2)
    const testBattle = new Battle(testTrainer, testTrainer2);
    testBattle.fight(testPokemon1, testPokemon2)
    expect(spy).toHaveBeenCalledWith(`${testPokemon1.name} wins!`)
  })
  })




