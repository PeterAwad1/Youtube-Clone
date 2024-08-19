import { useEffect, useState } from "react";
import MainSection from "../mainsection/MainSection";
import axios from "axios";

const HomePage = ({ video }) => {
  return (
    <div>
      <MainSection video={video} />
    </div>
  );
};

export default HomePage;
