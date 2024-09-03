const registeredShips = [];

function saveSpaceship(
  name: string,
  pilot: string,
  crewLimit: number,
  crew: [],
  inMission: boolean = false
) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew,
    inMission,
  };
  return spaceship;
}

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

function sendToMission(spaceship: {
  name: string;
  crew: string[];
  crewLimit: number;
  InMission: boolean;
}) {
  const minimumCrewRequired = Math.floor(spaceship.crewLimit / 3);

  if ((spaceship.InMission = true)) {
    alert(`A nave ${spaceship.name} já está em missão!`);
  } else if (
    (spaceship.InMission =
      false && minimumCrewRequired >= spaceship.crew.length)
  ) {
    alert(`A nave ${spaceship.name} foi enviada em missão!`);
    spaceship.InMission = true;
  } else {
    alert(
      `A nave ${spaceship.name} não tem tripulação suficiente! Pelo menos ${minimumCrewRequired} membros são necessários.`
    );
  }
}
