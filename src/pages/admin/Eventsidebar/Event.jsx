import "./event.css";
import React, { useState } from "react";

const Event = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page

    // Sample user data
    const users = [
        {
            EventName: "Birthday Party",
            StartDateTime: "2023-11-20T18:00:00",
            EndDateTime: "2023-11-20T22:00:00",
            address: "123 Main Street, Cityville",
            EventDescription: "Join us for a celebration!",
            Action: "RSVP",
        },
        {
            EventName: "Conference",
            StartDateTime: "2023-12-05T09:00:00",
            EndDateTime: "2023-12-07T17:00:00",
            address: "Conference Center, Downtown",
            EventDescription: "An annual industry conference.",
            Action: "Register",
        },
        {
            EventName: "Community Cleanup",
            StartDateTime: "2023-11-25T10:00:00",
            EndDateTime: "2023-11-25T14:00:00",
            address: "City Park",
            EventDescription: "Help us clean up the community!",
            Action: "Volunteer",
        },
    ];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(parseInt(event.target.value, 10));
    };

    const handleEdit = (eventName) => {
        // Implement logic to handle edit action for the given event
        console.log(`Editing event: ${eventName}`);
    };

    const handleDelete = (eventName) => {
        // Implement logic to handle delete action for the given event
        console.log(`Deleting event: ${eventName}`);
    };

    const filteredUsers = users.filter((user) =>
        user.EventName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="wapper" style={{ height: "100%" }}>
            <div className="header">
                <div className="left">
                    <div
                        style={{
                            width: "150px",
                            fontSize: "20px",
                            fontWeight: "bold",
                        }}
                    >
                        Hello, Hoang
                    </div>
                    <div style={{ fontSize: "14px" }}>Have a nice day</div>
                </div>
                <div className="right">
                    <div className="account-info">
                        <div className="avatar">
                            <div>
                                <img
                                    className="avtatar-img"
                                    src="./img/avata1.jpg"
                                    alt=""
                                    style={{
                                        borderRadius: "50%",
                                        width: "40px",
                                        height: "40px",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="account-name">
                            <h3>Quốc Hoàng</h3>
                            <h6 className="admin">admin</h6>
                        </div>
                        <div className="list-name"></div>
                    </div>
                </div>
            </div>

            <div className="container-event">
                <div className="container_left" style={{ fontWeight: "bold" }}>
                    <div
                        style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            color: "#4A85F6",
                            textTransform: "uppercase",
                        }}
                    >
                        ALL EVENT
                    </div>
                </div>

                <div className="container_bottom">
                    
                        <div className="search-bar-left">
                            <input
                                className="search-bar-left-input"
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                        <div className="button_new_Event">
                            <button
                                className="container_bottom_NewEvent"
                                style={{ fontSize:"14px",backgroundColor: "#4A85F6", fontWeight:"600" }}
                            > 
                                ADD Event +
                            </button>
                        </div>
                    </div>
                
            </div>

            {/* List Section */}
            <div className="List">
                <div className="listUsers">
                    <table>
                        <thead>
                            <tr>
                                <th>Event Name</th>
                                <th>Start Date/Time</th>
                                <th>End Date/Time</th>
                                <th>Address</th>
                                <th>Event Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.EventName}>
                                    <td>{user.StartDateTime}</td>
                                    <td>{user.EndDateTime}</td>
                                    <td>{user.address}</td>
                                    <td>{user.EventDescription}</td>
                                    <td>{user.Action}</td>
                                    <td>
                                        <button
                                            className="edit"
                                            onClick={() =>
                                                handleEdit(user.EventName)
                                            }
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="delete"
                                            onClick={() =>
                                                handleDelete(user.EventName)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Event;
