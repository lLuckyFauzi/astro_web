import React, { useEffect, useState } from "react";
import Map from "./Partials/Map";
import { getIssPosition } from "../../data/getIssPosition";

const IssPage = () => {
  const [loading, setLoading] = useState(true);
  const [iss, setIss] = useState([]);

  const getData = async () => {
    return await getIssPosition().then((results) => {
      setIss(results.iss_position);
      setLoading(false);
    });
  };

  useEffect(() => {
    setInterval(() => {
      getData();
    }, 100);
    // return clearInterval();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      {!loading && (
        <Map position={{ latitude: iss.latitude, longitude: iss.longitude }} />
      )}
    </div>
  );
};

export default IssPage;
