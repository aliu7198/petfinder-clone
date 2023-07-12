import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./SavedSearchesPage.css";

function SearchCard({ search }) {
  const history = useHistory();

  const launchSearch = () => {
    let queryParams = "/animals?";
    let isFirstQueryParam = true;
    for (const [key, val] of Object.entries(search)) {
      if (key !== "id" && key !== "title" && key !== "userId" && val) {
        if (isFirstQueryParam) {
          queryParams += `${encodeURIComponent(key)}=${encodeURIComponent(
            val
          )}`;
          isFirstQueryParam = false;
        } else {
          queryParams += `&${encodeURIComponent(key)}=${encodeURIComponent(
            val
          )}`;
        }
      }
    }
    history.push(queryParams);
  };

  return (
    <>
      <div className="search-card__wrapper">
        <h3 className="search-card__title">{search.title}</h3>
        <button className="search-card__launch" onClick={launchSearch}>
          Launch Search
        </button>
        <div>
          <button>
            <i className="fas fa-pen"></i>
          </button>
          <button>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchCard;
