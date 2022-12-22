import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import dataMap from "./dataMap";
import { StatusContainer, StatusNumber } from "./ViewForm.styled";

const score = {
  Low: {
    value: 20,
    color: "error",
  },
  Medium: {
    value: 50,
    color: "warning",
  },
  High: {
    value: 100,
    color: "success",
  },
};

const ViewForm = (props: any) => {
  const { data } = props;
  const randomScore = Math.floor(Math.random() * 100);
  const [status, setStatus] = useState<"Low" | "Medium" | "High">("Low");

  useEffect(() => {
    if (randomScore <= score.Low.value) setStatus("Low");
    if (randomScore > score.Low.value && randomScore <= score.Medium.value)
      setStatus("Medium");
    if (randomScore > score.Medium.value && randomScore <= score.High.value)
      setStatus("High");
  }, [randomScore]);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <h2 style={{ textAlign: "center" }}>Survivability</h2>
        <StatusContainer>
          <StatusNumber color={score[status].color}>{status}</StatusNumber>
          <div style={{ textAlign: "center", position: 'absolute', paddingTop: '52px' }}>{randomScore}%</div>
          <CircularProgress variant="determinate" value={100} thickness={5} />
          <CircularProgress
            variant="determinate"
            value={randomScore}
            thickness={5}
            color={score[status].color as any}
          />
        </StatusContainer>
      </div>

      <div>
        {Object.keys(data).map((element: any) => (
          <p key={element}>
            {dataMap[element]}: <strong>{data[element]}</strong>
          </p>
        ))}
      </div>
    </div>
  );
};

export default ViewForm;
