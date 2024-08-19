import MainSection from "../mainsection/MainSection";
import VideoDetails from "../mainsection/VideoDetails";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { MdDataSaverOn } from "react-icons/md";
import Line from "../sharedCommpenets/Line";
import Button from "../sharedCommpenets/Button";
import Comment from "../comment/Comment";
function Video({ data }) {
  return (
    // Video Page
    <div className="flex flex-col lg:flex-row justify-between gap-10 h-[calc(100vh-70px)]  overflow-y-scroll scrollbar-hide">
      {/* Two Section Right for video and comments and left for Recommendation video */}
      <div className="flex-1 p-4">
        {/* This for Right Section */}
        <div className="flex flex-col gap-2">
          {/* Video Show using url link */}
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/fbEBXkn5JsU"
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl w-full h-[250px] sm:h-[360px] md:h-[480px] lg:h-[540px] xl:h-[720px]"
          ></iframe>

          {/* this Section Descripe all data about video */}
          <div className="flex flex-col gap-2 text-white">
            {/* Name of video */}
            <h1 className="text-white text-xl sm:text-3xl font-bold">
              {data[0].name}
            </h1>
            {/* This container have image of channel, Subscruption buttom, Likes and dislikes buttom */}
            <div className="flex justify-between items-center gap-5 sm:flex-row flex-wrap">
              {/* Adjusted Flex Container */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                  <img
                    src={data[0].channelImage}
                    className="w-10 h-10 rounded-full cursor-pointer"
                    alt={`${data[0].channel} logo`}
                  />
                  {/* Added gap and alignment */}
                  <div className="flex flex-col">
                    <p className="font-medium">{data[0].channel}</p>
                    <p className="text-xs text-gray-400">
                      {data[0].subscription}
                    </p>
                  </div>
                </div>
                <div>
                  <Button>Subscribe</Button>
                </div>
              </div>
              <div className="flex justify-between gap-5 flex-wrap">
                <div className="flex items-center gap-1  ">
                  <AiOutlineLike
                    className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer focus:text-white active:scale-110 transition-colors duration-200 ease-in-out"
                    tabIndex="0"
                  />
                  <p className="text-gray-300 text-xs">192</p>
                </div>

                <div className="flex items-center gap-1  ">
                  <AiOutlineDislike
                    className="w-6 h-6 sm: text-gray-400 cursor-pointer hover:text-white focus:text-white active:scale-110 transition-colors duration-200 ease-in-out"
                    tabIndex="0"
                  />
                  <p className="text-gray-300 text-xs">Dislike</p>
                </div>

                <div className="flex items-center gap-1 ">
                  <FaShare
                    className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer focus:text-white active:scale-110 transition-colors duration-200 ease-in-out"
                    tabIndex="0"
                  />
                  <p className="text-gray-300 text-xs">Share</p>
                </div>

                <div className="flex items-center gap-1 ">
                  <MdDataSaverOn
                    className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer focus:text-white active:scale-110 transition-colors duration-200 ease-in-out"
                    tabIndex="0"
                  />
                  <p className="text-gray-300 text-xs">Save</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* This just line */}
        <Line />
        <div className="bg-gray-800 p-5 flex items-start gap-1 flex-col rounded-3xl mt-5">
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <p>{data[0].views} views</p>
            <p className="font-bold">&bull;</p>
            <p>{data[0].history}</p>
          </div>
          <p className="text-white">{data[0].description}</p>
        </div>
        {/* Comments Section */}
        <div className="flex flex-col gap-5 mt-5  mb-5">
          <p className="text-xl text-white font-bold">266 Comments</p>
          {/* Input Comment Section */}
          <div className="flex items-center gap-5">
            {/* Image of user how comments on video */}
            <div className="h-10 w-10 p-5 bg-green-600 flex justify-center items-center font-bold text-white rounded-full text-xl">
              P
            </div>
            <input
              type="text"
              placeholder="Enter you comment..."
              className="w-full bg-black focus:border-b-2 px-5 py-2 text-white  focus:outline-none transition-transform duration-200 ease-in-out"
            />
          </div>
          {/* 2 buttoms for cancel and comment */}
          <div className="flex gap-5 flex-wrap items-center justify-end">
            <Button>Cancel</Button>
            <Button>Comment</Button>
          </div>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
      {/* This left section */}
      <div className="flex flex-col items-center ">
        {data.map((data, index) => (
          <div className="my-4 " key={index}>
            <VideoDetails data={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video;
