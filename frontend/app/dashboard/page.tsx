"use client";

import { getTopStudentsA, reportsPoint } from "@/api/scores";
import { SubjectChart } from "@/components/subject-chart";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ReportSubject } from "@/types/report-subject";
import { useQuery } from "@tanstack/react-query";

export default function DashboardPage() {
    const toSubjectChartData = (item: ReportSubject) => [
        {
            level: "excellent",
            value: item.excellent,
            fill: "var(--color-excellent)",
        },
        { level: "good", value: item.good, fill: "var(--color-good)" },
        { level: "average", value: item.average, fill: "var(--color-average)" },
        { level: "poor", value: item.poor, fill: "var(--color-poor)" },
    ];

    const { data: reports } = useQuery({
        queryKey: ["reports"],
        queryFn: reportsPoint,
    });

    const { data: list } = useQuery({
        queryKey: ["list-top-10"],
        queryFn: getTopStudentsA,
    });

    return (
        <div className="pt-6 md:pt-10">
            <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {reports?.map((item) => (
                        <SubjectChart
                            key={item.subject}
                            subject={item.subject}
                            data={toSubjectChartData(item)}
                        />
                    ))}
                </div>

                <Card>
                    <CardHeader className="text-lg md:text-2xl font-bold">
                        Top 10 thí sinh có điểm khối A cao nhất
                    </CardHeader>

                    <CardContent className="p-0 md:p-6">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Số báo danh</TableHead>
                                        <TableHead>Toán</TableHead>
                                        <TableHead>Lý</TableHead>
                                        <TableHead>Hoá</TableHead>
                                        <TableHead>Tổng</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {list?.map((item) => (
                                        <TableRow key={item.sbd}>
                                            <TableCell>{item.sbd}</TableCell>
                                            <TableCell>{item.math}</TableCell>
                                            <TableCell>
                                                {item.physics}
                                            </TableCell>
                                            <TableCell>
                                                {item.chemistry}
                                            </TableCell>
                                            <TableCell className="font-semibold">
                                                {item.totalScore}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
