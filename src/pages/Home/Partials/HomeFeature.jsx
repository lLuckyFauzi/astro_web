import React from "react";
import Earth from "/image/earth.png";
import BackgroundFeature from "/image/backgroundFeature.png";
import JurneyAstro from "/image/jurneyAstro.png";
import Alien from "/image/alien.png";
import Meteor from "/image/meteor.png";
import StarFeature from "/image/starFeature.png";
import Button from "../../../components/Button/Button";

const HomeFeature = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        marginTop: "110px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: "900px",
            borderRadius: "20px",
            padding: "65px 60px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Home Features
            </p>
            <p
              style={{
                fontWeight: "400",
                fontSize: "16px",
                width: "150px",
                paddingTop: "20px",
              }}
            >
              Planets and ISS Satelite tracker.
            </p>
          </div>
          <hr
            style={{
              height: "100px",
              width: "1px",
              backgroundColor: "black",
              borderRadius: "50px",
              border: "none",
            }}
          />
          <div>
            <img
              src={Earth}
              alt=""
              style={{
                height: "65px",
              }}
            />
            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              Planets
            </p>
          </div>
          <hr
            style={{
              height: "100px",
              width: "1px",
              backgroundColor: "black",
              borderRadius: "50px",
              border: "none",
            }}
          />
          <div>
            <img
              src={Earth}
              alt=""
              style={{
                height: "65px",
              }}
            />
            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              Planets
            </p>
          </div>
          <hr
            style={{
              height: "100px",
              width: "1px",
              backgroundColor: "black",
              borderRadius: "50px",
              border: "none",
            }}
          />
          <div>
            <img
              src={Earth}
              alt=""
              style={{
                height: "65px",
              }}
            />
            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              Planets
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          src={BackgroundFeature}
          alt=""
          style={{
            height: "100%",
            position: "absolute",
            right: "0px",
            zIndex: "-10",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              marginRight: "150px",
              marginTop: "100px",
            }}
          >
            <div
              style={{
                marginLeft: "35px",
              }}
            >
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "30px",
                }}
              >
                Ready for the jurney
              </p>
              <p
                style={{
                  color: "#00286D",
                  fontWeight: "700",
                  fontSize: "20px",
                }}
              >
                Astro?
              </p>
            </div>
            <img
              src={JurneyAstro}
              alt=""
              style={{
                height: "400px",
              }}
            />
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Button>Let's Go</Button>
            </div>
          </div>
        </div>
        <img
          src={Alien}
          alt=""
          style={{
            height: "550px",
            position: "absolute",
            left: "190px",
            bottom: "100px",
          }}
        />
        <img
          src={Meteor}
          alt=""
          style={{
            position: "absolute",
            height: "150px",
            left: "500px",
            top: "100px",
          }}
        />
        <img
          src={Meteor}
          alt=""
          style={{
            position: "absolute",
            height: "150px",
            left: "100px",
            bottom: "100px",
          }}
        />
        <img
          src={StarFeature}
          alt=""
          style={{
            position: "absolute",
            top: "100px",
            left: "400px",
            height: "400px",
          }}
        />
      </div>
    </div>
  );
};

export default HomeFeature;
