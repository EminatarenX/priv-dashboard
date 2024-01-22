"use client"
import { ColorType, createChart } from "lightweight-charts"
import { useEffect, useRef } from "react"
import { initialDataChart } from "."
export default function LineChart() {
    const chartContainerRef = useRef(null)

    useEffect(() => {

            const initialData = initialDataChart
            
            const chart = createChart(chartContainerRef.current, {
                width: chartContainerRef.current.clientWidth,
                height: 350,
                layout: {
                    background: {type: 'solid', color: "transparent"},
                    textColor: '#d1d4dc',
                },
                grid: {
                    vertLines: {visible: false},
                    horzLines: {visible: false},
                },
  

                
            })
            const newSeries = chart.addAreaSeries({
                // red pallete
                lineColor: 'rgb(245, 118, 133)',
                topColor: 'rgba(245, 118, 133, 0.4)',
                
            })
            newSeries.setData(initialData)

            chart.timeScale().fitContent()
            

            const handleResize = () => {
                if (chart && chartContainerRef.current) {
                    chart.resize(
                        chartContainerRef.current.clientWidth,
                        chartContainerRef.current.clientHeight
                        
                    )
                }
            }
            window.addEventListener("resize", handleResize)
            

            return () => {
                chart.remove()
            }
        
     

    },[])

  return (
    <>
    <h2 className="text-white text-center">Lifeline Income</h2>
    <div ref={chartContainerRef} className="w-full h-full">
        
    </div>
    </>
  )
}
