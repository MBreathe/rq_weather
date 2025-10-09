"use client";

import { EyeClosed, EyeIcon } from "lucide-react";
import React, { useState } from "react";

export default function InputPassword() {
  const [password, setPassword] = useState("");
  const [type, setType] = useState<"password" | "text">("password");

  const togglePasswordVisibility = () => {
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <div className={"flex flex-col"}>
      <label className={"ml-1 leading-4"}>password</label>
      <div className={"border-1 border-black w-full flex"}>
        <input
          type={type}
          placeholder={""}
          required
          autoComplete={"current-password"}
          id={"password"}
          name={"password"}
          className={"p-0.5 w-full focus:outline-none"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={"flex items-center justify-center mr-1"}>
          {type === "password" ? (
            <EyeClosed
              size={25}
              className={"ml-1 cursor-pointer"}
              onClick={togglePasswordVisibility}
            />
          ) : (
            <EyeIcon
              size={25}
              className={"ml-1 cursor-pointer"}
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
      </div>
    </div>
  );
}
