/** @format */
"use client"
import React, { useEffect, useRef, useState } from "react";
import style from "@/app/success-stories/SuccessStories.module.css";

const SuccessStoriesReader = () => {
  const [studentsEnrolled, setStudentsEnrolled] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [completionRating, setCompletionRating] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCount(setStudentsEnrolled, 17, 1000);
            animateCount(setAverageRating, 4.9, 1000);
            animateCount(setCompletionRating, 86, 1000);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasAnimated]);

  const animateCount = (setter, target, duration) => {
    let start = 0;
    const increment = target / (duration / 50);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(interval);
      } else {
        setter(Math.round(start * 10) / 10);
      }
    }, 50);
  };

    const scrollRef = useRef(null);
    const handleMouseMove = (e) => {
      const container = scrollRef.current;
      if (container) {
        container.scrollLeft += e.movementX;
      }
    };
    const [filter, setFilter] = useState("All");
    // Function to handle filter change
    const handleFilterChange = (category) => {
      setFilter(category);
    };
    const filteredAchievements = ourAchievements.filter((achievement) => {
      if (filter === "All") return true;
      return achievement.category === filter;
    });


  return (
    <div>
      <div className={style.topContent}>
        <div className={style.insights}>
          <p className={`${style.insightsHeader} text-center mb-4`}>
            16000+ Success Stories Since 2014
          </p>
          <div className="container">
            <div
              className={`${style.wholeInsights} row justify-content-center g-3`}
            >
              <div className="col-md-4 col-sm-4 col-12 d-flex flex-column">
                <div
                  className={`${style.insideBox} p-4 text-center rounded shadow-sm w-100`}
                >
                  <p>
                    <strong>127 %</strong> <br />
                    Average Placement Hike
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-12 d-flex align-items-stretch">
                <div
                  className={`${style.insideBox} p-4  text-center rounded shadow-sm w-100`}
                >
                  <p>
                    <strong>8 Lakh</strong> <br />
                    Average CTC
                  </p>
                </div>
              </div>
              <div className=" col-md-4 col-sm-4 col-12 d-flex align-items-stretch">
                <div
                  className={`${style.insideBox} p-4 text-center rounded shadow-sm w-100`}
                >
                  <p>
                    <strong>21 LPA</strong> <br />
                    Highest CTC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${style.statsContainer} container mt-4`}>
          <div
            className={`${style.statsContainer} row justify-content-center`}
            ref={statsRef}
          >
            <div className="col-12 col-md-4 text-center mb-3">
              <div className={`${style.stat}`}>
                <span className={`${style.statValue} fs-2 fw-bold text-black`}>
                  {studentsEnrolled.toLocaleString()}000+
                </span>
                <p className={`${style.statLabel} mt-2`}>Students Alumini</p>
              </div>
            </div>

            <div className="col-12 col-md-4 text-center mb-3">
              <div className={`${style.stat}`}>
                <span className={`${style.statValue} fs-2 fw-bold text-black`}>
                  {averageRating}/5
                </span>
                <p className={`${style.statLabel} mt-2`}>Average Rating</p>
              </div>
            </div>

            {screenWidth > 790 && (
              <div className="col-12 col-md-4 text-center mb-3">
                <div className={`${style.stat}`}>
                  <span
                    className={`${style.statValue} fs-2 fw-bold text-black`}
                  >
                    {completionRating}%
                  </span>
                  <p className={`${style.statLabel} mt-2`}>Completion Rating</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "60vh" }}
        >
          <div className="text-center">
            <p
              className={`${style.leadHeading} lead text-muted mb-4 text-center`}
            >
              From Aspiration to Achievement <br />
              <span
                style={{
                  color: "#553cdf",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                Our Success Stories
                {/* <div data-aos="fade-right">
                  <img
                    src={redline}
                    alt=""
                    style={{
                      display: "block",
                      margin: "0 auto",
                      position: "absolute",
                      top: -15,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "100%",
                      height: "50px",
                    }}
                  />
                </div> */}
              </span>
            </p>

            <p className={`${style.Headercontent} text-dark`}>
              Explore the inspiring success stories of our students at Social
              Prachar, where exceptional results and achievements take center
              stage. Witness their transformative journeys, groundbreaking
              accomplishments, and firsthand experiences that showcase the power
              of learning and growth with us.
            </p>
          </div>
        </div>

        <div>
          {/* Filter Buttons */}
          <div
            className={`${style.filterButtons} d-flex justify-content-center my-3`}
          >
            <div className={style.btn_group}>
              <button
                type="button"
                className={style.btn}
                onClick={() => handleFilterChange("Full Stack Java")}
              >
                Full Stack Java
              </button>
              <button
                type="button"
                className={style.btn}
                onClick={() => handleFilterChange("Full Stack Python")}
              >
                Full Stack Python
              </button>
              <button
                type="button"
                className={style.btn}
                onClick={() => handleFilterChange("Data Science")}
              >
                Data Science
              </button>
              <button
                type="button"
                className={style.btn}
                onClick={() => handleFilterChange("Digital Marketing")}
              >
                Digital Marketing
              </button>
              <button
                type="button"
                className={style.btn}
                onClick={() => handleFilterChange("All")}
              >
                Show All
              </button>
            </div>
          </div>

          {/* OurAchievements */}
          <div className="container py-4">
            <div
              className={`d-flex flex-column ${style.hide_scrollbar}`}
              style={{
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              <div
                className="d-flex flex-column"
                style={{
                  gap: "25px",
                }}
              >
                {/* First Row */}
                <div
                  className="d-flex flex-nowrap"
                  style={{
                    scrollbarWidth: "thin",
                    gap: "25px",
                  }}
                >
                  {filteredAchievements
                    .filter((_, index) => index % 2 !== 0)
                    .map((achievement, index) => (
                      <div
                        key={index}
                        className="card text-center p-3 shadow-sm"
                        style={{
                          minWidth: "320px",
                          height: "250px",
                          borderRadius: "12px",
                        }}
                      >
                        <div className="d-flex text-start">
                          <div>
                            <img
                              src={achievement.profileImage}
                              alt={achievement.name}
                              className="rounded-circle mb-2"
                              style={{
                                width: "80px",
                                height: "80px",
                                border: "4px solid #553cdf",
                                marginRight: "16px",
                              }}
                            />
                          </div>
                          <div>
                            <h5 className="card-title">{achievement.name}</h5>
                            <p
                              className="text-muted mb-2"
                              style={{ fontSize: "14px" }}
                            >
                              {achievement.role}
                            </p>
                            <span
                              className="badge py-1 px-3"
                              style={{
                                color: "#553cdf",
                                borderRadius: "12px",
                                fontSize: "12px",
                                background: "#543cdf31",
                              }}
                            >
                              {achievement.hike}
                            </span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-around align-items-center mt-3">
                          <div>
                            <p
                              className="text-muted mb-0"
                              style={{ fontSize: "14px" }}
                            >
                              Pre Social Prachar
                            </p>
                            <img
                              src={achievement.preCompany}
                              alt="Previous Company Logo"
                              style={{ width: "auto", height: "30px" }}
                            />
                          </div>
                          <div>
                            <i className="bi bi-arrow-right"></i>
                          </div>
                          <div>
                            <p
                              className="text-muted mb-0"
                              style={{ fontSize: "14px" }}
                            >
                              Post Social Prachar
                            </p>
                            <img
                              src={achievement.postCompany}
                              alt="Previous Company Logo"
                              style={{ width: "auto", height: "30px" }}
                            />
                          </div>
                        </div>
                        <hr className="my-0" />
                        <p
                          className="text-muted mb-0"
                          style={{ fontSize: "14px" }}
                        >
                          started from <br />
                          <strong className="text-dark">
                            {achievement.startCompanyType}
                          </strong>
                        </p>
                      </div>
                    ))}
                </div>
                {/* Second Row */}
                <div
                  className="d-flex flex-nowrap"
                  style={{
                    scrollbarWidth: "thin",
                    gap: "25px",
                  }}
                >
                  {filteredAchievements
                    .filter((_, index) => index % 2 === 0)
                    .map((achievement, index) => (
                      <div
                        key={index}
                        className="card text-center p-3 shadow-sm"
                        style={{
                          minWidth: "320px",
                          height: "250px",
                          borderRadius: "12px",
                        }}
                      >
                        <div className="d-flex text-start">
                          <div>
                            <img
                              src={achievement.profileImage}
                              alt={achievement.name}
                              className="rounded-circle mb-2"
                              style={{
                                width: "80px",
                                height: "80px",
                                border: "4px solid #553cdf",
                                marginRight: "16px",
                              }}
                            />
                          </div>
                          <div>
                            <h5 className="card-title">{achievement.name}</h5>
                            <p
                              className="text-muted mb-2"
                              style={{ fontSize: "14px" }}
                            >
                              {achievement.role}
                            </p>
                            <span
                              className="badge py-1 px-3"
                              style={{
                                color: "#553cdf",
                                borderRadius: "12px",
                                fontSize: "12px",
                                background: "#543cdf31",
                              }}
                            >
                              {achievement.hike}
                            </span>
                          </div>
                        </div>
                        <div
                          className="d-flex justify-content-around align-items-center mt-4"
                          style={{ position: "relative", top: "-8px" }}
                        >
                          <div>
                            <p
                              className="text-muted mb-0"
                              style={{ fontSize: "14px" }}
                            >
                              Pre Social Prachar
                            </p>
                            <img
                              src={achievement.preCompany}
                              alt="Previous Company Logo"
                              style={{ width: "auto", height: "30px" }}
                            />
                          </div>
                          <div>
                            <i className="bi bi-arrow-right"></i>
                          </div>
                          <div>
                            <p
                              className="text-muted mb-0"
                              style={{ fontSize: "14px" }}
                            >
                              Post Social Prachar
                            </p>
                            <img
                              src={achievement.postCompany}
                              alt="Previous Company Logo"
                              style={{ width: "auto", height: "30px" }}
                            />
                          </div>
                        </div>
                        <hr className="my-0" />
                        <p
                          className="text-muted mb-0"
                          style={{ fontSize: "14px" }}
                        >
                          started from <br />
                          <strong className="text-dark">
                            {achievement.startCompanyType}
                          </strong>
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mx-auto w-75" />
        <div className="text-center" style={{ fontSize: "18px" }}>
          <p className="fw-bold">
            SocialPrachar alumni are working in 1,100+ companies across India.
            Contact us to know more about placements!
          </p>
          <SuccessStoriesForm />
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesReader;
