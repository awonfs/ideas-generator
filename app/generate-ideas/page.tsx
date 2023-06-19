"use client";
import IdeasForm from "@/components/IdeasForm";
import { useAtom } from "jotai";
import { responseFromPromptAtom } from "@/atoms/atoms";

function Page() {
  const [responseFromPrompt] = useAtom(responseFromPromptAtom);

  return (
    <main className="flex h-screen flex-col items-center mt-10 gap-4">
      <h1 className="text-2xl font-medium">Generate ideas</h1>
      <IdeasForm
        label="Write your ideas down here &darr;"
        placeholder="Ideas for new recipes, hobbies etc..."
      />
      <div className="flex flex-col gap-2">
        {responseFromPrompt && (
          <p className="text-lg font-medium">{responseFromPrompt}</p>
        )}
      </div>
    </main>
  );
}

export default Page;
