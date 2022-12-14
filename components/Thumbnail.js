import Image from "next/image";
import { FiThumbsUp } from 'react-icons/fi'
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
    const base_url = 'https://image.tmdb.org/t/p/original/';
    return (
        <div ref={ref} className="m-2 cursor-pointer group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <div className="w-full aspect-video relative">
                <Image
                    src={`${base_url}${result.backdrop_path || result.poster_path}` ||
                        `${base_url}${result.poster_path}`}
                    width={1920}
                    height={1080}
                    layout='responsive'
                />
            </div>
            <div className="p-2 ">
                <p className='line-clamp-2 '>{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out ">{result.title || result.original_name}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type} •`}{" "}
                    {result.release_date || result.first_air_date} • {" "}
                    <FiThumbsUp className="mx-1" /> {result.vote_count}
                </p>

            </div>
        </div>
    )
})

export default Thumbnail