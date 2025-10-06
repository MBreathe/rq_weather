"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main
      className={
        "bg-white text-black rounded-xl font-sans p-2 flex flex-col gap-0.5 items-center justify-center"
      }
    >
      <h1 className={"text-2xl font-medium text-center m-2"}>Login</h1>
      <h3 className={"text-lg"}>Continue using the following options:</h3>
      <div className={"flex border-1 border-black w-full font-mono text-xl"}>
        <button
          className={
            "flex-1 border-r-1 border-black p-2 hover:bg-black hover:text-white"
          }
        >
          Google
        </button>
        <button className={"flex-1 p-2 hover:bg-black hover:text-white"}>
          GitHub
        </button>
      </div>
      <h3 className={"text-lg"}>or</h3>
      <form className={"flex flex-col w-full font-mono"}>
        <div className={"flex flex-col"}>
          <label htmlFor={"email"}>email</label>
          <input
            name={"email"}
            type={"email"}
            className={"bg-white border-1 border-black"}
          />
        </div>
        <div className={"flex flex-col"}>
          <label htmlFor={"password"}>password</label>
          <input
            name={"password"}
            type={"password"}
            className={"bg-white border-1 border-black"}
          />
        </div>
      </form>
      <button
        type={"submit"}
        className={"bg-black text-white p-2 rounded-md m-2 w-full"}
      >
        Continue
      </button>
      <Link href={"/password-recovery"} className={"underline"}>
        Forgot password?
      </Link>
      <p>
        Don't have an account?{" "}
        <Link href={"/register"} className={"underline"}>
          Register
        </Link>
      </p>
    </main>
  );
}
