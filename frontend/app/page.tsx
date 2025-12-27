"use client";

import { getScores } from "@/api/scores";
import { getSubjects } from "@/api/subjects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

export default function SearchScoresPage() {
    const [inputSbd, setInputSbd] = useState("");
    const [searchSbd, setSearchSbd] = useState<string | null>(null);

    const {
        data: scores,
        isError,
        error,
    } = useQuery({
        queryKey: ["scores", searchSbd],
        queryFn: () => getScores(searchSbd as string),
        enabled: !!searchSbd,
        retry: false,
    });

    const maNgoaiNgu = useMemo(() => {
        const score = scores?.find((score) => score.maMon === "NGOAI_NGU");
        return score?.maNgoaiNgu;
    }, [scores]);

    useEffect(() => {
        if (isError && error) {
            toast.error(error.message);
        }
    }, [isError, error]);

    const handleSubmit = () => {
        if (!inputSbd) return;
        setSearchSbd(inputSbd);
    };

    const { data: subjects } = useQuery({
        queryKey: ["subjects"],
        queryFn: getSubjects,
        retry: false,
    });

    return (
        <div className="pt-6 md:pt-10">
            <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-8">
                <Card>
                    <CardHeader className="text-lg md:text-2xl font-bold">
                        User Registration
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <Label htmlFor="registration">
                            Registration Number:
                        </Label>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 sm:max-w-lg">
                            <Input
                                id="registration"
                                type="text"
                                value={inputSbd}
                                onChange={(e) => setInputSbd(e.target.value)}
                            />

                            <Button
                                onClick={handleSubmit}
                                disabled={!inputSbd}
                                className="sm:w-auto w-full"
                            >
                                Submit
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="text-lg md:text-2xl font-bold">
                        Detailed Scores
                    </CardHeader>

                    <CardContent>
                        {scores ? (
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            {subjects?.map((subject) => (
                                                <TableHead
                                                    key={subject.id}
                                                    className="whitespace-nowrap"
                                                >
                                                    {subject.tenMon}
                                                </TableHead>
                                            ))}

                                            <TableHead className="whitespace-nowrap">
                                                Mã ngoại ngữ
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        <TableRow>
                                            {subjects?.map((subject) => {
                                                const score = scores?.find(
                                                    (s) =>
                                                        s.maMon ===
                                                        subject.maMon
                                                );

                                                return (
                                                    <TableCell
                                                        key={subject.id}
                                                        className="text-center"
                                                    >
                                                        {score
                                                            ? score.diem
                                                            : "-"}
                                                    </TableCell>
                                                );
                                            })}

                                            <TableCell className="text-center">
                                                {maNgoaiNgu}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        ) : (
                            <p className="text-sm md:text-base font-medium text-muted-foreground">
                                Detailed view of search scores here!
                            </p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
