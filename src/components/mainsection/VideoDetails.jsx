import { Link } from "react-router-dom";
import { format } from "timeago.js";
function VideoDetails({ data }) {
  return (
    <div className="flex flex-col items-start text-white gap-2 ">
      <div className="relative w-full h-[202px] ">
        <Link to="/video/test">
          <img
            src={data.thubmail}
            className="w-full h-full object-cover cursor-pointer rounded-md"
          />
          <p className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
            {data.time}
          </p>
        </Link>
      </div>
      <div className="flex justify-between items-start gap-2">
        <div>
          <img
            src={data.channelImage}
            className="w-9 h-9 rounded-full cursor-pointer"
            alt={`${data.channel} logo`}
          />
        </div>
        <div className="flex flex-col gap-1">
          {" "}
          {/* Adjusted gap for tighter layout */}
          <Link to="/video/test">
            <p className="text-xl sm:text-[16px] md:text-[18px] cursor-pointer">
              {data.name}
            </p>
          </Link>
          <span className="text-sm text-gray-300 cursor-pointer">
            {data.channel}
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <p>{data.views} views</p>
            <p className="font-bold">&bull;</p>
            <p>{data.history}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
