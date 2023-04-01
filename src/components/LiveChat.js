import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, clearMessages } from "../utils/chatSlice";
import { nameList } from "../utils/constants";
import ChatMessage from "./ChatMessage";

function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

function makeRandomMessage(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => {
    return store.chat.messages;
  });
  const [customMessage, setCustomMessage] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(15),
        })
      );
    }, 1500);

    return () => {
      clearInterval(timer);
      dispatch(clearMessages());
    };
  }, []);

  const keyDownFunction = (e) => {
    if (e.key === "Enter") {
      dispatch(
        addMessage({
          name: "Tanmay Agarwal",
          message: e.target.value,
        })
      );
      setCustomMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full rounded-lg p-2 border border-black bg-slate-100">
      <div className="h-[32rem]  overflow-y-auto flex flex-col-reverse">
        {chatMessages.length !== 0
          ? chatMessages.map((message) => (
              <ChatMessage
                id={message.id}
                name={message.name}
                message={message.message}
              />
            ))
          : null}
      </div>
      <input
        type="text"
        className="shadow-md p-1 rounded-lg outline-none"
        placeholder="enter message"
        value={customMessage}
        onChange={(e) => {
          setCustomMessage(e.target.value);
        }}
        onKeyDown={keyDownFunction}
      />
    </div>
  );
};

export default LiveChat;
