import React, { useState } from "react";
import { Link, NavLink, useHistory, withRouter } from "react-router-dom";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ChatIcon from "@material-ui/icons/Chat";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar, Button, IconButton } from "@material-ui/core";
import "./Header.css";
import ClearIcon from "@material-ui/icons/Clear";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import NotesIcon from "@material-ui/icons/Notes";
import { useDispatch } from "react-redux";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const toggleClose=()=>{
    setToggle(false)
    
  }
  return (
    <div className="header">
      <div className="left__header">
        <Link to="/">
          <img
            src="https://lms.bup.edu.bd/pluginfile.php/1/theme_edumy/headerlogo2/1618037325/bup-icon.png"
            alt=""
          />
          <h4>سیستم مدیریت آموزش شمسی پور</h4>
        </Link>
      </div>
      <div
        className={`middle__header ${
          toggle ? `show__sidebar__nav` : `sidebar__nav`
        }`}
      >
        {user && (
          <ul>
            {
              user.role==="Teacher" && <> <li>
              <NavLink onClick={toggleClose} to="/teacher-dashboard">داشبورد</NavLink>
            </li>
            
           

            </>
            
            }
            {
              user.role==="Admin" && <> <li >
              <NavLink onClick={toggleClose} to="/admin-dashboard">داشبورد</NavLink>
            </li>
            <li className="admin__toggle__menu">
              <NavLink onClick={toggleClose} to="/admin/course-info">مشخصات دوره</NavLink>
            </li>
            <li className="admin__toggle__menu">
              <NavLink onClick={toggleClose} to="/admin/student-info">مشخصات دانشجو</NavLink>
            </li>
            <li className="admin__toggle__menu">
              <NavLink onClick={toggleClose} to="/admin/teacher-info">مشخصات استاد</NavLink>
            </li>
            
            </>
            }
            {
              user.role==="Student" &&<><li>
              <NavLink onClick={toggleClose} to="/">داشبورد</NavLink>
            </li>
            <li>
              <NavLink onClick={toggleClose} to="/ucam">یوکم</NavLink>
            </li>

            <li>
              <NavLink onClick={toggleClose} to="/library">کتابخانه</NavLink>
            </li> </> 
            }
            
            <li>
              <Link onClick={toggleClose} to="/profile">پروفایل</Link>
            </li>
            <li>
              <NavLink onClick={toggleClose} to="/all-courses">همه دوره ها</NavLink>
            </li>

            {
              user.role==="Teacher" ?   <li className="">
              <Button
                onClick={() => {
                  localStorage.clear("user");
                  localStorage.clear("auth_token");
                  dispatch({ type: "CLEAR__USER" });
                  history.push("/login");
                }}
              >
                خروج
              </Button>
            </li> :  <li className="logout__button">
              <Button
                onClick={() => {
                  localStorage.clear("user");
                  localStorage.clear("auth_token");
                  dispatch({ type: "CLEAR__USER" });
                  history.push("/login");
                }}
              >
                خروج
              </Button>
            </li>

            }
           
           

           
          </ul>
        )}
      </div>
      {user ? (
        <div className="right__header">
          <IconButton>
            <VisibilityOffIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <Link to="/profile">
            <Avatar>R</Avatar>
          </Link>
        </div>
      ) : (
        <div className="d-flex list-unstyled">
          <li className="mr-3">
            <NavLink to="/Login">ورود به حساب کاربری</NavLink>
          </li>
          <li>
            <NavLink to="/Register">ثبت نام</NavLink>
          </li>
        </div>
      )}

      {user ? (
        <div className="menu__toggle__icon mr-auto">
          <IconButton onClick={() => setToggle(!toggle)}>
            {!toggle ? (
              <NotesIcon fontSize="large" />
            ) : (
              <ClearIcon fontSize="large" />
            )}
          </IconButton>
        </div>
      ) : null}
    </div>
  );
};

export default withRouter(Header);
