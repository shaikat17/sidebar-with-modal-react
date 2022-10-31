import React from "react";
import logo from "../../logo.png";
import { FaTimes } from "react-icons/fa";
import { links, social } from "../../data";

const Sidebar = () => {
  return (
    <aside className={`sidebar`}>
    <div className="sidebar-header">
      <img src={logo} alt="logo" className="logo" />
      <button className="close-btn">
        <FaTimes />
      </button>
      </div>
      <ul className="links">
      {links.map((link) => {
        const {id, url, text, icon} = link;
        return (
          <li key={id}>
          <a href={url}>{icon} {text}</a></li>
        )
      })}
      </ul>
      <ul className="social-icons">
      {social.map((link) => {
        const {id, url, icon} = link;
        return (
          <li key={id}>
          <a href={url}>{icon}</a></li>
        )
      })}
      </ul>
    </aside>
  );
};

export default Sidebar;
