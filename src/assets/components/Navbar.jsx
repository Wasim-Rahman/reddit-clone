import React from "react";
import logo from "../media/reddit-seeklogo.com.svg";
import { TfiSearch } from "react-icons/tfi";

function Navbar() {
  return (
    <div className="px-4 py-2 flex items-center bg-white">
      {/* logo */}
      <div>
        <img className="max-h-10" src={logo} alt="" />
      </div>

      {/* dropdown */}
      <div className="p-4">
        <select className="border-[1px] border-black" name="subreddit" id="subreddit">
          <option value="popular">Popular</option>
          <option value="/r/announcements">/r/announcements</option>
          <option value="/r/AskReddit">/r/AskReddit</option>
          <option value="/r/aww">/r/aww</option>
          <option value="/r/Music">/r/Music</option>
          <option value="/r/pics">/r/pics</option>
        </select>
      </div>

      {/* search */}
      <div className="bg-gray-100 flex items-center rounded-full p-2 w-[400px] ">
        <TfiSearch size={20} className="" />
        <input
          className="bg-transparent px-2 focus:outline-none"
          type="text"
          name=""
          id=""
          placeholder="Search Reddit"
        />
      </div>
    </div>
  );
}

export default Navbar;
