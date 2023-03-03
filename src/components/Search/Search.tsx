import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.scss";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/search/" + input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler} action="" className="Search">
      <div className="Search__wrapper">
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="Search__input"
          value={input}
        />
      </div>
    </form>
  );
}

export default Search;
