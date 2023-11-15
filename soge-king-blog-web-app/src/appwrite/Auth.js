import { Client, Account, Databases, ID } from "appwrite";

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
  .setEndpoint(import.meta.env.VITE_APP_ID)
  .setProject(import.meta.env.VITE_PROJECT_ID);
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
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_COLLECTION_ID
    );
    console.log(blogsList);
    return blogsList;
  } catch (e) {
    console.log(e);
  }
};

const createBlog = async (
  name,
  id,
  title,
  image,
  summary,
  date,
  textEditorData,
  hashTags
) => {
  try {
    const res = await database.createDocument(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_COLLECTION_ID,
      ID.unique(),
      {
        name,
        id,
        title,
        summary,
        date,
        image:
          "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/The-Naruto-Akatsuki-members.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
        textEditorData,
        hashTags
      }
    );
    console.log(res);
  } catch (e) {
    console.log("appwrite :: auth.js :: createBlog :: error ", e);
  }
};

export { createAccount, signUp, getBlogs, createBlog };

