import VideoDetails from "./VideoDetails";

function MainSection({ video }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-10 gap-x-5 grid-auto-rows-auto overflow-y-scroll scrollbar-hide">
      {video.map((data, index) => (
        <VideoDetails key={index} data={data} />
      ))}
    </div>
  );
}

export default MainSection;
