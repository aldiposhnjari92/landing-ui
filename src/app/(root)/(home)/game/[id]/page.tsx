"use client";

import { useParams } from "next/navigation";

const GameDetailPage = () => {
  const { id } = useParams();

  return <>game detail {id}</>;
};

export default GameDetailPage;
