import React, { useEffect, useState } from "react";
import API from "../services/controller";
import Chatbox from "../components/Chatbox/chatbox";
const Chat = () => {
  return (
    <div className="chat">
      <div className="contactbox">
        <header>
          <p>Messages</p>
          <div className="dropdownmenu">...</div>
        </header>
        <section className="contacts"></section>
        <section className="footer">
          <div className="settings">Settings</div>
          <div className="addcontact">Add Contact</div>
        </section>
      </div>
      {/* <Chatbox /> */}
      <div className="chatbox">
        <header className="contact">Luc van Kerkvoort</header>
        <section className="chatscreen"></section>
        <section className="composer"></section>
      </div>
    </div>
  );
};
export default Chat;
