
"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import Modal from "./Modal";

export function Button () {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="flex items-center gap-4 font-bold border-2 py-2 px-3 rounded-xl hover:text-roxo-600 duration-300"
        onClick={handleOpenModal}
      >
        <GiHamburgerMenu size={32} /> MENU
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

