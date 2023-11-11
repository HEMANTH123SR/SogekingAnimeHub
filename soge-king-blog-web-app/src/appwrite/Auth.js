import { Client,Account} from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("654ccbb575d571178033");
const account = new Account(client);

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

const signUp=async({email,password})=>{
try{
const response=await account.create("hhhshhsh677s7s6s",email,password);
console.log(response);
return false;
}catch(e){
console.log(e);
return true;
}
}

export { createAccount ,signUp};
