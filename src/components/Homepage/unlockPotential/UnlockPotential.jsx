/** @format */

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import homeStyle from "./UnlockPotential.module.css";
import bulb from "@/assets/homepage/bulb.png";
import homepic01 from "@/assets/homepage/homepagepic.png";
import iconPicOne from "@/assets/homepage/smallPicOne.png";
import iconPicTwo from "@/assets/homepage/smallPicTwo.png";
import iconPicThree from "@/assets/homepage/smallPicThree.png";
import flowtingBtn from "@/assets/homepage/flowtingBtn.png";
import flowtingBtn2 from "@/assets/homepage/degreeCap.png";
import yellowLine from "@/assets/homepage/yellowLine.png";

const UnlockPotential = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/courses");
  };

  return (
    <div className="main-container container-fluid" id="forFooterBtn">
      <div
        className={`row containerFluidForPadding bg-body-tertiary forHoverEffect`}
      >
        <div className={`col-md-6 col-lg-6 col-xl-6 ${homeStyle.homeLeftSide}`}>
          <div>
            <div className="d-flex">
              <span className={homeStyle.bulbSpan}>
                <Image src={bulb} alt="Bulb"/>
              </span>
              <p className={homeStyle.blueText}>
                Your Journey To a Dream Job Starts Here
              </p>
            </div>
            <p className={homeStyle.title}>
              Unlock Your Potential with SocialPrachar
            </p>
            <Image
              src={yellowLine}
              alt="Yellow Line"
              className={homeStyle.yellowLine}
            />
            <p className="greyText">
              Discover a world of knowledge and opportunities with our Mentor
              job-ready courses.
            </p>

            <div className="row mt-4">
              <div className="col-12 col-sm-12 col-xl-5">
                {/* <ArrowButton ArrowText="View All Courses" handleClick={handleClick} /> */}
              </div>
              <div className="col-12 col-sm-12 col-xl-6 d-flex justify-content-around">
                <div className={`${homeStyle.imgIcons} d-flex`}>
                  <Image src={iconPicOne} alt="Icon 1" />
                  <Image
                    src={iconPicTwo}
                    alt="Icon 2"
                    className={homeStyle.secondIconImg}
                  />
                  <Image
                    src={iconPicThree}
                    alt="Icon 3"
                    className={homeStyle.thirdIconImg}
                  />
                  <div className={homeStyle.plusIcon}>+</div>
                </div>
                <div>
                  <p className={homeStyle.studentNoText}>16k students</p>
                  <p className="greyText">Strong Alumni</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${homeStyle.homeRightSide} col-md-6 col-lg-6 col-xl-6`}
        >
          <div className={homeStyle.forFlowingBtn}>
            <div className={homeStyle.flowtingLeftBtn}>
              <Image src={flowtingBtn} alt="Floating Button" />
              <div>
                <span className={homeStyle.flowtingBtnFirst}>4.8</span>
                <br />
                <span className={homeStyle.flowtingBtnGreyText}>
                  {"("}4.8k reviews{")"}
                </span>
              </div>
            </div>

            <div className={homeStyle.flowtingRightBtn}>
              <Image src={flowtingBtn2} alt="Degree Cap" />
              <div>
                <span className={homeStyle.flowtingBtnFirst}>20+</span>
                <br />
                <span className={homeStyle.flowtingBtnGreyText}>
                  {"("}job-ready courses{")"}
                </span>
              </div>
            </div>
          </div>
          <Image
            src={homepic01}
            alt="homepic"
            className={homeStyle.homePic}
          />
        </div>
      </div>
    </div>
  );
};

export default UnlockPotential;
