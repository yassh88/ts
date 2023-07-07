interface user {
  name: string;
  age: number;
  getAge(): number;
}

interface user {
  googleLoginID: string;
}

var myUser2: user = {
  name: "string",
  age: 23,
  getAge: () => 23,
  googleLoginID: "234",
};
var myUser: admin = {
  name: "string",
  age: 23,
  getAge: () => 23,
  googleLoginID: "234",
  role: "adsf",
};

interface admin extends user {
  role: "admin" | "super admin" | "adsf";
}
