import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../utils/commentsSlice";

const Comment = ({ data }) => {
  const dispatch = useDispatch();
  const { name, text } = data;
  const [addReply, setAddReply] = useState("");

  const submit = () => {
    console.log(addReply, data.id);
    dispatch(addComment({ id: data.id, reply: addReply }));
    setAddReply("");
  };

  return (
    <div
      className="flex shadow-sm bg-gray-100 p-2 m-2 rounded-lg overflow-x-auto"
      style={{ fontSize: "0.8rem" }}
    >
      <img
        className="w-12 h-12"
        src={"https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"}
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        <div className="flex">
          <input
            type="text"
            placeholder="reply..."
            value={addReply}
            onChange={(e) => setAddReply(e.target.value)}
          />
          <button onClick={submit}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
