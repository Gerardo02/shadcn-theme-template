"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import dayjs from "dayjs"
const date = dayjs("2024-04-02")
const newDate = date.format('MM/DD/YYYY');
console.log(newDate);
const chartData = [
  { date: "04/01/2024", desktop: 222, mobile: 150 },
  { date: newDate, desktop: 97, mobile: 180 },
  { date: "04-03-2024", desktop: 167, mobile: 120 },
  { date: "2024-04-04T23:00:00.000Z", desktop: 242, mobile: 260 },
  { date: "2024-04-05T23:00:00.000Z", desktop: 373, mobile: 290 },
  { date: "2024-04-06T23:00:00.000Z", desktop: 301, mobile: 340 },
  { date: "2024-04-07T23:00:00.000Z", desktop: 245, mobile: 180 },
  { date: "2024-04-08T23:00:00.000Z", desktop: 409, mobile: 320 },
  { date: "2024-04-09T23:00:00.000Z", desktop: 59, mobile: 110 },
  { date: "2024-04-10T23:00:00.000Z", desktop: 261, mobile: 190 },
  { date: "2024-04-11T23:00:00.000Z", desktop: 327, mobile: 350 },
  { date: "2024-04-12T23:00:00.000Z", desktop: 292, mobile: 210 },
  { date: "2024-04-13T23:00:00.000Z", desktop: 342, mobile: 380 },
  { date: "2024-04-14T23:00:00.000Z", desktop: 137, mobile: 220 },
  { date: "2024-04-15T23:00:00.000Z", desktop: 120, mobile: 170 },
  { date: "2024-04-16T23:00:00.000Z", desktop: 138, mobile: 190 },
  { date: "2024-04-17T23:00:00.000Z", desktop: 446, mobile: 360 },
  { date: "2024-04-18T23:00:00.000Z", desktop: 364, mobile: 410 },
  { date: "2024-04-19T23:00:00.000Z", desktop: 243, mobile: 180 },
  { date: "2024-04-20T23:00:00.000Z", desktop: 89, mobile: 150 },
  { date: "2024-04-21T23:00:00.000Z", desktop: 137, mobile: 200 },
  { date: "2024-04-22T23:00:00.000Z", desktop: 224, mobile: 170 },
  { date: "2024-04-23T23:00:00.000Z", desktop: 138, mobile: 230 },
  { date: "2024-04-24T23:00:00.000Z", desktop: 387, mobile: 290 },
  { date: "2024-04-25T23:00:00.000Z", desktop: 215, mobile: 250 },
  { date: "2024-04-26T23:00:00.000Z", desktop: 75, mobile: 130 },
  { date: "2024-04-27T23:00:00.000Z", desktop: 383, mobile: 420 },
  { date: "2024-04-28T23:00:00.000Z", desktop: 122, mobile: 180 },
  { date: "2024-04-29T23:00:00.000Z", desktop: 315, mobile: 240 },
  { date: "2024-04-30T23:00:00.000Z", desktop: 454, mobile: 380 },
  { date: "2024-05-01T23:00:00.000Z", desktop: 165, mobile: 220 },
  { date: "2024-05-02T23:00:00.000Z", desktop: 293, mobile: 310 },
  { date: "2024-05-03T23:00:00.000Z", desktop: 247, mobile: 190 },
  { date: "2024-05-04T23:00:00.000Z", desktop: 385, mobile: 420 },
  { date: "2024-05-05T23:00:00.000Z", desktop: 481, mobile: 390 },
  { date: "2024-05-06T23:00:00.000Z", desktop: 498, mobile: 520 },
  { date: "2024-05-07T23:00:00.000Z", desktop: 388, mobile: 300 },
  { date: "2024-05-08T23:00:00.000Z", desktop: 149, mobile: 210 },
  { date: "2024-05-09T23:00:00.000Z", desktop: 227, mobile: 180 },
  { date: "2024-05-10T23:00:00.000Z", desktop: 293, mobile: 330 },
  { date: "2024-05-11T23:00:00.000Z", desktop: 335, mobile: 270 },
  { date: "2024-05-12T23:00:00.000Z", desktop: 197, mobile: 240 },
  { date: "2024-05-13T23:00:00.000Z", desktop: 197, mobile: 160 },
  { date: "2024-05-14T23:00:00.000Z", desktop: 448, mobile: 490 },
  { date: "2024-05-15T23:00:00.000Z", desktop: 473, mobile: 380 },
  { date: "2024-05-16T23:00:00.000Z", desktop: 338, mobile: 400 },
  { date: "2024-05-17T23:00:00.000Z", desktop: 499, mobile: 420 },
  { date: "2024-05-18T23:00:00.000Z", desktop: 315, mobile: 350 },
  { date: "2024-05-19T23:00:00.000Z", desktop: 235, mobile: 180 },
  { date: "2024-05-20T23:00:00.000Z", desktop: 177, mobile: 230 },
  { date: "2024-05-21T23:00:00.000Z", desktop: 82, mobile: 140 },
  { date: "2024-05-22T23:00:00.000Z", desktop: 81, mobile: 120 },
  { date: "2024-05-23T23:00:00.000Z", desktop: 252, mobile: 290 },
  { date: "2024-05-24T23:00:00.000Z", desktop: 294, mobile: 220 },
  { date: "2024-05-25T23:00:00.000Z", desktop: 201, mobile: 250 },
  { date: "2024-05-26T23:00:00.000Z", desktop: 213, mobile: 170 },
  { date: "2024-05-27T23:00:00.000Z", desktop: 420, mobile: 460 },
  { date: "2024-05-28T23:00:00.000Z", desktop: 233, mobile: 190 },
  { date: "2024-05-29T23:00:00.000Z", desktop: 78, mobile: 130 },
  { date: "2024-05-30T23:00:00.000Z", desktop: 340, mobile: 280 },
  { date: "2024-05-31T23:00:00.000Z", desktop: 178, mobile: 230 },
  { date: "2024-06-01T23:00:00.000Z", desktop: 178, mobile: 200 },
  { date: "2024-06-02T23:00:00.000Z", desktop: 470, mobile: 410 },
  { date: "2024-06-03T23:00:00.000Z", desktop: 103, mobile: 160 },
  { date: "2024-06-04T23:00:00.000Z", desktop: 439, mobile: 380 },
  { date: "2024-06-05T23:00:00.000Z", desktop: 88, mobile: 140 },
  { date: "2024-06-06T23:00:00.000Z", desktop: 294, mobile: 250 },
  { date: "2024-06-07T23:00:00.000Z", desktop: 323, mobile: 370 },
  { date: "2024-06-08T23:00:00.000Z", desktop: 385, mobile: 320 },
  { date: "2024-06-09T23:00:00.000Z", desktop: 438, mobile: 480 },
  { date: "2024-06-10T23:00:00.000Z", desktop: 155, mobile: 200 },
  { date: "2024-06-11T23:00:00.000Z", desktop: 92, mobile: 150 },
  { date: "2024-06-12T23:00:00.000Z", desktop: 492, mobile: 420 },
  { date: "2024-06-13T23:00:00.000Z", desktop: 81, mobile: 130 },
  { date: "2024-06-14T23:00:00.000Z", desktop: 426, mobile: 380 },
  { date: "2024-06-15T23:00:00.000Z", desktop: 307, mobile: 350 },
  { date: "2024-06-16T23:00:00.000Z", desktop: 371, mobile: 310 },
  { date: "2024-06-17T23:00:00.000Z", desktop: 475, mobile: 520 },
  { date: "2024-06-18T23:00:00.000Z", desktop: 107, mobile: 170 },
  { date: "2024-06-19T23:00:00.000Z", desktop: 341, mobile: 290 },
  { date: "2024-06-20T23:00:00.000Z", desktop: 408, mobile: 450 },
  { date: "2024-06-21T23:00:00.000Z", desktop: 169, mobile: 210 },
  { date: "2024-06-22T23:00:00.000Z", desktop: 317, mobile: 270 },
  { date: "2024-06-23T23:00:00.000Z", desktop: 480, mobile: 530 },
  { date: "2024-06-24T23:00:00.000Z", desktop: 132, mobile: 180 },
  { date: "2024-06-25T23:00:00.000Z", desktop: 141, mobile: 190 },
  { date: "2024-06-26T23:00:00.000Z", desktop: 434, mobile: 380 },
  { date: "2024-06-27T23:00:00.000Z", desktop: 448, mobile: 490 },
  { date: "2024-06-28T23:00:00.000Z", desktop: 149, mobile: 200 },
  { date: "2024-06-29T23:00:00.000Z", desktop: 103, mobile: 160 },
  { date: "2024-06-30T23:00:00.000Z", desktop: 446, mobile: 400 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function PalosChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop")

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis 
              tickLine={true}
              axisLine={true}
              tickMargin={4}
            />
            <XAxis
              dataKey="date"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              minTickGap={96}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
