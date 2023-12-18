import "headerAdmin.css"
import React from 'react'
const HeaderAdmin = () => {
  return (
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
  )
}

export default HeaderAdmin