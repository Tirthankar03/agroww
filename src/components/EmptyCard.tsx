import { FC } from 'react';
import { Link } from 'react-router-dom'

interface EmptyCardProps {
    title: string;
    subtitle: string;
  }

const EmptyCard: FC<EmptyCardProps> = ({title, subtitle}) =>  {
  return (
    <div className="flex h-[500px] w-full flex-1 items-center justify-center">
    <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center justify-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              {title}
              {/* YOUR CART IS EMPTY :) */}
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              {/* Your Shopping cart lives to serve. Give it a purpose - fill it with
              fresh greens! */}
              {subtitle}
            </p>
            <Link to="/">
              <button className="bg-green-700 rounded-md cursor-pointer hover:bg-green-500 active:bg-green-600 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
     </div>
  )
}

export default EmptyCard