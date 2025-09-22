import { ChevronRight } from "lucide-react";

export default function SignInBtn() {
  return (
    <button className="bg-neutral-100 text-neutral-950 rounded-lg p-4 pl-5 pr-30 cursor-pointer text-xl flex items-center">
      Sign In <ChevronRight className="text-neutral-950 h-5 w-5 ml-1" />
    </button>
  );
}
