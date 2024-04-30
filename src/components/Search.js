import React, { useEffect } from "react";
import { useState } from "react";
import { useIpContext } from "../context/IpContext";

function Search() {
  const { fetchIpAddress } = useIpContext();
  const [searchValue, setSearchValue] = useState("");
  const [defaultIp, setDefaultIp] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const handleSearch = () => {
    console.log("button click")
    fetchIpAddress(searchValue);
  };

  useEffect(() => {
    const fetchIP = async () => {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            setDefaultIp(data.ip);
            fetchIpAddress(defaultIp);
        } catch (error) {
            console.error('Failed to fetch IP address:', error);
            setDefaultIp('Unable to fetch IP');
        }
    };

    fetchIP();
}, []);
  return (
      <section className="flex flex-col items-center px-8 sm:max-w-[600px] sm:m-auto">
        <h1 className="py-6 text-[32px] font-medium text-white">
          IP Address Tracker
        </h1>
        <div className="flex w-full">
          <input
            placeholder="Search for any IP address or domain"
            className="w-full rounded-l-xl py-5 pl-6 placeholder:text-dark-gray focus:text-very-dark-gray outline-none"
            value={searchValue}
            onChange={handleInputChange}
          ></input>
          <button
            className="flex w-14 items-center justify-center rounded-r-xl bg-black hover:bg-dark-gray"
            onClick={() => handleSearch()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
              <path
                fill="none"
                stroke="#FFF"
                stroke-width="3"
                d="M2 1l6 6-6 6"
              />
            </svg>
          </button>
        </div>
      </section>
  );
}

export default Search;
