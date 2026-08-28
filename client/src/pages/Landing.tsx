import { IoFilterSharp } from "react-icons/io5";
import { Link } from "react-router";
import LeftArrow from "../assets/icons/LeftArrow";
import RightArrow from "../assets/icons/RightArrow";
import AccordionUsage from "../components/Accordion";
import LandingExploreCard from "../components/cards/LandingExploreCard";
import MoreAboutCard from "../components/cards/MoreAboutCard";
import ExploreEventsCard from "../components/cards/ExploreEventsCard";
import MainBg from "../assets/images/main-bg.jpg"
import TravelImg1 from "../assets/images/travel-image1.webp";
import TravelImg2 from "../assets/images/travel-image2.webp";
import TravelImg3 from "../assets/images/image2.jpg";
import TravelImg4 from "../assets/images/image3.jpg";
import LetsGoImg from "../assets/images/letsGoImage.jpg";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {AnimatePresence, motion} from "motion/react"
import TripsImg from "../assets/images/TripsImage.jpg"
import DateRangePickerValue from "../components/Calendar";
import AirplaneIcon from "../assets/icons/airplane-02-stroke-rounded";
import CancelIcon from "../assets/icons/cancel";
import PeopleIcon from "../assets/icons/People";

export default function Landing() {
  const [planning, setPlanning] = useState(false);
  const [planFormData, setPlanFormData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    travelers: ""
  })

  useEffect(() => {
    const image = new Image();
    image.src = TripsImg;
  })

  return (
    <>
      <section className="relative min-h-dvh w-full overflow-hidden">
        <img
          src={MainBg}
          alt="Main Landing page image"
          sizes="100vw"
          className="object-cover absolute inset-0 h-full w-full"
        />

        
    
        <div className="absolute inset-0 bg-black/20" />

       <AnimatePresence mode="wait">
        {planning ? (
          <motion.div
          key="planner"
          initial={{opacity:0, x:120}}
          animate={{opacity:1, x:0}}
          exit={{opacity:0, x:-120}}
          transition={{duration:0.35}}
          >
            <div className="relative z-10 gap-10 flex flex-col justify-center items-center min-h-dvh text-center px-10">

            <div className="flex text-white justify-between items-center gap-5">
              <div onClick={() => setPlanning(!planning)}>
              <LeftArrow size={40}/>
              </div>
            <p className="text-white text-5xl">Your plan starts here</p>
            </div>

            <form  className="flex gap-5 py-10 bg-white/90  rounded-lg px-10">

            <div className="flex justify-center items-center">

            <div className="relative flex justify-center items-center">

          <div className="w-62.5 flex justify-center items-center gap-2">
          <AirplaneIcon size={19}/>
  <input
    id="destination"
    name="destination"
    placeholder="Destination"
    value={planFormData.destination}
    onChange={(event) => setPlanFormData((previous,) => ({
      ...previous,
      destination: event.target.value
      
    }))}
    className="rounded-lg max-w-45 focus:outline-none truncate"
    />
    </div>
    <div onClick={() => setPlanFormData((previous) => ({...previous, destination: ""}))}>
      {planFormData.destination ? (
        <CancelIcon className="absolute top-0 right-5"/>

      ): ""}
    </div>

</div>
 
 
                                     <div className="relative w-62.5 flex gap-2 justify-center items-center">
                  <PeopleIcon className="" size={19}/>
  <input
    id="travelers"
    name="travelers"
    placeholder="Travelers"
    className=" rounded-lg max-w-45 focus:outline-none truncate"
    onChange={(event) => setPlanFormData((previous) => ({
      ...previous,
      travelers: event.target.value
    }))}
  />
  <div onClick={() => setPlanFormData((previous) => ({...previous, travelers: ""}))}>
    {planFormData.travelers ? (
      <CancelIcon className="absolute top-0 right-5"/>
    ) : ""} 
    </div>
</div>
<div className="relative max-w-70 w-full">
  <DateRangePickerValue className=" w-full"/>
</div>
            </div>

              <button onClick={(event) => {
                event.preventDefault();
              }} className="w-40 h-15 rounded-2xl text-white bg-emerald-600 mr-5">Search</button>

            </form>


            </div>
          </motion.div>
        ) : (
                  <motion.div 
          key="intro"
          initial={{opacity:1, x:0}}
          exit={{opacity:0, x:-120}}
          transition={{duration: 0.35}}
        className="relative z-10 flex min-h-dvh flex-col items-center justify-center gap-5 px-10 pt-24 text-center text-white">
          <h1 className="max-w-7xl text-8xl">
            Plan unforgettable trips together.
          </h1>

          <p className="max-w-2xl text-lg text-white/85">
            Discover places, organise your itinerary and make decisions with
            your travel group.
          </p>

          <button
            className="rounded-full bg-emerald-700 px-10 py-4 font-bold text-white hover:bg-emerald-800"
            onClick={() => setPlanning(!planning)}
            >
            Start planning
          </button>
        </motion.div>  
        )}

            </AnimatePresence>

      </section>

      <section className="w-full bg-white px-10 py-20 text-black ">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold">Popular destinations</h2>

            <div className="flex items-center gap-3 ">
              <button aria-label="Previous destinations">
                <LeftArrow />
              </button>

              <button aria-label="Next destinations">
                <RightArrow />
              </button>
            </div>
          </div>

          <div className="mt-8 flex gap-6">
            <LandingExploreCard
              src={TravelImg1}
              description="Argentine, Patagonia"
              alt="Landing Exploration Image"
              width={300}
              height={420}
              intention="Views"

            />
            <LandingExploreCard
              src={TravelImg2}
              description="Amalfi Coast, Italy"
              intention="Views"
              alt="Landing Exploration Image"
              width={300}
              height={420}

            />
            <LandingExploreCard
              src={TravelImg3}
              description="Cuala Lumpur"
              intention="Culture"
              alt="Landing Exploration Image"
              width={300}
              height={420}

            />
            <LandingExploreCard
              src={TravelImg4}
              description="Cuala Lumpur"
              intention="Food"
              alt="Landing Exploration Image"
              width={300}
              height={420}

            />
          </div>
        </div>
      </section>
      <section className="flex flex-col">

      <div className="flex justify-between items-end px-20 mt-10">

<div className="flex flex-col text-7xl ">
  <p className="text-black">Get to know more</p>
  <p className="text-gray-500">about Roamly</p>
</div>
<p className="max-w-1/3 text-gray-600">With a commitment to security and efficiency, our services ensure your financial transactions are seemless and secure</p>
      </div>

      <div className="flex gap-5 px-20 py-10 justify-between">

      <MoreAboutCard value="234M" description="Supporting multiple currencies for travelers."/>
      <MoreAboutCard value="768K" description="Gaining new travelers every new month."/>
      <MoreAboutCard value="5.0" description="High ratings from satisfied users."/>
      <MoreAboutCard value="$8.8B" description="Generating increased revenue consistently."/>

      </div>

      <section className="px-20 text-black">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Explore events</h1>

          <div className="flex gap-5">

            <div className="relative flex gap-2 items-center">
            <FaSearch className="absolute left-4 top-1/3"/>
          <input placeholder="Search by Location" className="border border-gray-400 rounded-full py-2 pl-9">
          </input>
            </div>

              <div className="flex gap-3 justify-center items-center py-2 px-4 bg-emerald-700 hover:bg-emerald-800 rounded-full text-white">
                <p>Filters</p>
                <IoFilterSharp />
              </div>
          </div>

          

        </div>

        <div className="mt-8 flex gap-6">
            <ExploreEventsCard
              src={TravelImg1}
              description="Explore the Hidden Wonders of the World Adventure"
              alt="Landing Exploration Image"
              date="July 3 to 7"
              location="Bangladesh"
              price={400}
              rating="4.8"
            />
            <ExploreEventsCard
              src={TravelImg2}
              description="Embark on a Cultural Journey Across Stunning Landscapes"
              alt="Landing Exploration Image"
              date="July 10 to 12"
              location="Alps"
              price={320}
              rating="4.7"
            />
            <ExploreEventsCard
              src={TravelImg3}
              description="Discover Majestic Mountains and Breathtaking Views"
              alt="Landing Exploration Image"
              date="July 3 to 7"
              location="Sahara desert"
              price={450}
              rating="4.9"
            />
          
          </div>
      </section>

      <section className="flex flex-col mt-20">

      <div className="flex justify-between text-black px-20 pb-10">
      <p className="text-4xl font-bold">Let&apos;s Go</p>
      <Link to="/properties">See all details</Link>
      </div>

      <div className="flex px-20 max-h-90 gap-5">
      <img src={LetsGoImg} alt="Lets Go image" className="max-w-1/2 rounded-2xl"/> 

      <AccordionUsage />
      </div>


      </section>

      </section>
    </>
  );
}
