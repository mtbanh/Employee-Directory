import React, { useContext } from "react";
import "./dataBody.css";
import DataAreaContext from "../../utils/DataAreaContext";

const DataBody = () => {
    const context = useContext(DataAreaContext);

    const formatDate = date => {
        const dateArr = date.split("-");
        const year = dateArr[0];
        const month = dateArr[1];
        const dayArr = dateArr[2].split("T");
        const day = dayArr[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
    };

    return (
        <tbody>
            {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ?
                (context.developerState.filteredUsers.map(({ login, firstname, lastname, image, phone, email, dob }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="Image" className="align-middle">
                                <img src={image}
                                    alt={"profile image for" + name.first + " " + name.last}
                                    className="img-responsive" />
                            </td>

                            <td data-th="Name" className="name-cell align-middle">
                                {firstname} {lastname}
                            </td>

                            <td data-th="Phone" className="align-middle">
                                {phone}
                            </td>

                            <td data-th="Email" className=" align-middle">
                                <a href={"mailto:" + email} target="_blank">
                                    {email}
                                </a>
                            </td>

                            <td data-th="DOB" className=" align-middle">
                                {formatDate(dob.date)}
                            </td>
                        </tr>
                    );
                })
                ) : (
                    <></>
                )}
        </tbody>
    )
}

export default DataBody;