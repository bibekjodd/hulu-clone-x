import { useRouter } from "next/router"
import request from "../utils/request"

export default function App() {
    const router = useRouter();


    return (
        <nav className="w-full relative">

            <div className="flex w-full px-10 sm:px-20 whitespace-nowrap  space-x-10 overflow-x-scroll scrollbar-hide ">
                {Object.entries(request).map(([key, { title, url }]) => (
                    <h2 key={key} onClick={() => { router.push(`?genre=${key}`) }}
                        className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'>
                        {title}</h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div>



        </nav>
    )
}