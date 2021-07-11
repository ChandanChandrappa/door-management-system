const doors = [
  {
    id: "1",
    name: "Door 1",
    isLocked: false,
    isOpen: true,
  },
  {
    id: "2",
    name: "Door 2",
    isLocked: false,
    isOpen: true,
  },
  {
    id: "3",
    name: "Door 3",
    isLocked: false,
    isOpen: false,
  },
];

export function getDoors() {
  return doors;
}

export function getDoor(id) {
  return doors.find((m) => m.id === id);
}

export function saveDoor(door) {
  let doorInDb = doors.find((d) => d.id === door.id) || {};
  doorInDb.name = door.name;
  doorInDb.isLocked = door.isLocked;
  doorInDb.isOpen = door.isOpen;

  if (!doorInDb.id) {
    doorInDb.id = Math.random();
    doors.push(doorInDb);
  }
  return doorInDb;
}

export function deleteDoor(id) {
  let doorInDb = doors.find((d) => d.id === id);
  doors.splice(doors.indexOf(doorInDb), 1);
  return doors;
}
