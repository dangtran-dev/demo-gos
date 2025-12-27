import { Item } from "@/types/item";
import { ReportSubject } from "@/types/report-subject";
import { Score } from "@/types/score";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const instance = axios.create({
    baseURL: `${API_URL}/scores`,
});

export async function getScores(sbd: string): Promise<Score[]> {
    try {
        const res = await instance.get(`/${sbd}`);

        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data.message);
        }

        throw new Error("Đã xảy ra lỗi trong quá trình lấy điểm.");
    }
}

export async function reportsPoint(): Promise<ReportSubject[]> {
    try {
        const res = await instance.get("/reports/levels");

        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        }

        throw new Error("Đã xảy ra lỗi trong quá trình lấy thống kê.");
    }
}

export async function getTopStudentsA(): Promise<Item[]> {
    try {
        const res = await instance.get("/reports/top-group-a");

        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        }

        throw new Error("Đã xảy ra lỗi trong quá trình lấy danh sách.");
    }
}
