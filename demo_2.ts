type user = { name: string; isValid: boolean | number };
const myArray: user[] = [];

myArray.push({ name: "string", isValid: true });
myArray.push({ name: "string", isValid: 1 });
export {};
