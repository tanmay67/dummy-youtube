import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { hideMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(hideMenu());
  }, []);

  return (
    <div className="p-4 w-full h-full overflow-y-auto">
      <div className="h-full watch_container">
        <div className="grid grid-flow-row md:grid-flow-col">
          <div className="col-span-12 lg:col-span-9 h-[35rem]">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${searchParams.get(
                "v"
              )}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-span-12 lg:col-span-3 h-full sm:py-2 md:py-0 md:px-2">
            <LiveChat />
          </div>
        </div>
        {/* Comments section */}
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
