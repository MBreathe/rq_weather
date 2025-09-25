import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className={"border-1 border-black rounded-full p-1 flex items-center"}>
      <div className={`bg-black rounded-full p-1`}>
        <Search className={`w-5 h-5`} />
      </div>
      <input
        className={`text-black font-sans placeholder:text-black ml-1 mr-1 outline-none w-full focus:placeholder:text-transparent`}
        type={"text"}
        id={"search"}
        placeholder={"Search"}
      />
    </div>
  );
}
