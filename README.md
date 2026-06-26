# D4 Assignment

Project latihan TypeScript untuk menggunakan LLM dalam beberapa skenario sederhana:

- `src/01-customer-complaint.ts`: klasifikasi keluhan customer lalu memilih instruksi agent yang sesuai.
- `src/02-meeting-transcript.ts`: ekstraksi keputusan, risiko, dan action item dari transkrip meeting.
- `src/03-company-profile`: percobaan ekstraksi profil perusahaan.
- `src/utils.ts`: konfigurasi model OpenAI dan Tavily client.

## Cara Menjalankan

Install dependency:

```bash
pnpm install
```

Buat file `.env` di root project, lalu isi API key:

```env
OPENAI_API_KEY=isi_api_key_openai
TAVILY_API_KEY=isi_api_key_tavily
```

Jalankan salah satu file:

```bash
pnpm tsx src/01-customer-complaint.ts
pnpm tsx src/02-meeting-transcript.ts
pnpm tsx src/03-company-profile
```

Folder `result/` berisi gambar hasil pengerjaan assignment.
