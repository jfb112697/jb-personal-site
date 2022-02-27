import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SidebarLink(props) {
  let selected = false;
  let urlWords = window.location.href.split("/");
  if (props.url === urlWords[urlWords.length - 1]) {
    selected = true;
  }
  let borderCol = selected ? "border-green-400 " : "";

  useLocation();

  function linkClick() {
    props.visible = false;
  }

  return (
    <Link
      className={
        "hover:border-teal-400 transition-all duration-300 border-solid " +
        borderCol +
        "border-b-2 cursor-pointer align-text-left w-full box-border"
      }
      to={"/" + props.url}
      onClick={linkClick}
    >
      {props.title}
    </Link>
  );
}

export default SidebarLink;
