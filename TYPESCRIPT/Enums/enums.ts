enum Roles {
  ADMIN = "admin",
  USER = "user",
}

Roles.ADMIN; //"admin"

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

let dir: Direction = Direction.Up;
console.log(dir); // 0

enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

let currentStatus: Status = Status.Active;
console.log(currentStatus); // "ACTIVE"
