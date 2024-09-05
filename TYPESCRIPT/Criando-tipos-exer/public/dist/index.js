const planets = [];
//função salvar planeta
function savePlanet(name, coordenates, situation = "inexplorado", satelites = []) {
    const planet = { name, coordenates, situation, satelites };
    const confirmation = confirm(`Deseja salvar o planeta de nome ${planet.name}?`);
    if (confirmation) {
        planets.push(planet);
    }
}
//função achar planeta
function findPlanet(name) {
    let planet;
    planet = planets.find((plnt) => {
        return plnt.name === name;
    });
    return planet;
}
// função mudar situação
function changeSituation(planet) {
    const newSituation = prompt(`Para qual situação deseja mudar o planeta ${planet.name}?\n "habitado" | "habitável" | "inabitável" | "inexplorado"`);
    if (newSituation === "habitado" ||
        newSituation === "habitável" ||
        newSituation === "inabitável" ||
        newSituation === "inexplorado") {
        planet.situation = newSituation;
        alert(`Situação do planeta ${planet.name} mudada para ${newSituation}`);
    }
    else {
        alert("Situação inválida. Tente novamente.");
    }
}
// função adicionar satelite
function addSatelite(planet) {
    const newSatelite = prompt(`Qual o nome do satélite que deseja adicionar ao planeta ${planet.name}?`);
    const confirmation = confirm(`Deseja mesmo adicionar o satélite de nome ${newSatelite} ao planeta ${planet.name}?`);
    if (confirmation) {
        planet.satelites.push(newSatelite);
    }
}
//Função remover satélite
function removeSatelite(planet) {
    const newSatelite = prompt(`Qual o nome do satélite que deseja remover do planeta ${planet.name}?`);
    const confirmation = confirm(`Deseja mesmo remover o satélite de nome ${newSatelite} do planeta ${planet.name}?`);
    if (confirmation) {
        const index = planet.satelites.indexOf(newSatelite);
        planet.satelites.splice(index, 1);
        alert(`O satélite ${newSatelite} foi removido do planeta ${planet.name}`);
    }
}
function firstOption() {
    const name = prompt("Qual o nome do planeta?");
    const coordenates1 = Number(prompt("Qual as coordenada 1 do planeta?"));
    const coordenates2 = Number(prompt("Qual as coordenada 2 do planeta?"));
    const coordenates3 = Number(prompt("Qual as coordenada 3 do planeta?"));
    const coordenates4 = Number(prompt("Qual as coordenada 4 do planeta?"));
    const confirmation = confirm(`Deseja salvar o planeta ${name} com as coodernadas ${coordenates1}, ${coordenates2}, ${coordenates3}, ${coordenates4} `);
    if (confirmation) {
        savePlanet(name, [coordenates1, coordenates2, coordenates3, coordenates4]);
    }
}
function secondOption() {
    const name = prompt("Qual o nome do planeta que deseja mudar a situação?");
    const planet = findPlanet(name);
    if (planet) {
        changeSituation(planet);
    }
    else {
        alert("Planeta não existe!");
    }
}
function thirdOption() {
    const name = prompt("Qual o nome do planeta que deseja adicionar um satélite?");
    const planet = findPlanet(name);
    if (planet) {
        addSatelite(planet);
    }
    else {
        alert("Planeta não existe!");
    }
}
function fourthOption() {
    const name = prompt("Qual o nome do planeta que deseja remover um satélite?");
    const planet = findPlanet(name);
    if (planet) {
        removeSatelite(planet);
    }
    else {
        alert("Planeta não existe!");
    }
}
function fifthOption() {
    let list = "Planetas Registrados:\n";
    planets.forEach((planet) => {
        list += `
      Planeta: ${planet.name}
      Coordenadas: ${planet.coordenates}
      Situação: ${planet.situation}
      Satélites: ${planet.satelites.length}
    `;
        planet.satelites.forEach((sat) => {
            list += `    - ${sat}\n`;
        });
    });
    alert(list);
}
// User Menu
let userOption = 0;
while (userOption !== 6) {
    const menu = `Painel Principal
    1 - Adicionar um novo planeta
    2 - Mudar a situação de um planeta
    3 - Adicionar satélite a um planeta
    4 - Remover satélite de um planeta
    5 - Listar todos planetas registrados
    6 - Encerrar
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstOption();
            break;
        case 2:
            secondOption();
            break;
        case 3:
            thirdOption();
            break;
        case 4:
            fourthOption();
            break;
        case 5:
            fifthOption();
            break;
        case 6:
            alert("Encerrando o sistema...");
            break;
        default:
            alert("Opção inválida! Retornando ao painel principal...");
            break;
    }
}
