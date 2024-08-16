import MainSection from "../mainsection/MainSection";

const HomePage = ({ data }) => {
  return (
    <div>
      <MainSection video={data} />
    </div>
  );
};

export default HomePage;
