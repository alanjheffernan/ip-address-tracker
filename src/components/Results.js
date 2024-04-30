import React from "react";
import { useIpContext } from "../context/IpContext";

function Results() {
  const { data, loading } = useIpContext();

  return (
    <section className="mx-8 mt-6 flex flex-col items-center justify-center rounded-2xl bg-white px-8 shadow  sm:flex-row sm:items-center sm:justify-between">
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <div className="my-6 text-center sm:my-auto sm:py-8 sm:text-left">
            <p className="mb-2 text-[10px] text-dark-gray sm:text-left ">
              IP ADDRESS
            </p>
            <h5 className="text-xl font-medium">{data.ip}</h5>
          </div>
          <div className="mb-6 text-center sm:my-auto sm:py-8 sm:text-left">
            <p className="mb-2 text-[10px] text-dark-gray sm:text-left">
              LOCATION
            </p>
            <h5 className="text-xl font-medium">
              {data.location.country}, {data.location.region}
            </h5>
          </div>
          <div className="mb-6 text-center sm:my-auto sm:py-8 sm:text-left">
            <p className="mb-2 text-[10px] text-dark-gray sm:text-left">
              TIMEZONE
            </p>
            <h5 className="text-xl font-medium">
              UTC {data.location.timezone}
            </h5>
          </div>
          <div className="mb-6 text-center sm:my-auto sm:py-8 sm:text-left">
            <p className="mb-2 text-[10px] text-dark-gray sm:text-left">IPS</p>
            <h5 className="text-xl font-medium">{data.isp}</h5>
          </div>
        </>
      )}
    </section>
  );
}

export default Results;
