import { useRef, useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarChar({ hour }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
    window.addEventListener("resize", () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    });
  }, []);
  return (
    <div ref={containerRef}>
      <BarChart
        sx={{
          "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
            strokeWidth: "0.4",
            fill: "#fff9",
          },
          "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
            strokeWidth: "0.4",
            fill: "#fff9",
          },
        }}
        xAxis={[
          {
            id: "barCategories",
            data: hour === false 
              ? [
                  "12 am",
                  "1 am",
                  "2 am",
                  "3 am",
                  "4 am",
                  "5 am",
                  "6 am",
                  "7 am",
                  "8 am",
                  "9 am",
                  "10 am",
                  "11 am",
                  "12 pm",
                ]
              : 
              [
                  "Ago 1",
                  "Ago 2",
                  "Ago 3",
                  "Ago 4",
                  "Ago 5",
                  "Ago 6",
                  "Ago 7",
                  "Ago 8",
                  "Ago 9",
                  "Ago 10",
                  "Ago 11",
                  "Ago 12",
                  "Ago 13",
                  
                ]
             ,
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [
              55, 122, 553, 260, 155, 90, 369, 208, 159, 70, 939, 280, 185,
            ],
            color: "#d9435f",
          },
        ]}
        width={Number(width)}
        height={300}
      />
    </div>
  );
}
