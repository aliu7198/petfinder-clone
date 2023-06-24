import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './SavedSearchesPage.css';

function SearchCard({search}) {
    const history = useHistory()
    // const dispatch = useDispatch();
    // const savedSearches = useSelector(state => state.searches.allSearches);

    // useEffect(() => {
    //     dispatch(getSearchesThunk());
    // }, [dispatch])

    const launchSearch = () => {
        history.push(`/search/${search.id}`)
    }

    return (
        <>
            <div className="search-card__wrapper">
                <h3 className="search-card__title">{search.title}</h3>
                <button className="search-card__launch" onClick={launchSearch}>Launch Search</button>
                <div>
                    <button><i className="fas fa-pen"></i></button>
                    <button><i className="fas fa-trash"></i></button>
                </div>
            </div>
        </>
    )
}

export default SearchCard;
