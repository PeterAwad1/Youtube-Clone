function VideoDetails({ data }) {
  return (
    <div className="flex flex-col items-start text-white gap-4">
      {/* Wrapper div for the image and time */}
      <div className="relative w-full h-[250px] ">
        <img
          src={data.thubmail}
          className="w-full h-full object-cover cursor-pointer rounded-md"
        />
        <p className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
          {data.time}
        </p>
      </div>

      <div className="flex justify-between items-start gap-4">
        <div>
          <img
            src={data.channelImage}
            className="w-8 h-8 rounded-full cursor-pointer"
            alt={`${data.channel} logo`}
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <p className=" text-xl sm:text-[16px] md:text-[18px] cursor-pointer">
            {data.name}
          </p>
          <span className="text-xs text-gray-300 cursor-pointer">
            {data.channel}
          </span>
          <div className="flex items-center gap-2">
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
