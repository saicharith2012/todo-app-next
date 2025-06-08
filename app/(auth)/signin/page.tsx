"use client";
import Button from "@/components/Button";
import LabelledInput from "@/components/LabelledInput";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-4 flex flex-col gap-2 items-center">
        <LabelledInput
          label="username"
          type="text"
          placeholder="enter username"
          ref={usernameRef}
        />
        <LabelledInput
          label="password"
          type="password"
          placeholder="enter password"
          ref={passwordRef}
        />

        <Button
          onclick={async () => {
            const response = await axios.post(
              "http://localhost:3000/api/v1/user/signin",
              {
                username: usernameRef.current?.value,
                password: passwordRef.current?.value,
              }
            );

            console.log(response);

            router.push("/dashboard");
          }}
          text="Sign in"
        />
      </div>
    </div>
  );
}
