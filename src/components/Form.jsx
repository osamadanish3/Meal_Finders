import SearchButton from "./SearchButton";
import { useContext, useState } from "react";
import MealFinderContext from "../contexts/MealFinderContext";


function Form() {
    const MealFinderContextValues = useContext(MealFinderContext);
    let [userInput, setUserInput] = useState("");
    return (
    <>
        <div >
            <input type={"text"} 
            id = "inputText" 
            placeholder = "Search for meals or keywords" 
            onChange = {(event) => {
                setUserInput(event.target.value);
                //MealFinderContextValues.setText(event.target.value);
            }}
            style = {{
                
                border: "2px solid green",
                paddingTop: "6px",
                paddingBottom: "6px",
                paddingLeft: "70px",
                paddingRight: "70px",
                boxSizing: "border-box"
            }}
            />
            <SearchButton userInput = {userInput}/>
        </div>  
    </>
    );
}

export default Form;