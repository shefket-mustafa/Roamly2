import { Link } from "react-router";
import InstagramIcon from "../assets/icons/instagramIcon.png"
import GithubIcon from "../assets/icons/githubIcon.png"
import LinkedinIcon from "../assets/icons/linkedinIcon.png"

export default function Footer() {

    return(
        <div className="flex flex-col bg-gray-200 text-black ">

            <section className="flex gap-10 justify-evenly  py-10">

            <div className="flex flex-col">
                <span className="font-bold ">Roamly</span>
                <Link to="/footer/hotels">Hotels</Link>
                <Link to="/footer/blog">Blog</Link>
                <Link to="/contact">Contact Us</Link>
            </div>

             <div className="flex flex-col">
                <span className="font-bold">Guide</span>
                <Link to="/footer/weather">Weather around the world</Link>
                <Link to="/footer/travel-qa">Travel questions and answers </Link>
                <Link to="/footer/explore">Explore cities and countries</Link>
            </div>

             <div className="flex flex-col items-center">
                <span className="font-bold">Socials</span>
                <div className="flex gap-3 ">

                <Link to="https://instagram.com">
                <img src={InstagramIcon} alt="img" width={30} height={30}/>

                </Link>
                <Link to="https://github.com/shefket-mustafa">
                <img src={GithubIcon} alt="img" width={30} height={30}/>

                </Link>
                <Link to="https://www.linkedin.com/in/shefket-mustafa-81356a360/">
                <img src={LinkedinIcon} alt="img" width={30} height={30}/>

                </Link>
                </div>
            </div>

            </section>
 
            <div className="flex justify-center items-center border-t border-gray-400 bg-white">Roamly 2026 Limited</div>
        </div>
    )
}