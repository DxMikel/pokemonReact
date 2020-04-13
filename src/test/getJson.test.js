import jsonFile from '../dataPokemon';

test('Verificar el json este completo',async () => {
    const jsonGitHub = await fetch("https://raw.githubusercontent.com/anapaulaoliva/GDL004-data-lovers/master/src/data/pokemon/pokemon.json");
    const convertido = await jsonGitHub.json();
    expect(convertido).toStrictEqual(jsonFile);
});