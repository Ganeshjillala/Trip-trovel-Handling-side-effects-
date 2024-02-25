import { useEffect, useState } from "react";
export default function Progresstimer() {
  const [remainTime, setremainTime] = useState(3000);
  //shows the progress of timer
  useEffect(() => {
    const interval = setInterval(() => {
      setremainTime((prevtime) => prevtime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainTime} max={3000} />;
}
