export async function get_users() {}

export async function get_one_user(id: string) {
  return { firstName: "John", lastName: "Doe", id };
}

export async function post_user(user: object) {
  return { user };
}

export async function put_user(id: string, user: object) {
  return { id, ...user };
}

export async function delete_user(id: string) {
  return { firstName: "John", lastName: "Doe", id };
}
