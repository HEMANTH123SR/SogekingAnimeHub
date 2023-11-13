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
  const apiKey=import.meta.env.VITE_TINY_MCI_API_KEY;
  const editorRef = useRef(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [postEditorData, setPostEditorData] = useState("");
  const [summary, setSummary] = useState("");
  const postSumbitHanlder = () => {
    if (title.length < 5) {
      setError(true);
      setErrorMessage("Title need to have more then 5 charcters");
      return;
    }
    if (!image) {
      setError(true);
      setErrorMessage("Image is required");
    }
    if (!editorRef.current) {
      setError(true);
      setErrorMessage("Problem with Text Editor");
      return;
    }
    setPostEditorData(editorRef.current.getContent());
    if (summary.length < 300) {
      setError(true);
      setErrorMessage(
        "Summary is required and should contain more then 300 charcters"
      );
    }
    console.log("title \n", title);
    console.log("image \n", image);
    console.log("text editor text \n", postEditorData);
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
        <div className="flex flex-col space-y-3  w-full ">
          <label
            htmlFor="summary"
            className="text-xl font-semibold text-[#FFDD95]"
          >
            Summary
          </label>
         
          <textarea
          id="summary"
          placeholder="summary of your blog"
            className=" p-3 rounded-md"
            style={{ border: "2px solid #FFDD95", height: 150 }}
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
          ></textarea>
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
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div>
          <Editor
            apiKey={apiKey}
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
                "body { font-family:Helvetica,Arial,sans-serif; font-size:15px }",
            }}
          />
        </div>
        <div className="flex w-full justify-center">
          <button
            className="px-12 py-3 rounded-sm font-bold text-xl bg-[#FFDD95]"
            onClick={postSumbitHanlder}
          >
            Upload
          </button>
        </div>
        <div className="mt-96"></div>
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
