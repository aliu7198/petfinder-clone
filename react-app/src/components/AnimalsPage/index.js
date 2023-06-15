import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimalsThunk } from "../../store/animals";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./AnimalsPage.css";
import AnimalCard from "./AnimalCard";
// import SearchFiltersBar from "../SearchFiltersBar";

function AnimalsPage() {
  const dispatch = useDispatch();
  // const { searchId } = useParams();
  const animals = useSelector((state) => state.animals.allAnimals);
  const animalsArr = Object.values(animals);
  // const numAnimals = animalsArr.length;

  useEffect(() => {
    dispatch(getAnimalsThunk());
  }, [dispatch]);

  // const queryParams = new URLSearchParams().toString();
  // console.log("🚀 ~ file: index.js:21 ~ AnimalsPage ~ queryParams:", queryParams)

  return (
    <>
      <div className="animals-page__outer">
        {/* <SearchFiltersBar /> */}
        <div className="animals-page__wrapper">
          {animalsArr.map((animal) => (
            <AnimalCard animal={animal} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AnimalsPage;
