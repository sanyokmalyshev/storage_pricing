import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useAppSelector } from '../app/hooks';
import { Data } from '../types/data';

export default function CharDesktop() {
  const {  
    blazePrice,
    bunnyPrice,
    scaleWayPrice,
    vultrPrice,
    minPrice
  } = useAppSelector((state) => state.values);

  const RenderCustomBarLabel = (props: any) => {
    const {y, width, value, color } = props;
    
    return (
      <text 
        x={width + 10} 
        y={y + 25} 
        fill={value === minPrice ? color : ''}
        textAnchor="start" 
        dy={-6}
        className="ml-1"
      >
        {`${value}$`}
      </text>
    )
  };

  const data: Data[] = [
    {
      value: blazePrice,
      color: "red",
    },
    {
      value: bunnyPrice,
      color: "orange",
    },
    {
      value: scaleWayPrice,
      color: "#ab47bc"
    },
    {
      value: vultrPrice,
      color: "blue"
    }
  ];

  return (
    <>
      <div className="ml-0 sm:ml-2 sm:min-h-full sm:w-2 bg-gray-300 border border-gray-400"></div>
      <div className='myChart w-full flex flex-col justify-around'>
        <ResponsiveContainer 
          width="99%"
          height={200}
        >
          <BarChart
            layout="vertical"
            data={data}
            margin={{
              top: -10,
              right: 55,
              left: 0,
              bottom: -10
            }}
            
          >
            <XAxis hide axisLine={false} type="number" />
            <YAxis 
              yAxisId={0}
              type="category"
              hide
            />
            <Bar
              dataKey="value"
              fill="#ccc"
              label={<RenderCustomBarLabel />}
              isAnimationActive={false}
              animationDuration={100}
              barSize={30}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={
                    data[index].value === minPrice ? data[index].color : '#ccc'
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
   
  )
}
