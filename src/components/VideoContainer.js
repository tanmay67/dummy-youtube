import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { exampleData } from "../utils/constants";
import { addVideos, removeVideos } from "../utils/videosSlice";
import VideoCard, { HocAdVideoCard } from "./VideoCard";
import { v4 as uuid } from "uuid";

const VideoContainer = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const videosData = useSelector((store) => {
    return store.videos;
  });

  const getVideos = async (offsetData) => {
    console.log("triggered");
    try {
      const resp = await fetch(
        `https://randomuser.me/api/?page=${offsetData}&results=10`
      );
      const data = await resp.json();
      console.log(data);

      let info = [];
      for (let i = 0; i <= 10 - 1; i++) {
        info.push(exampleData.items[Math.floor(Math.random() * 50)]);
      }
      dispatch(addVideos(info));
    } catch (error) {
      console.log(error);
    }
  };

  const scrollToBottomFunction = () => {
    const box = document.getElementById("videos_box");
    const scrollTop = box.scrollTop;
    const boxHeight = box.scrollHeight;
    const scrollerHeight = box.offsetHeight;

    if (scrollTop + scrollerHeight >= boxHeight) {
      console.log("triggered");
      if (ref.current === null) ref.current = 1;
      else ref.current = ref.current + 1;
      getVideos(ref.current);
    }
  };

  useEffect(() => {
    ref.current = 1;
    getVideos(1);
    const scroll = document
      .getElementById("videos_box")
      .addEventListener("scroll", scrollToBottomFunction);
    return () => {
      window.removeEventListener("scroll", scroll);
      dispatch(removeVideos());
    };
  }, []);

  return (
    <>
      <div id="videos_box" className="main_container h-full overflow-y-auto">
        <div className="flex flex-wrap justify-evenly">
          {videosData.length !== 0
            ? videosData.map((video) => {
                return (
                  <Link to={`/watch?v=${video.id}`} key={uuid()}>
                    <VideoCard info={video} />
                  </Link>
                );
              })
            : null}
        </div>
        <div className="p-5 m-2 animate-pulse border bg-gray-200 shadow rounded-md">
          <div className="rounded-full bg-gray-400 h-10 w-10"></div>
          <div className="h-1 my-2 bg-gray-400 rounded"></div>
        </div>
        <div className="p-5 m-2 animate-pulse border bg-gray-200 shadow rounded-md">
          <div className="rounded-full bg-gray-400 h-10 w-10"></div>
          <div className="h-1 my-2 bg-gray-400 rounded"></div>
        </div>
        <div className="p-5 m-2 animate-pulse border bg-gray-200 shadow rounded-md">
          <div className="rounded-full bg-gray-400 h-10 w-10"></div>
          <div className="h-1 my-2 bg-gray-400 rounded"></div>
        </div>
        <div className="p-5 m-2 animate-pulse border bg-gray-200 shadow rounded-md">
          <div className="rounded-full bg-gray-400 h-10 w-10"></div>
          <div className="h-1 my-2 bg-gray-400 rounded"></div>
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
