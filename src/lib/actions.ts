"use server";

// import { APIError } from "better-auth/api";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
  console.log("Raw form data for sign-in:", formData);
}
export async function signUp(formData: FormData) {
  console.log("Raw form data for sign-up:", formData);

  const rawFormData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { firstName, lastName, email, password } = rawFormData;

  try {
    await auth.api.signUpEmail({
      body: {
        name: `${firstName} ${lastName}`,
        email,
        password,
      },
    });
  } catch (error) {
    console.error("Error signing up:", error);
    return;
    /*if (error instanceof APIError) {
      switch (error.status) {
        case "UNPROCESSABLE_ENTITY":
          return { error: "User already exists" };
        case "BAD_REQUEST":
          return { error: "Invalid email" };
        default:
          return { error: "Something went wrong" };
      }
    }
     */
  }

  redirect("/dashboard");
}
