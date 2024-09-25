import React from "react";
import TopBanner from "../components/TopBanner";
import Footer from "../components/Footer";
import Main from "../components/Main";

const ChatBox = () => {
  return (
    <div className="rounded-xl h-screen flex flex-col">
      <TopBanner />
      <Main className="flex-grow" />
      <Footer />
    </div>
  );
};

export default ChatBox;
