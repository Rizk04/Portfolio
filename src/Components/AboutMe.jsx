import HoverText from "./HoverText";


export default function AboutMe() {
    return (
        <HoverText>
        <div className="w-1/2 mx-auto flex flex-col justify-center my-10 items-center mt-10 bg-green-300 text-black p-5 rounded-xl shadow-3xl">
        <h1 className="text-3xl">About Me</h1>
        <p className="text-lg mt-4">I am a full-stack web developer in training, currently working with React and .NET</p>
        <p className="text-lg mt-4">I started programming at the age of 14 with Arduino.</p>
        <p className="text-lg mt-4">I really enjoyed the process of coding, so I decided to become a programmer.</p>
        <p className="text-lg mt-4">I also enjoy my fair share of games and shows :) </p>

        </div>
        </HoverText>
      
    );
  }
  