import { useDispatch, useSelector } from "react-redux";
import { handleLoginBtnCliked } from "../store/AuthReducer";

const AuthModel = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const handleClose = (e) => {
    if (e.target.id == "container") {
      dispatch(handleLoginBtnCliked())
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
      <h1 className="text-xl font-semibold text-[#FFDD95] underline">Login</h1>

      <div>
      <div className="flex flex-col m-4 space-y-1">
        <label for="email " className="text-[#FFDD95]">Your Email</label>
        <input type="email" id="email" className="p-1 px-2 border-2 rounded-md "/>
      </div>
      <div className="flex flex-col m-4 space-y-1">
        <label for="password" className="text-[#FFDD95]">Your Password</label>
        <input type="password" id="password" className="p-1 px-2 border rounded-md" />
      </div>
<div className="flex justify-center">
<button className="px-3 py-2 text-lg rounded-lg shadow-md bg-[#FFDD95] text-[#242428]">Submit</button>
</div>
    
    </div>

      </div>
    </div>
  );
};

// const LoginComponent = () => {
//   const handleSubmitLoginIn = () => {};
//   return (
//     <div>
//       <div className="flex flex-col m-4 space-y-5">
//         <label for="email">Your Email</label>
//         <input type="email" id="email" />
//       </div>
//       <div className="flex flex-col m-4 space-y-5">
//         <label for="password">Your Password</label>
//         <input type="password" id="password" />
//       </div>

//       <button className="p-6 text-lg rounded-lg shadow-md">Submit</button>
//     </div>
//   );
// };

// const SignUpComponent = () => {
//   return (
//     <div>
//       <div className="flex flex-col m-4 space-y-5">
//         <label for="name">Your Name</label>
//         <input type="text" id="name" />
//       </div>
//       <div className="flex flex-col m-4 space-y-5">
//         <label for="email">Your Email</label>
//         <input type="email" id="email" />
//       </div>
//       <div className="flex flex-col m-4 space-y-5">
//         <label for="password">Your Password</label>
//         <input type="password" id="password" />
//       </div>
//       <button className="p-6 text-lg rounded-lg shadow-md">Submit</button>
//     </div>
//   );
// };

// export default AuthModel;

//blur-sm flex justify-center items-center
