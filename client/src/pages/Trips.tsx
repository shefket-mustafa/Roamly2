import TripsImg from "../assets/images/TripsImage.jpg"
import TripsCard from "../components/cards/TripsCard"
import TravelImg1 from "../assets/images/travel-image1.webp";
import TravelImg2 from "../assets/images/travel-image2.webp";
import TravelImg3 from "../assets/images/image2.jpg";
import TravelImg4 from "../assets/images/image3.jpg";

export default function Trips() {

    return(
        <div className="relative min-h-dvh">

            <img src={TripsImg} alt="Trips image" className="object-cover inset-0 h-full w-full" />

             <div className="mt-8 grid grid-cols-3">
            <TripsCard
              src={TravelImg1}
              description="Explore the Hidden Wonders of the World Adventure"
              alt="Landing Exploration Image"
              date="July 3 to 7"
              location="Bangladesh"
              price={400}
              rating="4.8"
            />
            <TripsCard
              src={TravelImg2}
              description="Embark on a Cultural Journey Across Stunning Landscapes"
              alt="Landing Exploration Image"
              date="July 10 to 12"
              location="Alps"
              price={320}
              rating="4.7"
            />
            <TripsCard
              src={TravelImg3}
              description="Discover Majestic Mountains and Breathtaking Views"
              alt="Landing Exploration Image"
              date="July 3 to 7"
              location="Sahara desert"
              price={450}
              rating="4.9"
            />
               <TripsCard
              src={TravelImg4}
              description="Discover Majestic Mountains and Breathtaking Views"
              alt="Landing Exploration Image"
              date="July 3 to 7"
              location="Sahara desert"
              price={450}
              rating="4.9"
            />
          
          </div>

        </div>
    )
}