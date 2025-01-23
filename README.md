# <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" height="40" alt="graphql logo"  /> Belajar GraphQL 🐬

Repository ini berisi materi dan contoh implementasi **GraphQL** untuk membantu memahami konsep, cara kerja, dan penggunaannya dalam pengembangan aplikasi.

## Apa itu GraphQL?

GraphQL adalah sebuah bahasa kueri untuk API dan runtime untuk memenuhi kueri tersebut. Dengan GraphQL, klien dapat secara spesifik meminta data yang diperlukan dan mendapatkan hasil yang sesuai tanpa kelebihan atau kekurangan data (*overfetching* atau *underfetching*).

## Fitur Utama GraphQL

- **Satu Endpoint**: Semua query dilakukan melalui satu endpoint.
- **Kueri yang Fleksibel**: Klien menentukan struktur data yang dibutuhkan.
- **Efisiensi Data**: Mengurangi *overfetching* dan *underfetching*.
- **Self-Documenting**: Schema API mendeskripsikan semua tipe dan operasi yang tersedia.
- **Relasi Data**: Mendukung permintaan data yang saling berhubungan dalam satu query.

## Instalasi

Untuk menjalankan GraphQL di proyek Anda, Anda dapat menggunakan pustaka seperti `express-graphql` atau `apollo-server`.

### Dengan Express.js

1. **Instalasi**
   ```bash
   npm install express express-graphql graphql
