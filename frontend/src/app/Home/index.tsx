"use client";
import React from "react";
import Image from "next/image";
import ywviewImage from "@/assets/ywview.jpg";
import { useRouter } from "next/navigation";
import ButtonLinks from "@/components/buttonlinks";
import { GithubIcon, Linkedin } from "lucide-react";

const Home = () => {
  const router = useRouter();

  const changePage = () => {
    router.push("/work");
  };
  return (
    <div className="flex flex-col w-full">
      <Image
        src={ywviewImage}
        alt="New York View"
        className="w-full h-96 object-cover"
        priority
      />

      <div className="flex flex-col items-center text-center">
        <h1 className="mt-3 text-5xl font-semibold">Alexander Morgan</h1>
        <p className="mt-3">
          Computer Science Student. Machine Learning Aspirer. Web Developer.
        </p>

        <p className="mt-3">
          I am studying Computer Science at the University of Maryland, focusing
          on machine learning. My experience spans multiple full-stack web
          development projects, where I've employed technologies like Next.js,
          Tailwind CSS, Node.js, Express, Redux, and a range of AWS services
          (EC2, RDS, S3, Amplify). These projects include a robust data
          dashboard that organizes and visualizes information with ease, as well
          as a landing page demo showcasing refined UI/UX design principles.{" "}
        </p>

        <p className="mt-10"> Check out my projects below :) </p>

        <button
          className="mt-5 px-4 py-2 bg-white text-slate-800 font-bold rounded-3xl hover:transform-all hover:scale-110 hover:bg-gray-100 transition-all duration-200 ease-in-out"
          onClick={changePage}
        >
          Check Out My Work
        </button>
      </div>

      <div className="mt-5 flex flex-row w-full justify-center">
        <ButtonLinks
          image={Linkedin}
          href="https://www.linkedin.com/in/alexander-morgan-8467311b8/"
        />

        <ButtonLinks image={GithubIcon} href="https://github.com/alem425" />
      </div>
    </div>
  );
};

export default Home;
