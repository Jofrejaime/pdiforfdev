import React from "react";
import { Routes, Route } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserCreateAProject from "./UserCreateAProject";
import UserDefinition from "./UserDefinition";
import UserStats from "./UserStats";
import Feed from "../Feed/Feed";

function User() {
  return (
    <section className={"container"}>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="createaproject" element={<UserCreateAProject />}/>
        <Route path="definition" element={<UserDefinition />} />
        <Route path="stats" element={<UserStats />} />
      </Routes>
    </section>
  );
}

export default User;
