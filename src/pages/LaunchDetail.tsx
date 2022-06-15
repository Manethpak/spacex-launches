import React from "react";
import { useParams } from "react-router-dom";

const LaunchDetail = () => {
  const { id } = useParams();
  return <div>LaunchDetail {id}</div>;
};

export default LaunchDetail;
