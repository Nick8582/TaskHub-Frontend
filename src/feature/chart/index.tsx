"use client"

import type { FC } from "react"
import { Line } from "react-chartjs-2"

import { Card } from "@/src/shared/ui/card"
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  type ChartOptions,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 50,
      ticks: {
        stepSize: 10,
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
      fill: true,
    },
  },
}

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]

export const data = {
  labels,
  datasets: [
    {
      label: "Projects",
      data: [15, 22, 38, 25, 42, 30, 18],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
}

interface ChartProps {
  className?: string
}

export const Chart: FC<ChartProps> = ({ className }) => {
  return (
    <Card className={className} color="dashboard">
      <div className="text-gray-text flex items-center justify-between">
        <h2 className="text-2xl font-medium">Project Statistic</h2>
      </div>
      <div className="h-auto! w-full! flex-auto">
        <Line options={options} data={data} />
      </div>
    </Card>
  )
}
