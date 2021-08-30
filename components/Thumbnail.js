import Image from "next/image";

const Thumbnail = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <Image
        src={`${BASE_URL}${result.poster_path}`}
        width={200}
        height={200}
      />
    </div>
  );
};

export default Thumbnail;
