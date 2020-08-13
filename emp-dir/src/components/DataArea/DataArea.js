import React, {useState, useEffect} from "react";
import DataTable from "../DataTable";
import Nav from "../NavBar";
import API from "../../utils/API";
import DataAreaContext from "../../utils/DataAreaContext";

const DataArea = ()=>{
    const [developerState, setDeveloperState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
            {name: "Image", width: "10%",},
            {name: "Name", width: "10%",},
            {name: "Phone", width: "10%",},
            {name: "Email", width: "10%",},
            {name: "DOB", width: "10%",}
        ]
    })

    const handleSort =()=>{

    }

    return(
        <DataAreaContext.Provider value ={{developerState, handleSearchChange, handleSort}}>
            <Nav />
            <div className="data-area">
                {developerState.filteredUsers.length>0 ? <DataTable /> : <div></div>}

            </div>
        </DataAreaContext.Provider>
    );
    
}


export default DataArea;