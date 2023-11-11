import { useDispatch, useSelector } from "react-redux";
import { handleLoginBtnCliked, logInStateHandler } from "../store/AuthReducer";
import { useState } from "react";
import { createAccount } from "../appwrite/Auth";

const AuthModel = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleSubmitForm = async () => {
    const payload = { email, password };
    dispatch(logInStateHandler(payload));
    const successOrFailState = await createAccount(payload);
    if (await successOrFailState) {
      setError(true);
      setErrorMessage("Invalid Credentials");
      return;
    }
    if (await !successOrFailState) {
      handleClose({state:"true"})
      console.log(
        "AuthModule :: async task :: closing the model after the task is compled "
      );
    }
  };

  
  const handleClose = (e) => {
    if (e.state == "true") {
      dispatch(handleLoginBtnCliked());
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
      <div className="bg-[#242428]  rounded-md h-80 w-80 flex flex-col space-x-6 items-center p-3">
        {error ? (
          <h1 className="text-red-600 text-xl font-semibold">{errorMessage}</h1>
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
              className="px-3 py-2 text-lg rounded-lg shadow-md bg-[#FFDD95] text-[#242428]"
              onClick={handleSubmitForm}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModel;
