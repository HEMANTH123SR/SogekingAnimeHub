import { Client, Account, Databases } from "appwrite";

const getId = () => {
  let id = "";
  const charctersArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    0,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1,
  ];
  for (let i = 0; i < 36; i++) {
    const randomCharcter = charctersArray[Math.floor(Math.random() * 35)];
    id += randomCharcter;
  }
  return id;
};

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("654ccbb575d571178033");
const account = new Account(client);
const database = new Databases(client);

const createAccount = async ({ email, password }) => {
  try {
    const response = await account.createEmailSession(email, password);
    localStorage.setItem("id", response.$id);
    localStorage.setItem("email", response.providerUid);
    console.log(response.providerUid);
    return false;
  } catch (e) {
    console.log(e);
    return true;
  }
};

const signUp = async ({ email, password }) => {
  try {
    const response = await account.create(getId(), email, password);
    localStorage.setItem("id", response.$id);
    localStorage.setItem("email", response.email);
    return false;
  } catch (e) {
    console.log(e);
    return true;
  }
};

const getBlogs = async () => {
  try {
    const blogsList = await database.listDocuments(
      "654f9f9a5dbc030bbc7f",
      "654f9fa4a3b5ea641c52"
    );
    console.log(blogsList);
    return blogsList;
  } catch (e) {
    console.log(e);
  }
};

export { createAccount, signUp, getBlogs };
