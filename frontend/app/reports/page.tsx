"use client";

import { getTopStudentsA } from "@/api/scores";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";

export default function ReportPage() {
    const { data: list } = useQuery({
        queryKey: ["list-top-10"],
        queryFn: getTopStudentsA,
    });

    return (
        <div className="pt-6 md:pt-10">
            <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
                <Card>
                    <CardHeader className="text-lg md:text-2xl font-bold">
                        Top 10 thí sinh có điểm khối A cao nhất
                    </CardHeader>

                    <CardContent className="p-0 md:p-6">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="whitespace-nowrap">
                                            Số báo danh
                                        </TableHead>

                                        <TableHead className="whitespace-nowrap">
                                            Toán
                                        </TableHead>

                                        <TableHead className="whitespace-nowrap">
                                            Lý
                                        </TableHead>

                                        <TableHead className="whitespace-nowrap">
                                            Hoá
                                        </TableHead>

                                        <TableHead className="whitespace-nowrap">
                                            Tổng
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {list?.map((item) => (
                                        <TableRow key={item.sbd}>
                                            <TableCell className="whitespace-nowrap">
                                                {item.sbd}
                                            </TableCell>

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
