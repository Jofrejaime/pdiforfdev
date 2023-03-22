import React from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserCreateAProject from "./UserCreateAProject";
import UserDefinition from "./UserDefinition";
import UserStats from "./UserStats";

function User() {
  return (
    <section className={"container"}>
      <UserHeader />
      <Routes>
        <Route path="/:username" element={<Feed />} />
        <Route path="createaproject" element={<UserCreateAProject />} />
        <Route path="definition" element={<UserDefinition />} />
        <Route path="createaproject" element={<UserCreateAProject />} />
        <Route path="stats" element={<UserStats />} />
      </Routes>
    </section>
  );
}

export default User;
