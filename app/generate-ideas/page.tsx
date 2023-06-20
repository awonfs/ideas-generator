"use client";
import { useRouter } from "next/navigation";
import IdeasForm from "@/components/IdeasForm";
import { useAtom } from "jotai";
import { responseFromPromptAtom } from "@/atoms/atoms";
import Typewriter from "@/components/Typewriter";

function Page() {
  const router = useRouter();

  const [responseFromPrompt] = useAtom(responseFromPromptAtom);
  return (
    <main className="flex h-screen flex-col items-center mt-10 gap-4">
      <h1 className="text-2xl font-medium">Generate ideas</h1>
      <IdeasForm
        label="Write your ideas down here &darr;"
        placeholder="Ideas for new recipes, hobbies etc..."
      />
      <div className="container max-w-md overflow-scroll flex flex-col gap-2">
        {responseFromPrompt && <Typewriter text={responseFromPrompt} />}
      </div>
    </main>
  );
}

export default Page;
