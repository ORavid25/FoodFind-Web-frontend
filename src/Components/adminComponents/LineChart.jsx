import React from 'react';
import "chart.js/auto";
import { Line } from "react-chartjs-2";




const LineChart = ({monthNamesForLine,orderAmountForLine}) => {
    return (
      <Line
      className="flex mb-5"
        data={{
          labels: monthNamesForLine,
          datasets: [
            {
              label: "מספר ההזמנות",
              data: orderAmountForLine,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 2,
              tension:0.3,
            },
            
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    );
  };
export default LineChart;