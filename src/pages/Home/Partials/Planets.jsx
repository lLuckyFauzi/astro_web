import React, { useEffect, useState } from "react";
import InfoTag from "../../../components/InfoTag/InfoTag";
import ScrolNav from "../../../components/ScrollNav/ScrolNav";
import Jupiter from "/image/jupiter.png";
import CardPlanets from "../../../components/CardPlanets/Card";
import PlanetsData from "../../../data/static/planets";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const Planets = () => {
  const [name, setName] = useState("Jupiter");
  const [planet, setPlanet] = useState({});

  const filterPlanet = PlanetsData.filter((el) => {
    return el.name === name;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px 150px",
      }}
    >
      <ScrolNav />
      <div>
        <p
          style={{
            textAlign: "center",
            margin: "50px 0px",
            color: "white",
            fontSize: "35px",
            fontWeight: "700",
          }}
        >
          Macam Macam Planet
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            color: "white",
          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            {filterPlanet[0].name}
          </p>
          <div
            style={{
              marginTop: "26px",
              fontSize: "20px",
              fontWeight: "400",
              paddingRight: "250px",
            }}
          >
            <p>{filterPlanet[0].description}</p>
            <p
              style={{
                marginTop: "26px",
              }}
            >
              {filterPlanet[0].SecondDescription}
            </p>
          </div>
          <div>
            <InfoTag distance={filterPlanet[0].distance} />
          </div>
        </div>
        <div>
          <img
            style={{
              height: "336px",
            }}
            src={filterPlanet[0].url}
            alt=""
          />
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "white",
          marginTop: "50px",
        }}
      />
      <div>
        <p
          style={{
            fontSize: "26px",
            fontWeight: "600",
            color: "white",
            textAlign: "center",
            padding: "30px 0px",
          }}
        >
          Other Planets
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            paddingTop: "50px",
          }}
        >
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {PlanetsData.map((el, idx) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SwiperSlide
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div onClick={() => setName(el.name)} key={el.id}>
                      <CardPlanets
                        key={el.id}
                        name={el.name}
                        url={el.url}
                        backgroundColor="#3272E0"
                      />
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Planets;
