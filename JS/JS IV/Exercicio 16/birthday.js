const dayjs = require("dayjs");
let relativeTime = require("dayjs/plugin/relativeTime");
let duration = require("dayjs/plugin/duration");
let localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.extend(localizedFormat);

function exercise16(dateOfBirth) {
  const birthDate = dayjs(dateOfBirth, "YYYY/MM/DD");
  const now = dayjs();
  const age = now.diff(birthDate, "year");

  console.log(`Data de nascimento: ${birthDate.format("DD/MM/YYYY")}`);
  console.log(`Idade: ${age}`);

  let nextBirthday = birthDate.add(age, "year");

  if (now.isAfter(nextBirthday)) {
    nextBirthday = birthDate.add(age + 1, "year");
  }

  console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`);

  const daysToBirthday = nextBirthday.diff(now, "day") + 1;
  console.log(`Dias para o próximo aniversário: ${daysToBirthday}`);
}

exercise16("1998/08/25");
