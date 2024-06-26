import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { Carousel, Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { RiTableAltFill } from "react-icons/ri";

const Home = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <>
      <div className="max-w-[1200px] mx-auto ">
        <div className="w-full h-724 sm:h-[724px] xl:h-[724px] 2xl:h-[724px]">
          <Carousel slide={true}>
            <div
              style={{
                position: "relative",
                width: "1200px",
                height: "724px",
                zIndex: "1",
                marginLeft: "0px",
              }}
            >
              <img
                src={require(`./pic1.jpg`)}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  left: "-15px",
                  zIndex: "2",
                }}
              >
                <img
                  src={require(`./web_logo.png`)}
                  alt=""
                  style={{ width: "300px" }}
                />
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "200",
                    fontStyle: "italic",
                    fontSize: "80px",
                    textAlign: "center",
                    marginTop: "-230px",
                    marginLeft: "555px",
                    color: "#FFFFFF",
                  }}
                >
                  Burger n’ Beer
                </p>
                <div
                  style={{
                    top: "200px",
                    left: "165px",
                    width: "890px",
                    height: "90px",
                    position: "relative",
                    zIndex: "1",
                    backgroundColor: "#171916",
                    opacity: "0.65",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <p
                    style={{
                      width: "830px",
                      height: "90px",
                      fontWeight: "600",
                      fontSize: "20px",
                      textAlign: "center",
                      lineHeight: "1.5",
                      color: "#fff",
                      position: "absolute",
                      top: "65%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {" "}
                    A restaurant in 31 An Thuong 4, Da Nang, specializing in
                    burgers, sandwiches, hotdogs, pizza, and fried, is proudly
                    family-owned and centrally situated in the heart of the
                    city.
                  </p>
                </div>

                <div>
                  <div className="flex mt-[225px] ml-[355px]">
                    <Link to="/product">
                      <Button className="w-[250px] mr-[20px]" color="dark">
                        <HiShoppingCart
                          className="mr-2 h-7 w-7"
                          style={{ cursor: "pointer" }}
                        />
                        <p class="text-lg font-sans font-bold justify-center items-center">
                          Order Now
                        </p>
                      </Button>
                    </Link>
                    <Link to="/booking">
                      <Button className="w-[250px]" color="dark">
                        <RiTableAltFill
                          className="mr-2 h-7 w-7"
                          style={{ cursor: "pointer" }}
                        />
                        <p class="text-lg font-sans font-bold justify-center items-center">
                          Reservations
                        </p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link to='/producttt'>
            <img className="w-[1200px] h-[724px]" src={require(`../../assets/image/home/3.jpg`)} alt="..." />
            </Link>
            
            <Link to='/voucherrr'>
            <img className="w-[1200px] h-[724px]" src={require(`../../assets/image/home/2.jpg`)} alt="..." />
            </Link>
            <img className="w-[1200px] h-[724px]" src={require(`../../assets/image/home/1.jpg`)} alt="..." />
            
          </Carousel>
        </div>

        <div
          style={{
            width: "1200px",
            left: "158px",
            paddingTop: "30px",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <Link to="/producttt">
              {" "}
              <span style={{ cursor: "pointer" }}>
                <img
                  src={require("./1.jpg")}
                  alt=""
                  style={{ width: "380px", height: "380px" }}
                />
              </span>
            </Link>
            <Link to="/producttt">
              <span style={{ cursor: "pointer" }}>
                <img
                  src={require("./2.jpg")}
                  alt=""
                  style={{ width: "380px", height: "380px" }}
                />
              </span>
            </Link>
            <Link to="/producttt">
              <span style={{ cursor: "pointer" }}>
                <img
                  src={require("./3.jpg")}
                  alt=""
                  style={{ width: "380px", height: "380px" }}
                />
              </span>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <Link to="/producttt">
              <span style={{ cursor: "pointer" }}>
                <img
                  src={require("./4.jpg")}
                  alt=""
                  style={{ width: "380px", height: "380px" }}
                />
              </span>
            </Link>
            <Link to="/producttt">
              <span style={{ cursor: "pointer" }}>
                <img
                  src={require("./5.jpg")}
                  alt=""
                  style={{ width: "380px", height: "380px" }}
                />
              </span>
            </Link>
            <Link to="/producttt">
              <span style={{ cursor: "pointer" }}>
                <img
                  src={require("./6.jpg")}
                  alt=""
                  style={{ width: "380px", height: "380px" }}
                />
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-8">
            <img
              className="mx-auto"
              src={require("./lgburger.jpg")}
              alt=""
              style={{ width: "114px", height: "114px" }}
            />
            <Link to="/producttt">
              <span>
                <div
                  style={{
                    cursor: "pointer",
                    width: "346px",
                    height: "85px",
                    marginLeft: "425px",
                    //marginTop: '-870px',
                    background: "rgba(0, 0, 0, 0.81)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "15px",
                    transform: "matrix(1, 0, 0, 1, 0, 0)",
                  }}
                >
                  <p
                    style={{
                      position: "absolute",
                      cursor: "pointer",
                      width: "346px",
                      height: "85px",
                      left: "70px",
                      top: "0px",
                      fontFamily: '"Inter", sans-serif',
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "30px",
                      lineHeight: "39px",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    className="text-white hover:text-red-500"
                  >
                    {" "}
                    View Our Menu
                  </p>
                </div>
              </span>
            </Link>
          </div>
          <div className="mb-4 w-[960px] h-[200px] relative bg-[#066515cf] mt-40 rounded-2xl translate-x-60">
            <div>
              <p
                style={{
                  position: "absolute",
                  width: "960px",
                  height: "200px",
                  left: "225px",
                  top: "-53px",
                  fontFamily: '"Inter", sans-serif',
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "22px",
                  lineHeight: "39px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                {" "}
                FROM HOMEMADE RECIPES TO CUSTOMER FAVORITES
              </p>
              <p
                style={{
                  position: "absolute",
                  width: "859px",
                  height: "200px",
                  left: "100px",
                  top: "28px",
                  fontFamily: '"Inter", sans-serif',
                  fontStyle: "extra-light italic",
                  fontWeight: "200",
                  fontSize: "20px",
                  lineHeight: "29px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                {" "}
                Their first foray into burgers started 10 years ago. Now, the
                two Burger Bros are teaming up to bring 100% Angus beef burgers,
                shakes, wings, and fries to their community. Because when hunger
                strikes, there’s nothing like a good old-fashioned burger!
              </p>
              <img
                src={require("./pic2.jpg")}
                alt=""
                style={{
                  height: "700px",
                  position: "absolute",
                  left: "-240px",
                  top: "-410px",
                  zIndex: 1,
                }}
              />
            </div>
          </div>
          <div className="mb-4 w-[960px] h-[200px] relative bg-[#b81a1acf] rounded-2xl mt-36">
            <div>
              <p
                style={{
                  position: "absolute",
                  width: "960px",
                  height: "200px",
                  left: "280px",
                  top: "-55px",
                  fontFamily: '"Inter", sans-serif',
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "22px",
                  lineHeight: "39px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                {" "}
                OUR HAPPY CUSTOMERS
              </p>
              <p
                style={{
                  position: "absolute",
                  width: "750px",
                  height: "200px",
                  left: "10px",
                  top: "20px",
                  fontFamily: '"Inter", sans-serif',
                  fontStyle: "extra-light italic",
                  fontWeight: "200",
                  fontSize: "20px",
                  lineHeight: "29px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                {" "}
                Have been there several times now. I am always impressed with
                the service and food quality. All of the employees are young but
                they are professional and do a great job. I have never had a bad
                meal there. Great burger and sandwiches.
              </p>
              <img
                src={require("./pic3.jpg")}
                alt=""
                style={{
                  position: "absolute",
                  top: "-240px",
                  right: "-240px",
                  height: "453px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
