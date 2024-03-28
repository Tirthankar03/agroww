import { FC } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: FC<HeroProps> = ({title, subtitle}) =>  {
  return (
    <div className=" bg-green-700 pb-16">
        <div className="container mx-auto flex flex-col gap-2">
            <h1 className="text-5xl text-white font-extrabold">
                {/* A store for the greens! */}
                {title}
            </h1>
            <p className='text-2xl text-white'>
                {/* get all the agricultural items at a single stop.... */}
                {subtitle}
            </p>
        </div>
    </div>
  )
}

export default Hero