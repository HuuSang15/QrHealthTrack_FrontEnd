import React, { useState } from "react";
import "./account.css";

const Account = () => {
   
    const [searchTerm, setSearchTerm] = useState("");

    // Sample user data
    const users = [
        {
            id: 26211100093,
            name: "John Doe",
            email: "john@example.com",
            address: "123 Main St",
            majors: "Computer Science",
            role: "Student",
        },
        {
            id: 26211100093,
            name: "Jane Smith",
            email: "jane@example.com",
            address: "456 Oak St",
            majors: "Mathematics",
            role: "Admin",
        },
        // Add more users as needed
    ];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter users based on the search term
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(parseInt(event.target.value, 10));
    };

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
                        <div className="list-name">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container_left" style={{ fontWeight: "bold" }}>
                    <div
                        style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            color: "#4A85F6",
                            textTransform: "uppercase",
                        }}
                    >
                        Management Account
                    </div>
                    {/* Search Bar */}
                    <div className="search-bar-left">
                        <input className="search-bar-left-input" style={{marginLeft:"38.4rem"}}
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </div>
            <div className="List">
                <div className="listUsers">
                    <h2>List Users</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Majors</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.majors}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className="edit">Edit</button>
                                        <button className="delete">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="footer"> 
               
            </div>
        </div>
    );
};

export default Account;
