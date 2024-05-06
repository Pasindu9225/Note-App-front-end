import React, { useState } from "react";
import TagInput from "../components/input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ onClose, type, noteDate }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [error, seterror] = useState("");

  const addNewNote = async () => {};
  const editNote = async () => {};

  const handleAddNote = () => {
    if (!title) {
      seterror("Pleace enter the title");
      return;
    }

    if (!content) {
      seterror("pleace enter the Title");
      return;
    }

    seterror("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className=" relative overflow=x-hidden">
      <button
        onClick={onClose}
        className=" w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
      >
        <MdClose className=" text-xl flex-col gap-2" />
      </button>
      <div className=" flex flex-col gap-2">
        <label className="input-lable">Title</label>
        <input
          type="text"
          className=" text-2xl text-slate-950 outline-none"
          placeholder=" go to Home "
          value={title}
          onChange={({ target }: any) => setTitle(target.value)}
        />
      </div>

      <div className=" flex flex-col gap-2 mt-4">
        <label className="input-lable">Content</label>
        <textarea
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded-sm"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={({ target }: any) => setContent(target.value)}
        />
      </div>
      <div className=" mt-4">
        <label className="input-lable">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-xs pt-4 text-red-500">{error}</p>}

      <button
        onClick={handleAddNote}
        className="btn-primary font-medium mt-5 p-3"
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
