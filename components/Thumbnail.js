import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500";
  // console.log(result);
  return (
    <div
      className="p-2 group cursor-pointer  duration-200  lg:opacity-70 hover:opacity-100 "
      onClick={() => window.open("https://www.yourURL.com", "_blank")}
    >
      <Image
        className="object-scale-down"
        layout="responsive"
        src={`${BASE_URL}${result.poster_path || results.backdrop_path}`}
        height={1080}
        width={1920}
      />
      <div className="p2">
        <p className="truncate max-w-md group-hover:text-white">
          {result.overview}
        </p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-30 group-hover:opacity-100">
          {result.media_type && `${result.media_type}`}
          {" ● "}
          {result.release_date || result.first_air_date}
          {" ● "}

          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
