import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: "abcd" + 1,
    name: "Testing Bot",
    text: "lorem ipsum text dummy text",
    replies: [],
  },
  {
    id: uuidv4(),
    name: "Testing Bot",
    text: "lorem ipsum text dummy text",
    replies: [
      {
        id: uuidv4(),
        name: "Testing Bot",
        text: "lorem ipsum text dummy text",
        replies: [
          {
            id: "efgh",
            name: "Testing Bot",
            text: "lorem ipsum text dummy text",
            replies: [
              {
                id: uuidv4(),
                name: "Testing Bot",
                text: "lorem ipsum text dummy text",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Testing Bot",
    text: "lorem ipsum text dummy text",
    replies: [
      {
        id: uuidv4(),
        name: "Testing Bot",
        text: "lorem ipsum text dummy text",
        replies: [],
      },
      {
        id: uuidv4(),
        name: "Testing Bot",
        text: "lorem ipsum text dummy text",
        replies: [],
      },
    ],
  },
];

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    addComment: (state, action) => {
      function findNodeById(nodes, id, reply) {
        function findNode(nodes, id) {
          for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].id === id) {
              nodes[i].replies.unshift({
                id: uuidv4(),
                name: "tanmay agarwal",
                text: reply,
                replies: [],
              });
              break;
            }
            if (nodes[i].replies) {
              findNode(nodes[i].replies, id);
            }
          }
        }

        findNode(nodes, id);
      }
      findNodeById(state, action.payload.id, action.payload.reply);
    },
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
