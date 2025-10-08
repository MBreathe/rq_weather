"use client";

import Link from "next/link";
import React, { useState } from "react";
import { EyeClosed, EyeIcon } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState<"password" | "text">("password");

  const togglePasswordVisibility = () => {
    type === "password" ? setType("text") : setType("password");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <main
      className={
        "bg-white text-black rounded-xl font-sans p-8 pl-10 pr-10 flex flex-col gap-0.5 items-center justify-center"
      }
    >
      <h1
        className={"text-3xl text-center font-sans font-medium leading-7 my-4"}
      >
        Sign-in using email and password
      </h1>
      <form
        className={"flex flex-col gap-1 font-mono w-full"}
        onSubmit={handleSubmit}
      >
        <div className={"flex flex-col"}>
          <label className={"ml-1 leading-4"}>email</label>
          <input
            type={"email"}
            placeholder={""}
            required
            autoComplete={"email"}
            id={"email"}
            name={"email"}
            className={"border-1 border-black p-0.5 focus:outline-none"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
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
        <button
          type={"submit"}
          className={"bg-black text-white w-full p-2 text-xl rounded-lg my-3"}
        >
          Sign-in
        </button>
      </form>
      <p className={"font-mono my-1"}>or continue with</p>
      <div
        className={
          "flex border-1 border-black justify-between w-full font-mono text-lg font-medium"
        }
      >
        <button className={"border-r-1 border-black p-1 w-full"}>Google</button>
        <button className={"p-1 w-full"}>GitHub</button>
      </div>
      <div
        className={"flex flex-col gap-0.5 font-mono w-full text-center mt-2"}
      >
        <Link href={"/restore-password"} className={"underline"}>
          forgot your password?
        </Link>
        <Link href={"/register"} className={"underline"}>
          create an account
        </Link>
      </div>
    </main>
  );
}
