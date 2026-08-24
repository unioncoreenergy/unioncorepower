'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartTooltipContent, ChartContainer } from '@/components/ui/chart';

const chartData = [
  { month: 'Jan', usage: 186 },
  { month: 'Feb', usage: 305 },
  { month: 'Mar', usage: 237 },
  { month: 'Apr', usage: 173 },
  { month: 'May', usage: 209 },
  { month: 'Jun', usage: 250 },
];

const chartConfig = {
  usage: {
    label: "kWh",
    color: "hsl(var(--accent))",
  },
}

export default function EnergyUsageChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[250px] w-full">
        <BarChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value} kWh`}
        />
        <Tooltip
            cursor={{ fill: 'hsl(var(--muted))' }}
            content={<ChartTooltipContent indicator="dot" />}
        />
        <Bar dataKey="usage" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
        </BarChart>
    </ChartContainer>
  );
}
