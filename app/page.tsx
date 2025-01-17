export const runtime = "edge";
import SectionTitle from "./components/sectionTitle";
import SectionInput from "./components/sectionInput";



export default function Home() {
  return (
    <main className='bg-abstract bg-cover font-quantico flex justify-center flex-col m-auto h-screen w-screen items-center gap-4'>
      <div className="flex flex-col w-3/4 p-4 gap-4 bg-black/50 backdrop-blur-sm rounded-md shadow-lg ">
      <div>
        <SectionTitle />
      </div>
      <div>
        <SectionInput />
      </div>
      </div>
    </main>
  );
}
