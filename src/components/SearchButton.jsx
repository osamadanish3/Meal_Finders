import { useContext } from "react";
import MealFinderContext from "../contexts/MealFinderContext";
import { BsSearch } from "react-icons/bs";

function SearchButton({userInput}) {
  const MealFinderContextValues = useContext(MealFinderContext);
  return (
    <button
    onClick={() => {
        MealFinderContextValues.setSelectedFoodName("");
        console.log(userInput);
        MealFinderContextValues.setText(userInput);
        if(userInput === "") {
            alert("Please enter a search term");
        }
        else {
            MealFinderContextValues.setSearchMode(1);
            MealFinderContextValues.setShuffleMode(0);
        }
    }}
    style = {{height: "1.9rem", boxSizing: "border-box"}}
    ><BsSearch /></button>
  );
}

export default SearchButton;