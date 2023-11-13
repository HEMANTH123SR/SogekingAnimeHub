import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import ShareComponent from "../../components/ShareComponent";

export default function CreateBlog() {
  return (
    <div>
      <NavBar />
      <ShareComponent />
      <TextEditor />
    </div>
  );
}

const TextEditor = () => {
  const editorRef = useRef(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [postEditorData, setPostEditorData] = useState("");
  const postSumbitHanlder = () => {
    if (title.length < 5) {
      setError(true);
      setErrorMessage("Title need to have more then 5 charcters");
      return;
    }
    if (!editorRef.current) {
      setError(true);
      setErrorMessage("Problem with Text Editor");
      return;
    }
    setPostEditorData(editorRef.current.getContent());
    if (postEditorData.length < 300) {
      setError(true);
      setErrorMessage("does not have a minum content inside text editor");
    }
    console.log("your title \n", title);
    console.log("your text editor data \n", postEditorData);
  };

  return (
    <div className="w-full flex justify-center bg-[#242428]">
      <div className="flex flex-col space-y-12  items-center ">
        <div>
          {error ? (
            <div className="flex justify-center">
              <p className="font-semibold text-red-600 text-lg">
                {errorMessage}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col space-y-3  w-full ">
          <label
            htmlFor="title"
            className="text-xl font-semibold text-[#FFDD95]"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="your title goes here"
            className=" p-3 rounded-md"
            style={{ border: "2px solid #FFDD95" }}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col space-y-3 w-full">
          <label
            htmlFor="uploadImage"
            className="text-xl font-semibold text-[#FFDD95]"
          >
            Upload Image
          </label>
          <input
            id="uploadImage"
            type="file"
            className=" p-3 rounded-md text-white"
            style={{ border: "2px solid #FFDD95" }}
          />
        </div>
        <div>
          <Editor
            apiKey="cuq11fucd0tlj44bauz2vzw4cbbxgvlnqo204qjcac2s8pj2"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:22px }",
            }}
          />
        </div>
        
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="bg-[#242428] shadow-lg py-8">
      <div className="w-full flex justify-center ">
        <h1 className="text-2xl text-[#FFDD95] font-semibold">Sogeking.Blog</h1>
      </div>
    </div>
  );
};
