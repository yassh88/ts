type User = { readonly name: string; isPaid: boolean | number; extra?: string };

type userDetails = User & { address: string };
function addPropToObj(user: userDetails): User {
  return user;
}

addPropToObj({ name: "string", isPaid: 1, address: "SDf" });

export {};
