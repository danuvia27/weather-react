import React from "react";

export default function Search() {
  return (
    <div>
      <form>
        <input
          class="form-control"
          list="datalistOptions"
          id="search-text-input"
          placeholder="Search Weather..."
        />

        <button type="submit" className="btn btn-primary search-button">
          Search
        </button>
      </form>
    </div>
  );
}
