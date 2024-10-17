import { Button, Progress, Snippet, Textarea, Tooltip } from "@nextui-org/react";
import SectionTitle from "./components/sectionTitle";
import SectionInput from "./components/sectionInput";
import SectionResult from "./components/sectionResult";



export default function Home() {
  return (
    <main className="font-quantico flex justify-center flex-col m-auto h-screen w-screen items-center gap-4">
      <div className="flex flex-col w-3/4 p-4 gap-4">
      <div>
        <SectionTitle />
      </div>
      <div>
        <SectionInput />
      </div>
      <div>
        <SectionResult />
        
      </div>
      </div>
    </main>
  );
}
