import { Score } from "@/types/score";
import { Subject } from "@/types/subject";
import axios, { isAxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const instance = axios.create({
    baseURL: `${API_URL}/subjects`,
});

export async function getSubjects(): Promise<Subject[]> {
    try {
        const res = await instance.get("/");

        return res.data;
    } catch (error) {
        if (isAxiosError(error)) {
            throw new Error(error.message);
        }

        throw new Error("Đã xảy ra lỗi trong quá trình lấy môn học.");
    }
}
