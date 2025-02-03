import Profile from "../components/Profile";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
   <Profile />
   <Projects />
   <div className="flex flex-col items-center justify-center py-8 text-center">
  <h1 className="text-lg font-semibold">Creating magic behind the scenes!</h1>
  <p className="text-md font-normal text-gray-500 px-3">
    Turning every moment into a story and crafting visual wonders!
  </p>
</div>

    </>
  );
}
