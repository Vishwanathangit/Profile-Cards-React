import React from "react"
import ReactDom from "react-dom/client"
import "./style.css"
import profile from "./assests/images/profile.jpg"
import profile2 from "./assests/images/profile2.jpg"
import profile3 from "./assests/images/profile3.jpg"
import profile4 from "./assests/images/profile4.jpg"
import profile5 from "./assests/images/profile5.jpg"
import profile6 from "./assests/images/profile6.jpg"
import star from "./assests/images/star.png"
import search from "./assests/images/search.png"

const root = ReactDom.createRoot(document.getElementById("root"));

function ProfileCard(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px",
            backgroundColor: "white",
            borderRadius: "10px",
            marginBottom: "10px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src={props.photo} style={{ width: "45px", height: "45px", borderRadius: "50%" }} alt="profile" />
                <div>
                    <p style={{ margin: 0, fontWeight: "bold", fontSize: "14px" }}>{props.name}</p>
                    <p style={{ margin: 0, fontSize: "12px", color: "#555" }}>{props.desc}</p>
                </div>
            </div>
            <div style={{ textAlign: "right" }}>
                <p style={{ margin: "0 0 4px 0", fontSize: "10px", color: "#999" }}>{props.time}</p>
                <img src={props.stars} style={{ width: "16px" }} alt="star" />
            </div>
        </div>
    )
}

function App() {
    const ProfileCards = [
        {
            photo: profile,
            name: "Jessica Koel",
            desc: "Hey, Joel, I here to help you out please...",
            time: "11.26",
            stars: star
        },
        {
            photo: profile2,
            name: "Komeial Bolger",
            desc: "I will send you all documents as soon a...",
            time: "12.26",
            stars: star
        },
        {
            photo: profile3,
            name: "Chris Evans",
            desc: "Let's finalize the report by today.",
            time: "01.10",
            stars: star
        },
        {
            photo: profile4,
            name: "Emily Smith",
            desc: "Thanks for your feedback!",
            time: "09.30",
            stars: star
        },
        {
            photo: profile5,
            name: "Daniel Craig",
            desc: "Please update the client.",
            time: "08.45",
            stars: star
        },
        {
            photo: profile6,
            name: "Sophia Lee",
            desc: "I’m working on it right now.",
            time: "Yesterday",
            stars: star
        }
    ]

    return (
        <div style={{
            backgroundColor: "white",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            paddingTop: "50px"
        }}>
            <div style={{
                backgroundColor: "#F0F4F3",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                width: "650px"
            }}>
                {/* Search Bar */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    marginBottom: "20px"
                }}>
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{
                            border: "none",
                            outline: "none",
                            backgroundColor: "transparent",
                            fontSize: "14px",
                            width: "100%"
                        }}
                    />
                    <img src={search} alt="search" style={{ width: "20px", marginRight: "10px" }} />
                </div>

                {/* Profile Cards List */}
                {
                    ProfileCards.map((item, index) => (
                        <ProfileCard
                            key={index}
                            photo={item.photo}
                            name={item.name}
                            desc={item.desc}
                            time={item.time}
                            stars={item.stars}
                        />
                    ))
                }
            </div>
        </div>
    )
}

root.render(<App></App>)