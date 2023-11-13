import { CheckResultResponse } from "@/interfaces/CheckResultResponse";
import { NextPage } from "next";

interface Props {
    data: CheckResultResponse | undefined;
}

const Pass: NextPage<Props> = ({ data }) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    {data?.team_id && (
                        <div className="text-xl">
                            ทีม : <span className="font-bold">{data?.team_id}</span>
                        </div>
                    )}
                    <div className="text-xl">
                        ชื่อ : <span className="font-bold">{data?.name}</span>
                    </div>
                </div>
                <div className="text-xl">ยินดีด้วย คุณผ่านการคัดเลือก</div>
                <div className="text-3xl">
                    <span className="text-green-500 font-bold">ผ่าน</span>{" "}
                    การคัดเลือก
                </div>
            </div>
            <div className="flex flex-col">
                <div className="text-xl">📍 รายละเอียดการยืนยันสิทธิ์</div>
                <div className="">
                    เพื่อยืนยันสิทธิ์กรุณาโอนเงินมัดจำ{" "}
                    <span className="font-bold">500</span> บาท ไปที่
                </div>
                <div className="flex flex-col ">
                    <div className="flex gap-2">
                        <div>เลขที่บัญชี :</div>
                        <div className="font-bold">456456</div>
                    </div>
                    <div className="flex gap-2">
                        <div>ชื่อบัญชี :</div>
                        <div className="font-bold">5456</div>
                    </div>
                    <div className="flex gap-2">
                        <div>ธนาคาร :</div>
                        <div className="font-bold">454545</div>
                    </div>
                </div>
                <div>
                    และกรอกฟอมร์ยืนยันสิทธ์ถายในวันจันทร์ที่ 8 พฤษภาคม เวลา
                    23:59 น. มิฉะนั้นจะถือว่าสละสิทธิ์
                </div>
                <div className="mt-3">
                    <span className="font-bold">⚠️ หมายเหตุ</span>{" "}
                    จะคืนเงินค่ามัดจำเมื่อเข้าร่วมกิจกรรมครบตามเวลาการจัดงานระหว่างวันที่
                    14-17 กรกฎาคม 2023 แล้วเท่านั้น
                </div>
            </div>
        </div>
    );
};

export default Pass;
