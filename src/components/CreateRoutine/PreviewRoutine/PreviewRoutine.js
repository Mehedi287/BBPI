import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import bannerIcon from "../../../images/banner-icon2-removebg-preview.png";
import React from "react";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import SubjectIcon from "@mui/icons-material/Subject";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import bannerBG from "../../../images/banner1.png";
import { blue, green, orange, pink, purple } from "@mui/material/colors";

const PreviewRoutine = ({ mainData, watch, setValue }) => {
  const colors = [
    { bg: "#f2fcf0", text: "#05f51e" },
    { bg: "#f2e9e1", text: "#fa7602" },

    { bg: "#ebecf7", text: "#0c13f7" },
    { bg: "#f7edf1", text: "#f5077e" },
    { bg: "#edf7f7", text: "#04bec4" },
    { bg: "#fcf0fb", text: "#c702c7" },
  ];
  const handleClick = () => {
    console.log("lciasdfjl");
  };
  console.log(setValue);
  const { department, institute, section, semester, shift } = mainData;
  console.log("====================================");
  console.log(mainData);
  console.log("====================================");
  return (
    <div className=" ">
      <Box className=" bg-cover rounded-xl bg-fuchsia-50 shadow-sm p-5 text-center  ">
        <h2 className="text-2xl font-bold  mb-3">{institute}</h2>
        <h3 className="mb-2">
          Department:{" "}
          <span className="bg-purple-200 p-1 px-2 rounded-md font-medium ">
            {department}
          </span>
        </h3>
        <h3 className="mb-2">
          Semester:{" "}
          <span className="bg-purple-200 p-1 px-2 rounded-xl font-medium ">
            {semester}
          </span>
        </h3>
        <h3 className="mb-2">
          Section:{" "}
          <span className="bg-purple-200 p-1 px-2 rounded-xl  font-medium ">
            {section}
          </span>
        </h3>
        <h3 className="mb-2">
          Shift:{" "}
          <span className="bg-purple-200 p-1 px-2 rounded-xl  font-medium ">
            {shift}
          </span>
        </h3>
      </Box>
      <div className="flex">
        <div className=" p-4 flex-0 ">
          <h3
            className=" rounded-full ...   m-3 bg-slate-50 px-10 py-3 font-extrabold  text-2xl hover:bg-slate-200 hover:cursor-pointer shadow-sm  active:bg-#f0f5f5-700 focus:outline-none focus:ring focus:ring-gray-300 "
            onClick={handleClick}
          >
            Sat
          </h3>
          <h3 className="rounded-full ...   m-3 bg-slate-50 px-10 py-3 font-extrabold  text-2xl hover:bg-slate-200 hover:cursor-pointer shadow-sm  active:bg-#f0f5f5-700 focus:outline-none focus:ring focus:ring-gray-300 ">
            Sun
          </h3>
          <h3 className="rounded-full ...  m-3 bg-slate-50 px-10 py-3 font-extrabold  text-2xl hover:bg-slate-200 hover:cursor-pointer shadow-sm  active:bg-#f0f5f5-700 focus:outline-none focus:ring focus:ring-gray-300 ">
            Mon
          </h3>
          <h3 className="rounded-full ...   m-3 bg-slate-50 px-10 py-3 font-extrabold  text-2xl hover:bg-slate-200 hover:cursor-pointer shadow-sm  active:bg-#f0f5f5-700 focus:outline-none focus:ring focus:ring-gray-300 ">
            Tue
          </h3>
          <h3 className="rounded-full ...  m-3 bg-slate-50 px-10 py-3 font-extrabold  text-2xl hover:bg-slate-200 hover:cursor-pointer shadow-sm  active:bg-#f0f5f5-700 focus:outline-none focus:ring focus:ring-gray-300 ">
            Wed
          </h3>
          <h3 className="rounded-full ...  m-3 bg-slate-50 px-10 py-3 font-extrabold  text-2xl hover:bg-slate-200 hover:cursor-pointer shadow-sm  active:bg-#f0f5f5-700 focus:outline-none focus:ring focus:ring-gray-300 ">
            Thu
          </h3>
          <h3 className="rounded-full ...  m-3 bg-slate-50 px-10 py-3 font-extrabold  text-2xl hover:bg-slate-200 hover:cursor-pointer shadow-sm  active:bg-#f0f5f5-700 focus:outline-none focus:ring focus:ring-gray-300 ">
            Fri
          </h3>
        </div>
        <div className="  shadow-md p-4 mt-5  flex-auto w-100 sm:w-75">
          {colors.map((color) => (
            <Box
              className="rounded-md m-3"
              color={color.text}
              style={{
                backgroundColor: color.bg,
                margineBottom: 10,
              }}
            >
              <div className="p-4 rounded shadow-sm  text-xl ">
                <div className="mb-2">
                  <span className="mb-3 font-bold ">1</span>
                </div>
                <div className=" mb-2">
                  <div className="  ">
                    <div className="flex  mt-2 text-bold">
                      {" "}
                      <SubjectIcon></SubjectIcon>
                      <p className="ml-2"> Math</p>
                    </div>
                    <p className="text-sm">code</p>
                  </div>
                  <div className="flex text-medium   text-sm mt-2">
                    <RecentActorsIcon></RecentActorsIcon>
                    <h2 className="ml-2">Nur Nahar</h2>
                  </div>
                </div>

                <div className="justify-content-between flex mt-3  text-bold">
                  <AccessTimeIcon></AccessTimeIcon>
                  <p className="ml-2">08:45-09:45</p>
                </div>
              </div>{" "}
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewRoutine;
