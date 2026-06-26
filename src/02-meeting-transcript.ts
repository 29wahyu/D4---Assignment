import { getModel } from "./utils";
import { createParsedCompletion } from "@anvia/core";
import "dotenv/config";
import z from "zod";

const transcript = `
Meeting : PS Janarijaya - Target Musim 2027

Peserta:
- Bapak Sudarmo (Presiden Klub)
- Alex (Direktur Teknik)
- Paulo (Manajer Tim)
- Ego (Pelatih Kepala)

Sudarmo:
Terima kasih sudah hadir. Musim ini kita finis di peringkat delapan.
Saya ingin musim depan target kita minimal masuk empat besar liga.

Paulo:
Saya setuju. Tetapi kita harus memperbaiki performa tandang karena musim lalu kita kehilangan banyak poin.

Alex:
Selain itu kita membutuhkan tambahan pemain.
Prioritas saya adalah bek tengah senior dan gelandang bertahan.

Ego:
Saya juga merasa lini belakang menjadi kelemahan utama.
Bek tengah sering cedera sehingga rotasi tidak berjalan baik.

Sudarmo:
Baik. Berapa anggaran transfer?

Alex:
Sekitar dua belas miliar rupiah.

Sudarmo:
Saya hanya bisa menyetujui maksimal sepuluh miliar.

Paulo:
Kalau begitu kita harus menentukan prioritas transfer.

Ego:
Bek tengah harus menjadi prioritas utama.

Alex:
Selain itu ada tiga pemain akademi yang siap dipromosikan.

Ego:
Saya ingin mereka mengikuti seluruh program pramusim.

Paulo:
Lapangan latihan kedua juga perlu direnovasi sebelum pramusim.

Sudarmo:
Baik. Tolong siapkan proposal renovasi.

Alex:
Risiko terbesar musim depan adalah jika negosiasi transfer gagal.

Paulo:
Jadwal kompetisi juga kemungkinan sangat padat.

Ego:
Kalau pemain inti mengalami cedera, performa tim akan turun.

Sudarmo:
Kesimpulan rapat:

1. Target liga musim depan adalah empat besar.
2. Target Piala Nasional minimal semifinal.
3. Prioritas transfer adalah bek tengah dan gelandang bertahan.
4. Tiga pemain akademi mengikuti program pramusim.
5. Renovasi lapangan latihan dilakukan sebelum pramusim.
6. Minggu depan setiap divisi menyerahkan rencana kerja.
`;

const MeetingResultSchema = z.object({
  decisions: z.string(),
  risks: z.string(),
  actionItems: z.string()
});

const SYSTEM_PROMPT = `
You are an expert meeting assistant.
Read the meeting transcript carefully.
Extract ONLY:
1. Decisions
2. Risks
3. Action Items
If the deadline is not explicitly mentioned,
write "Not specified".
Return the result following the provided schema only.
`;

const response =  await createParsedCompletion (getModel(), {
    instructions: SYSTEM_PROMPT,
    input: transcript,
    schema: MeetingResultSchema
})

console.log(response.data)