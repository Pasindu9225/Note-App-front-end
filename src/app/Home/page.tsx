"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import NoteCard from "../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState<{
    isShown: boolean;
    type: string;
    Date?: string;
  }>({
    isShown: false,
    type: "add",
  });

  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  const handlePinNote = () => {
    console.log("Pin clicked");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Note 1"
            date="2022-01-01"
            content="This is my first note"
            tags={["tag1", "tag2"]}
            onPinNote={handlePinNote}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isPinned={false}
          />
        </div>
      </div>

      <button
        onClick={() =>
          setOpenAddEditModal({ isShown: true, type: "add", Date: "null" })
        }
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() =>
          setOpenAddEditModal({ ...openAddEditModal, isShown: false })
        }
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
        contentLabel=""
        className=" w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteDate={openAddEditModal.Date}
          onClose={() =>
            setOpenAddEditModal({ isShown: false, type: "add", Date: "" })
          }
        />
      </Modal>
    </>
  );
};

export default Home;
