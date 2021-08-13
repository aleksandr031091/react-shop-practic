import React, { Component } from "react";
import { useEffect } from "react";
import { ModalContainer } from "./ModalStyled";

const Modal = () => {
  useEffect(() => {
    window.addEventListener("keydown", this.handleEsc);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", this.handleEsc);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const handleEsc = (e) => e.code === "Escape" && this.props.handleCloseModal();

  const handleClick = (e) =>
    e.target === e.currentTarget && this.props.handleCloseModal();

  return (
    <ModalContainer onClick={handleClick}>
      <div className="modal">{this.props.children}</div>
    </ModalContainer>
  );
};

export default Modal;
