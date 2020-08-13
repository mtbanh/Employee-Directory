import React, { useContext } from "react";
import "./searchName.css";
import DataAreaContext from "../../utils/DataAreaContext";

const searchName = ()=>{
    const context = useContext(DataAreaContext);
    return (
        <div className="searchbox">
            <form className="form-inline">
                <input 
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={e => context.handleSearchChange(e)} />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}

export default searchName;