import React from "react";
import Container from "../../../components/Container/Container";
import bannerImage from "../../../assets/left.png";
const Banner = () => {
  return (
    <div className="bg-gradient-blur bg-gradient-blur-blur-250 pt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[calc(100vh-85px)] gap-10">
          <div>
            <h1 className="text-6xl font-[700] tracking-tight">
              Find{" "}
              <span className="bg-gradient-to-r from-[#0275CE]  to-[#9201D3] inline-block text-transparent bg-clip-text">
                Partners
              </span>{" "}
              (CAs) available online
            </h1>

            <p className="mt-3 mb-10">
              <span className="font-bold">CONNECT</span> with us where your
              services are listed and visible to a myriad of businesses seeking
              CA’s for compliance support
            </p>

            <div className="flex items-center mt-5">
              <input
                type="text"
                placeholder="Search by name"
                className="w-3/4 border border-gray-300 px-5 py-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="border px-6 bg-primary py-4 rounded-r-lg border-primary text-white hover:bg-transparent hover:text-primary transition font-bold">
                Search
              </button>
            </div>

          </div>
          <img src={bannerImage}></img>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
