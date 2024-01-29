import { useState, useEffect } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const hours = currentTime.getHours().toString();
  const minutes = currentTime.getMinutes().toString();

  return (
    <div>{`${hours}:${minutes.length === 1 ? "0" + minutes : minutes}`}</div>
  );
};

export { Time };
