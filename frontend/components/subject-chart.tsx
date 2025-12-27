"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "./ui/chart";

type Props = {
    subject: string;
    data: {
        level: string;
        value: number;
        fill: string;
    }[];
};

const chartConfig = {
    value: {
        label: "Thí sinh",
    },
    excellent: {
        label: "Giỏi",
        color: "var(--chart-1)",
    },
    good: {
        label: "Khá",
        color: "var(--chart-2)",
    },
    average: {
        label: "Trung bình",
        color: "var(--chart-3)",
    },
    poor: {
        label: "Yếu",
        color: "var(--chart-4)",
    },
} satisfies ChartConfig;

export function SubjectChart({ subject, data }: Props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{subject}</CardTitle>
            </CardHeader>

            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={data}
                        layout="vertical"
                        margin={{
                            left: 0,
                        }}
                    >
                        <YAxis
                            dataKey="level"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) =>
                                chartConfig[value as keyof typeof chartConfig]
                                    ?.label
                            }
                        />
                        <XAxis dataKey="value" type="number" hide />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="value" layout="vertical" radius={5} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
