import { Client, Account, Databases } from "appwrite";


const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("654ccbb575d571178033");
const account = new Account(client);
const database = new Databases(client);
const createAccount = async ({ email, password }) => {
  try {
    const response = await account.createEmailSession(email, password);
    console.log(response);
    return false;
  } catch (e) {
    console.log(e);
    return true;
  }
};

const signUp = async ({ email, password }) => {
  try {
    const response = await account.create("hhhshhsh677s7s6s", email, password);

    console.log(response);
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
