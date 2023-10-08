import React, { useEffect, useState } from "react";
import StudentDashCss from "../StudentDash.module.css";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Dash = () => {
  const [data, setData] = useState({
    Name: "Loading...",
    Father: "Loading...",
    Gender: "Loading...",
    Contact: "Loading...",
    Branch: "Loading...",
    Id: "Loading...",
    Semester: "Loading...",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/studentInfo", {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setData(data);
    console.log(data);
  };

  return (
    <div className={StudentDashCss.dashboard}>
      <div class={StudentDashCss.studentInfo}>
        <div class={StudentDashCss.profile}>
          <div class={StudentDashCss.profile1}>
            <div class={StudentDashCss.pic}>
              <FontAwesomeIcon
                className={StudentDashCss.font_awesome}
                icon={faUser}
                size="2xl"
                style={{ color: "#19214d" }}
              />
            </div>
          </div>
          <hr />
          <div class={StudentDashCss.profile2}>
            <table className={StudentDashCss.profile_table}>
              <tr>
                <td className={StudentDashCss.leftcell}>NAME</td>
                <td className={StudentDashCss.rightcell}>
                  {data.Name.toUpperCase()}
                </td>
              </tr>
              <tr>
                <td className={StudentDashCss.leftcell}>ID</td>
                <td className={StudentDashCss.rightcell}>
                  {data.Id.toUpperCase()}
                </td>
              </tr>
              <tr>
                <td className={StudentDashCss.leftcell}>FATHER'S NAME</td>
                <td className={StudentDashCss.rightcell}>
                  {data.Father.toUpperCase()}
                </td>
              </tr>
              <tr>
                <td className={StudentDashCss.leftcell}>BRANCH</td>
                <td className={StudentDashCss.rightcell}>
                  {data.Branch.toUpperCase()}
                </td>
              </tr>
              <tr>
                <td className={StudentDashCss.leftcell}>CONTACT</td>
                <td className={StudentDashCss.rightcell}>
                  {data.Contact.toUpperCase()}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className={StudentDashCss.statistics}></div>
    </div>
  );
};

export default Dash;
