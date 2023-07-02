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
    <div className="'card">
      <div className="card--img-box">
        <img src={data.imageUrl} alt={data.title} />
      </div>
      <div className="card--infos">
        <FontAwesomeIcon icon={faLocationDot} className="card--location-icon" />
        <h2 className="card--location"> {data.location} </h2>
        <a className="card--location-url" href={data.googleMapsUrl}>
          View on Google Maps
        </a>

        <h3 className="card--title">{data.title}</h3>
        <p className="card--date">
          {data.startDate} - {data.endDate}
        </p>
        <p className="card--description">{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
