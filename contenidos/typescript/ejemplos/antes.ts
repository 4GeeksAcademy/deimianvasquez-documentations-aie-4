// Ejemplo intencionalmente debil: sin tipos, facil de romper

function createUser(data) {
  return {
    id: data.id,
    name: data.name.trim(),
    role: data.role || "user",
  };
}

function canEdit(user) {
  return user.role === "admin";
}

const raw = JSON.parse('{"id":"1","name":"Ana"}');
const user = createUser(raw);

console.log(canEdit(user));
console.log(user.id.toFixed(0));
