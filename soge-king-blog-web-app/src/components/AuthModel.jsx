import { useDispatch, useSelector } from "react-redux";
import { handleLoginBtnCliked} from "../store/AuthReducer";
import { useState } from "react";
import { createAccount, signUp } from "../appwrite/appwrite";

const AuthModel = () => {
  const [signImBtnCliked, setSignInBtnCliked] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUPpassword] = useState("");
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleSubmitForm = async () => {
    if (email.length < 5) {
      setError(true);
      setErrorMessage("Email is Required");
      return;
    }
    if (password.length < 8) {
      setError(true);
      setErrorMessage("Password must have more then 8 charcter");
      return;
    }
    const payload = { email, password };
    const successOrFailState = await createAccount(payload);
    if (await successOrFailState) {
      setError(true);
      setErrorMessage("Invalid Credentials");
      return;
    }
    if (await !successOrFailState) {
      handleClose({ state: "true" });
      console.log(
        "AuthModule :: async task :: closing the model after the task is compled "
      );
    }
  };

  const handleSignUpSubmitForm = async () => {
    if (signUpEmail.length < 5) {
      setError(true);
      setErrorMessage("Email Requred");
      return;
    }
    if (signUpPassword.length < 8) {
      setError(true);
      setErrorMessage("Password must have more then 8 charcter");
      return;
    }
   
    const payload = {
      email: signUpEmail,
      password: signUpPassword,
     
    };

    const successOrFailState = await signUp(payload);
    if (await successOrFailState) {
      setError(true);
      setErrorMessage("Something Went Wrong");
      return;
    }
    if (await !successOrFailState) {
      handleClose({ state: "true" });
      console.log(
        "AuthModule :: async task :: closing the model after the task is complted "
      );
      
    }


  };

  const handleClose = (e) => {
    if (e.state == "true") {
      dispatch(handleLoginBtnCliked());
      dispatch(handleIsLogedIn());
      return;
    }

    if (e.target.id == "container") {
      dispatch(handleLoginBtnCliked());
    }
  };

  if (!authState.logInBtnCliked) return;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
      id="container"
      onClick={handleClose}
    >
      {!signImBtnCliked ? (
        <div className="bg-[#242428]  rounded-md h-96 w-80 flex flex-col space-y-4 items-center p-3">
          {error ? (
            <h1 className="text-red-600 text-xl font-semibold">
              {errorMessage}
            </h1>
          ) : (
            ""
          )}
          <h1 className="text-xl font-semibold text-[#FFDD95] underline">
            Login
          </h1>

          <div>
            <div className="flex flex-col m-4 space-y-1">
              <label htmlFor="email " className="text-[#FFDD95]">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="p-1 px-2 border-2 rounded-md "
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col m-4 space-y-1">
              <label htmlFor="password" className="text-[#FFDD95]">
                Your Password
              </label>
              <input
                type="password"
                id="password"
                className="p-1 px-2 border rounded-md"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="px-6 py-2 text-lg rounded-lg shadow-md bg-[#FFDD95] text-[#242428]"
                onClick={handleSubmitForm}
              >
                Submit
              </button>
            </div>
            <div className="flex flex-col items-center mt-6 ">
              <p
                className="text-base  font-bold underline text-[#FFDD95]"
                onClick={() => {
                  setSignInBtnCliked(true);
                }}
              >
                SignUp Now ?
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#242428]  rounded-md h-96 w-80 flex flex-col space-y-4 items-center ">
          {error ? (
            <h1 className="text-red-600 text-xl font-semibold">
              {errorMessage}
            </h1>
          ) : (
            ""
          )}
          <h1 className="text-xl font-semibold text-[#FFDD95] underline">
            SignUp
          </h1>

          <div className="flex flex-col m-4 space-y-1">
            <label htmlFor="email " className="text-[#FFDD95]">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="p-1 px-2 border-2 rounded-md "
              value={signUpEmail}
              onChange={(e) => {
                setSignUpEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col m-4 space-y-1">
            <label htmlFor="password" className="text-[#FFDD95]">
              Your Password
            </label>
            <input
              type="password"
              id="password"
              className="p-1 px-2 border rounded-md"
              value={signUpPassword}
              onChange={(e) => {
                setSignUPpassword(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="px-6 py-2 text-lg rounded-lg shadow-md bg-[#FFDD95] text-[#242428]"
              onClick={handleSignUpSubmitForm}
            >
              Submit
            </button>
          </div>
          <div className="flex flex-col items-center mt-6 ">
            <p
              className="text-base  font-bold underline text-[#FFDD95]"
              onClick={() => {
                setSignInBtnCliked(false);
              }}
            >
              Login Now ?
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthModel;
