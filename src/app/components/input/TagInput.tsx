import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }: any) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove: any) => {
    setTags(tags.filter((tag: any) => tag !== tagToRemove));
  };

  return (
    <div className="">
      {tags?.length > 0 && (
        <div className=" flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag: any, index: any) => (
            <span
              key={index}
              className="flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded"
            >
              {tag}
              <button
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              >
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className=" flex items-center gap-4 mt-3">
        <input
          type="text"
          value={inputValue}
          placeholder="Add tags"
          className=" text-sm bg-transparent border px-3 py-2 rounded outline-none"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={() => {
            addNewTag();
          }}
          className=" w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700"
        >
          <MdAdd className="text-2xl text-blue-700 hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
