import React, { useState } from "react";

import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faFlask,
    faChartLine,
    faFileInvoice,
    faDisplay,
} from "@fortawesome/free-solid-svg-icons";
import PieChart from "./bieudo/PieChart ";
import ColumnChart from './bieudo/ColumnChart';

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState(""); // Define searchTerm state
    const [users, setUsers] = useState([]); // Assuming users is the array you want to filter

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Assuming you have a 'users' state that needs to be filtered
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [itemsPerPage, setItemsPerPage] = useState(10);

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(parseInt(event.target.value, 10));
    };

    return (
        <div className="warpper">
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
                {/* Search Bar */}
                <div className="search-bar">
                    <input
                        className="dashboard-input"
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="dashboard-right">
                    <div className="Dashboard-info">
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
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="Total-Account-Number">
                    <div className="Total-Account-Number_icon">
                        <FontAwesomeIcon
                            icon={faUsers}
                            bounce
                            style={{
                                color: "#9638FA",
                                marginTop: "5px",
                                height: "25px",
                                width: "30px",
                            }}
                        />
                    </div>
                    <div
                        className="Total-Account-Number-content"
                        style={{
                            marginTop: "5px",
                            fontSize: "20px",
                            fontWeight: "500",
                        }}
                    >
                        <h3>Total Account Number</h3>
                    </div>
                    <div
                        className="Total-Account-Number-number"
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                        <span>2.5000</span>
                    </div>
                    <div
                        className="Total-Account-Number-ts"
                        style={{ color: "#4A85F6" }}
                    >
                        +8% compared to yesterday
                    </div>
                </div>
                <div className="Total-Blood-Types">
                    <div className="Total-Blood-Types_icon">
                        <FontAwesomeIcon
                            icon={faFlask}
                            bounce
                            style={{
                                color: "#F41A1A",
                                marginTop: "5px",
                                height: "25px",
                                width: "30px",
                            }}
                        />
                    </div>
                    <div
                        className="Total-Blood-Types-content"
                        style={{
                            marginTop: "5px",
                            fontSize: "20px",
                            fontWeight: "500",
                        }}
                    >
                        <h3>Total Blood Types</h3>
                    </div>
                    <div
                        className="Total-Blood-Types-number"
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                        <span>100</span>
                    </div>
                    <div
                        className="Total-Blood-Types-ts"
                        style={{ color: "#4A85F6" }}
                    >
                        +5% compared to yesterday
                    </div>
                </div>
                <div className="Total-Exercise-and-Diet">
                    <div className="Total-Exercise-and-Diet_icon">
                        <FontAwesomeIcon
                            icon={faChartLine}
                            bounce
                            style={{
                                color: "#33363F",
                                marginTop: "5px",
                                height: "25px",
                                width: "30px",
                            }}
                        />
                    </div>
                    <div
                        className="Total-Exercise-and-Diet-content"
                        style={{
                            marginTop: "5px",
                            fontSize: "20px",
                            fontWeight: "500",
                        }}
                    >
                        <h3>Total-Exercise-and-Diet</h3>
                    </div>
                    <div
                        className="Total-Exercise-and-Diet-number"
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                        <span>20</span>
                    </div>
                    <div
                        className="Total-Exercise-and-Diet-ts"
                        style={{ color: "#4A85F6" }}
                    >
                        +1% compared to yesterday
                    </div>
                </div>
                <div className="Total-Number-of-Events">
                    <div className="Total-Number-of-Events_icon">
                        <FontAwesomeIcon
                            icon={faFileInvoice}
                            bounce
                            style={{
                                color: "#FF947A",
                                marginTop: "5px",
                                height: "25px",
                                width: "30px",
                            }}
                        />
                    </div>
                    <div
                        className="Total-Number-of-Events-content"
                        style={{
                            marginTop: "5px",
                            fontSize: "20px",
                            fontWeight: "500",
                        }}
                    >
                        <h3>Total Number of Events </h3>
                    </div>
                    <div
                        className="Total-Number-of-Events-number"
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                        <span>10</span>
                    </div>
                    <div
                        className="Total-Number-of-Events-ts"
                        style={{ color: "#4A85F6" }}
                    >
                        +1.5% compared to yesterday
                    </div>
                </div>
            </div>
            <div className="Chart-Doughnut">
                <div className="Chart-Doughnut-A" style={{}}>
                    <PieChart />
                    <div className="AZZ">
                        <div style={{ color: "#333" }}>
                            <div style={{ display: "flex" }}>
                                <div
                                    style={{ display: "flex", width: "150px" }}
                                >
                                    <div style={{width:"110px",fontWeight: "700",color: "#0D62FF",}}>Nhóm Máu O
                                    </div>
                                </div>
                                <div style={{display: "flex",width: "150px",}}>
                                    <div style={{width:"150px",fontWeight: "700",color: "#C8C8C8",}}>Nhóm Máu A</div>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div
                                    style={{ display: "flex", width: "100px" }}><div style={{fontWeight: "700", color: "#8400D5",}}>Nhóm Máu B</div>
                                </div>
                                <div
                                    style={{ marginLeft: "21px", display: "flex",width: "150px",}}>
                                    <div
                                        style={{width:"150px", fontWeight: "700",color: "#1AF430",}}>Nhóm Máu AB
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>  
                <div className="Chart-Doughnut-B">
                <ColumnChart />
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;
