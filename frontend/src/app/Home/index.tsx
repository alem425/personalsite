import React from "react";
import Image from "next/image";
import ywviewImage from "@/assets/ywview.jpg";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col w-full">
      <Image
        src={ywviewImage}
        alt="New York View"
        className="w-full h-96 object-cover"
        priority
      />

      <div className="flex flex-col items-center text-center">
        <h1>Alexander Morgan</h1>
        <p className="mt-3">
          Computer Science Student. Machine Learning Aspirer. Web Developer
        </p>

        <p className="mt-3">
          I am a computer science student with a focus in machine learning and
          experience in full stack web development. I have built products using
          a wide array of technologies such as Typescript, AWS(EC2, S3, rdb,
          Amplify, and Cognito), Next.js, Tailwind, MongoDB, Google Firebase and
          more!{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;
