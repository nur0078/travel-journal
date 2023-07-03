import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import data from "../data";

interface ICardProps {
  data: {
    key: number;
    title: string;
    location: string;
    googleMapsUrl: string;
    startDate: string;
    endDate: string;
    description: string;
    imageUrl: string;
  };
}

const Card = ({ data }: ICardProps) => {
  return (
    <div className=" sm:flex-col md:flex-row py-8 px-0 gap-10 text-justify md:flex">
      <div>
        <img
          className="h-full w-full aspect-video object-cover rounded-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 hover:shadow-xl md:w-80 "
          src={data.imageUrl}
          alt={data.title}
        />
      </div>
      <div className="p-0 mt-4 mx-0 mb-0">
        <FontAwesomeIcon icon={faLocationDot} className=" text-red-500" />
        <h2 className=" inline-block text-sm tracking-widest uppercase mt-0 mx-4">
          {data.location}
        </h2>
        <a
          className=" text-sm underline"
          href={data.googleMapsUrl}
          target="_blank"
        >
          View on Google Maps
        </a>

        <h3 className="text-2xl pt-3 mx-0 font-bold">{data.title}</h3>
        <p className="pt-2 font-semibold">
          {data.startDate} - {data.endDate}
        </p>
        <p className="max-w-3xl pt-3 leading-normal text-base font-normal ">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
