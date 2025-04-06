import Homepage from "@/components/Homepage";
import TeamCard from "@/components/teamcard";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Homepage/>

    </div>
  );
}
