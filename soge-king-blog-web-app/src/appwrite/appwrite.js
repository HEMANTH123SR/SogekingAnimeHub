import { Client, Account, Databases, ID, Query } from "appwrite";

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
    const response = await account.create(ID.unique(), email, password);
    localStorage.setItem("id", response.$id);
    localStorage.setItem("email", response.email);
    return false;
  } catch (e) {
    console.log(e);
    return true;
  }
};

// const deleteAccount = async (id) => {
//   try {
//     const res = await account.deleteIdentity(id);
//     localStorage.removeItem("id");
//     localStorage.removeItem("email");
//     console.log(res);
//   } catch (e) {
//     console.log("appwrite :: delete account :: src/appwrite/appwrite.js");
//     console.log(e);
//   }
// };

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
        hashTags,
      }
    );
    console.log(res);
  } catch (e) {
    console.log("appwrite :: auth.js :: createBlog :: error ", e);
  }
};

const updateDocument = async (
  databaseId,
  name,
  id,
  title,
  summary,
  date,
  textEditorData,
  hashTags
) => {
  try {
    const res = await database.updateDocument(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_COLLECTION_ID,
      databaseId,
      {
        name,
        id,
        title,
        summary,
        date,
        textEditorData,
        hashTags,
      }
    );
    console.log(res);
    return true;
  } catch (e) {
    console.log(e);
  }
};

const deleteDocument = async (databaseId) => {
  try {
    const res = await database.deleteDocument(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_COLLECTION_ID,
      databaseId
    );
  } catch (e) {
    console.log("appwrite :: src/appwrite/appwrite.js :: delete document");
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

const getUserBlog = async () => {
  try {
    const userBlogList = await database.listDocuments(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_COLLECTION_ID,
      [Query.equal("id", localStorage.getItem("id"))]
    );
    return userBlogList;
  } catch (e) {
    console.log(e);
  }
};

const getBlog = async (documentId) => {
  try {
    const res = await database.getDocument(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_COLLECTION_ID,
      documentId
    );

    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export {
  createAccount,
  signUp,
  getBlogs,
  createBlog,
  getBlog,
  getUserBlog,
  updateDocument,
  deleteDocument,
};
