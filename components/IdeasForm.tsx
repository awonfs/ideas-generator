"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { useState } from "react";

const formSchema = z.object({
  prompt: z.string().min(1, "This field cant be empty").max(1000),
});

type Input = z.infer<typeof formSchema>;

type FormProps = {
  label: string;
  placeholder: string;
};

function IdeasForm({ label, placeholder }: FormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: Input) {
    setIsLoading(true); // start loading
    try {
      const response = await axios.post(
        "http://localhost:3000/api/generate",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-600 p-8 rounded-md w-1/2 h-1/2 flex flex-col justify-evenly"
    >
      <label
        htmlFor="prompt"
        className="block mb-4 text-lg font-medium text-white"
      >
        {label}
      </label>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <textarea
          id="prompt"
          className="block w-full text-sm rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
          rows={6}
          {...register("prompt")}
        ></textarea>
      )}
      <button
        type="submit"
        className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        Submit
      </button>
      {errors.prompt && (
        <span className="text-red-500 text-sm">{errors.prompt.message}</span>
      )}
    </form>
  );
}

export default IdeasForm;
