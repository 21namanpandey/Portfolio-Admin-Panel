import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ManageSkill from "./pages/ManageSkill";
import ManageTimeline from "./pages/ManageTimeline";
import ManageProject from "./pages/ManageProject";
import UpdateProject from "./pages/UpdateProject";
import ViewProject from "./pages/ViewProject";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getUser } from "./store/slices/userSlice";
import "./App.css"
import { getAllMessages } from "./store/slices/messageSlice";

const App = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUser())
        dispatch(getAllMessages())
    },[dispatch])

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/password/forgot" element={<ForgotPassword />} />
                <Route
                    path="/password/reset/:token"
                    element={<ResetPassword />}
                />
                <Route path="/manage/skills" element={<ManageSkill />} />
                <Route path="/manage/timeline" element={<ManageTimeline />} />
                <Route path="/manage/project" element={<ManageProject />} />
                <Route path="/view/project/:id" element={<ViewProject />} />
                <Route path="/update/project/:id" element={<UpdateProject />} />
            </Routes>
            <ToastContainer position="bottom-right" theme="dark" />
        </Router>
    );
};

export default App;
