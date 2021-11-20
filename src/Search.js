import React from "react";

export default function Search() {
  return (
    <div className="Search-Engine">
      <form>
        <input className="form-control" placeholder="Search Weather..." />

        <button className="btn btn-primary search-button"> Search</button>
      </form>
    </div>
  );
}
