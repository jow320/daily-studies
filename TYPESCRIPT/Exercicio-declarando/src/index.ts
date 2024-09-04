const spaceships = [];

// Função salvar a nave

function saveSpaceship(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false,
  };
  spaceships.push(spaceship);
  alert(`A nave ${spaceship.name} foi salva!`);
}

// Função achar nave

function findSpaceship(name: string) {
  let spaceship: {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
  };

  spaceship = spaceships.find((ship) => {
    return ship.name === name;
  });

  return spaceship;
}

//Função adicionar membro ao crew
function addToCrew(
  spaceship: { crewLimit: number; crew: string[] },
  member: string
) {
  if (spaceship.crew.length >= spaceship.crewLimit) {
    alert("Não posso adicionar mais! está no limite da tripulação!");
  } else {
    spaceship.crew.push(member);
  }
}

// Mandar para missão
function sendInMission(spaceship: {
  name: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;
}) {
  if (spaceship.inMission) {
    alert(`${spaceship.name} não pode ser enviada. Nave já em missão.`);
  } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
    alert(`${spaceship.name} não pode ser enviada. Tripulação insuficiente.`);
  } else {
    spaceship.inMission = true;

    alert(`${spaceship.name} enviada para a missão!`);
  }
}
// Opções do Menu

function firstOption() {
  const name = prompt("Qual o nome da nave?");
  const pilot = prompt("Qual o nome do piloto?");
  const crewLimit = Number.parseInt(prompt("Qual o tamanho da frota?"));

  const confirmation = confirm(
    `Confirma a criação da nave de nome ${name}, capitão ${pilot} e tamanho de frota ${crewLimit}?`
  );

  if (confirmation) {
    saveSpaceship(name, pilot, crewLimit);
  }
}

function secondOption() {
  const member = prompt("Qual o nome do membro a ser adicionado?");
  const spaceshipName = prompt("Qual o nome da nave que ele será adicionado?");

  const spaceship = findSpaceship(spaceshipName);

  const confirmation = confirm(
    `Adicionar o membro ${member} à nave de nome ${spaceship.name}?`
  );

  if (confirmation) {
    addToCrew(spaceship, member);
  }
}

function thirdOption() {
  const spaceshipName = prompt(`Qual o nome da nave que irá em missão?`);
  const spaceship = findSpaceship(spaceshipName);

  const confirmation = confirm(
    `Você deseja que a nave ${spaceship.name} vá em missão?`
  );

  if (confirmation) {
    sendInMission(spaceship);
  }
}

function fourthOption() {
  let list = "Naves Registradas:\n";

  spaceships.forEach(
    (spaceship: {
      name: string;
      pilot: string;
      crewLimit: number;
      crew: string[];
      inMission: boolean;
    }) => {
      list += `
      Nave: ${spaceship.name}
      Piloto: ${spaceship.pilot}
      Em missão? ${spaceship.inMission ? "Sim" : "Não"}
      Tamanho Máximo da Triuplação: ${spaceship.crewLimit}
      Tripulantes: ${spaceship.crew.length}
    `;

      spaceship.crew.forEach((member) => {
        list += `    - ${member}\n`;
      });
    }
  );

  alert(list);
}

// Menu

let userOption = 0;

while (userOption !== 5) {
  const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
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
      alert("Encerrando o sistema...");
      break;
    default:
      alert("Opção inválida! Retornando ao painel principal...");
      break;
  }
}
