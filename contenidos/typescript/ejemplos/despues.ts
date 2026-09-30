// Misma idea tipada: contratos claros + narrowing

type Role = "user" | "admin";

interface UserInput {
  id: number;
  name: string;
  role?: Role;
}

interface User {
  id: number;
  name: string;
  role: Role;
}

function createUser(data: UserInput): User {
  return {
    id: data.id,
    name: data.name.trim(),
    role: data.role ?? "user",
  };
}

function canEdit(user: User): boolean {
  return user.role === "admin";
}

function parseUser(raw: unknown): UserInput {
  if (
    typeof raw === "object" &&
    raw !== null &&
    "id" in raw &&
    "name" in raw &&
    typeof (raw as { id: unknown }).id === "number" &&
    typeof (raw as { name: unknown }).name === "string"
  ) {
    const role = (raw as { role?: unknown }).role;
    if (role === undefined || role === "user" || role === "admin") {
      return {
        id: (raw as { id: number }).id,
        name: (raw as { name: string }).name,
        role,
      };
    }
  }
  throw new Error("JSON invalido para UserInput");
}

const raw: unknown = JSON.parse('{"id":1,"name":"Ana"}');
const user = createUser(parseUser(raw));

console.log(canEdit(user));
console.log(user.id.toFixed(0));
