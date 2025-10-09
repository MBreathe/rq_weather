import { signUp } from "@/lib/actions";
import Input from "@/components/Input";
import InputPassword from "@/components/InputPassword";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main
      className={
        "bg-white text-black rounded-xl font-sans p-8 pl-10 pr-10 flex flex-col gap-0.5 items-center justify-center h-[99.4vh]"
      }
    >
      <h1
        className={"text-3xl text-center font-sans font-medium leading-7 mb-9"}
      >
        Sign-up to get access to all the features
      </h1>
      <form
        className={"flex flex-col gap-1.5 font-mono w-full"}
        action={signUp}
      >
        <Input
          label={"first name"}
          name={"firstName"}
          type={"text"}
          required={true}
          autoComplete={"given-name"}
        />
        <Input
          label={"last name"}
          name={"lastName"}
          type={"text"}
          required={true}
          autoComplete={"family-name"}
        />
        <Input
          label={"email"}
          name={"email"}
          type={"email"}
          required={true}
          autoComplete={"email"}
        />
        <InputPassword />
        <button
          type={"submit"}
          className={"bg-black text-white w-full p-2 text-xl rounded-lg mt-3"}
        >
          Sign-up
        </button>
      </form>
      <p className={"font-mono my-3"}>or continue with</p>
      <div
        className={
          "flex border-1 border-black justify-between w-full font-mono text-lg font-medium"
        }
      >
        <button className={"border-r-1 border-black p-1 w-full"}>Google</button>
        <button className={"p-1 w-full"}>GitHub</button>
      </div>
      <p className={"font-mono my-1 px-2 text-center"}>
        already have an account?{" "}
        <Link href={"/login"} className={"underline"}>
          Sign-in
        </Link>
      </p>
    </main>
  );
}
