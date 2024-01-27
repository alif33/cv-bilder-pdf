import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "../../../assets/Icons/Icons";
import Container from "../container";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <Container>
        <div className="flex py-20">
          <h1 className="basis-10/12 text-5xl font-medium">
            Start Building your Dream CV With Our website!
          </h1>
          <div className="basis-2/12">
            <button className="w-40 h-12 bg-primary-deep rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <hr />

        <div className="flex justify-between py-14">
          <div className="basis-3/12 flex flex-col">
            <Link href="/">
              <h1 className="text-2xl font-bold">
                CV Builder <span className="text-primary-deep italic">Pro</span>
              </h1>
            </Link>
            <p className="text-white">
              Our CV maker boasts a diverse selection of expert-crafted
              templates, meticulously designed to alignprofessionalism.
            </p>
          </div>

          <div className="basis-6/12 flex flex-col justify-center items-center gap-5">
            <button className="bg-primary-deep w-32 h-10 rounded-lg">
              Contact Us
            </button>
            <h2>hello@cvbuilderpro.com</h2>
          </div>
          <div className="basis-3/12 flex gap-5 items-center">
            <MdLocationOn className="text-4xl" />
            <h2>8502 Preston Rd. Inglewood, Maine 98380, USA</h2>
          </div>
        </div>
        {/* <div>
                    <ul>
                        <li><Link href="">F</Link></li>
                        <li><Link href="">T</Link></li>
                        <li><Link href="">L</Link></li>
                    </ul>
                </div> */}
      </Container>
    </div>
  );
};
export default Footer;
