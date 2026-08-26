import LocationPin from "../../assets/icons/locationPin.png"
import Calendar from "../../assets/icons/calendar.png"
import RatingStar from "../../assets/icons/ratingStar.png"

type Props = {
  src: string;
  alt: string;
  location: string;
  date: string;
  rating: string;
  price: number;
  description?: string;
  descriptionClassname?: string;
};

export default function ExploreEventsCard({
  src,
  alt,
  description,
  location,
  date,
  rating,
  price,
  descriptionClassname,
}: Props) {
  return (
    <div className="flex flex-col w-72 flex-1">
      <img
        src={src}
        alt={`${alt}`}
        className="h-80 rounded-2xl object-cover w-full"
        width={350}
        height={400}
      />
      <p
        className={`font-bold max-w-100 font-sans leading-5 h-10 mt-1  ${descriptionClassname}`}
      >
        {description}
      </p>
      <div className="flex gap-5 mt-2 text-xs text-gray-500 mb-2">
        <div className="flex gap-1">
          <img
            src={LocationPin}
            width={15}
            height={15}
            alt="Location Pin Icon"
          />
          <p className="">{location}</p>
        </div>
        <p>|</p>
        <div className="flex gap-1">
          <img
            src={Calendar}
            width={15}
            height={15}
            alt="Calendar Icon"
          />
          <span>{date}</span>
        </div>
        <span>|</span>
        <div className="flex gap-1">
          <img
            src={RatingStar}
            width={15}
            height={15}
            alt="Calendar Icon"
          />
          <span>{rating}</span>
        </div>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-600">
          <strong className="text-lg text-black">${price}</strong>/night
        </span>
        <button className="bg-gray-100 px-3 py-2 rounded-full font-sans text-md hover:bg-gray-200 cursor-pointer">
          View Details
        </button>
      </div>
      <p className="text-xs text-gray-500">Including taxes and fees</p>
    </div>
  );
}
