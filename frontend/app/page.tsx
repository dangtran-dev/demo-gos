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
        <div className="pt-10">
            <div className="w-5xl mx-auto space-y-8">
                <Card>
                    <CardHeader className="text-2xl font-bold">
                        User Registration
                    </CardHeader>

                    <CardContent>
                        <Label htmlFor="registration">
                            Registration Number:
                        </Label>

                        <div className="flex items-center gap-5 w-112.5 mt-4">
                            <Input
                                id="registration"
                                type="text"
                                value={inputSbd}
                                onChange={(e) => setInputSbd(e.target.value)}
                            />

                            <Button onClick={handleSubmit} disabled={!inputSbd}>
                                Submit
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="text-2xl font-bold">
                        Detailed Scores
                    </CardHeader>

                    <CardContent>
                        {scores ? (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        {subjects?.map((subject) => (
                                            <TableHead key={subject.id}>
                                                {subject.tenMon}
                                            </TableHead>
                                        ))}

                                        <TableHead>Mã ngoại ngữ</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    <TableRow>
                                        {subjects?.map((subject) => {
                                            const score = scores?.find(
                                                (s) => s.maMon === subject.maMon
                                            );

                                            return (
                                                <TableCell key={subject.id}>
                                                    {score ? score.diem : "-"}
                                                </TableCell>
                                            );
                                        })}

                                        <TableCell>{maNgoaiNgu}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        ) : (
                            <p className="text-base font-medium">
                                Detailed view of search scores here!
                            </p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
