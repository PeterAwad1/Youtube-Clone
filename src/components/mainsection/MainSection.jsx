import VideoDetails from "./VideoDetails";

const video = [
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "London",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "London",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "Landan",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "Landan",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "Landan",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "Landan",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "Landan",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
  },
  {
    thubmail: "./../../../public/thubmail.jpg",
    time: "30:23",
    name: "Landan",
    channel: "Englend",
    views: "234k",
    history: "1 year ago",
    channelImage: "./../../../public/ChannelImage.jpg",
  },
];
function MainSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-[calc(100vh-70px)] overflow-y-scroll scrollbar-hide">
      {video.map((data, index) => (
        <VideoDetails key={index} data={data} />
      ))}
    </div>
  );
}

export default MainSection;
