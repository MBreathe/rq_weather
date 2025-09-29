import { ArrowDownLeft } from "lucide-react";
import CurrentTime from "@/components/CurrentTime";

export default function TimeWidget() {
  return (
    <div
      className={
        "flex items-center justify-between p-2 bg-white text-black rounded-xl"
      }
    >
      <CurrentTime />
      <ArrowDownLeft
        id={"svg"}
        size={60}
        viewBox={"6 6 12 12"}
        strokeWidth={1}
      />
    </div>
  );
}
