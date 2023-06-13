import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const navigate = useNavigate();
  const searchCache = useSelector((store) => {
    return store.search;
  });
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const toggleMenyHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggesstionsApi = async () => {
    try {
      const resp = await fetch(
        `https://youtube-keyword-search.p.rapidapi.com/?q=${searchQuery}&hl=en&gl=in`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
            "X-RapidAPI-Host": process.env.REACT_APP_RAPID_HOST,
          },
        }
      );
      const data = await resp.json();
      console.log(data);
      setSuggestions(data);
      dispatch(
        cacheResults({
          [searchQuery]: data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else getSearchSuggesstionsApi();
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-5 shadow-lg h-20">
      {/* first section */}
      <div className="flex col-span-1 items-start">
        <div
          class="space-y-1 head_image_adjustment h-8 cursor-pointer"
          onClick={toggleMenyHandler}
        >
          <div class="w-6 h-0.5 bg-gray-600"></div>
          <div class="w-6 h-0.5 bg-gray-600"></div>
          <div class="w-6 h-0.5 bg-gray-600"></div>
        </div>
        <a href="/">
          <img
            className="h-10 mx-2"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="logo"
          />
        </a>
      </div>
      {/* second section */}
      <div className="col-span-10 flex flex-col justify-center">
        <div className="search_container hidden md:flex justify-center  ">
          <input
            type="text"
            className="w-full border border-gray-400 outline-none p-2 rounded-l-full px-5"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() =>
              setTimeout(() => {
                setShowSuggestions(false);
              }, 200)
            }
          />
          <button
            className="border border-gray-400 p-2 rounded-r-full bg-gray-100"
            onClick={() => {
              navigate({
                pathname: "/search",
                search: createSearchParams({
                  name: searchQuery,
                }).toString(),
              });
            }}
          >
            <img
              className="h-4 px-1"
              src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png"
              alt="search"
            />
          </button>
        </div>
        {showSuggestions && suggestions.length !== 0 ? (
          <div className="suggestions_container shadow-lg shadow-gray-400 rounded-xl border-gray-100 overflow-hidden">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="px-5 py-2 flex justify-start items-center gap-4 hover:bg-gray-100 hover:cursor-pointer"
                  onClick={() => {
                    setSearchQuery(suggestion);
                    navigate({
                      pathname: "/search",
                      search: createSearchParams({
                        name: suggestion,
                      }).toString(),
                    });
                  }}
                >
                  <img
                    className="h-4 px-1"
                    src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png"
                    alt="search"
                  />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      {/* third section */}
      <div className="col-span-1 flex justify-center items-start">
        <img
          className="head_avatar_adjustment h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
