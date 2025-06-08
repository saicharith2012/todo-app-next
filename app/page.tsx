import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <span className="text-lg p-8">Todo Application</span>

      <div className="flex flex-col gap-2 *:hover:underline *:hover:text-blue-500">
        <Link href={"/signup"}>Join us? Create account here.</Link>
        <Link href={"/signin"}>Already a user? Login from here.</Link>
      </div>
    </div>
  );
}
