export type Work = {
  id: string;
  title: string;
  location: string;
  category: "mural" | "graffiti" | "vandal" | "Digital";
  year: string;
  description: string;
  cover: string;
  photos: string[];
  video?: string;
};

export const works: Work[] = [
  {
    id: "mural-01",
    title: "01",
    location: "Pondok Aren, South Tangerang",
    category: "graffiti",
    year: "2026",
    description:
      "Mural besar yang dikerjakan bersama beberapa anggota PGM. Dokumentasi mencakup proses sketsa, persiapan dinding, hingga hasil akhir.",
    cover: "../assets/streetart/01/tangsel-03.jpg",
    photos: [
      "../assets/streetart/01/tangsel-06.jpg",
      "../assets/streetart/01/tangsel-05.jpg",
      "../assets/streetart/01/tangsel-02.jpg",
      "../assets/streetart/01/tangsel-01.jpg",
      "../assets/streetart/01/tangsel-04.jpg",
    ],
    video: "",
  },
  {
    id: "wall-02",
    title: "02",
    location: "Jakarta",
    category: "graffiti",
    year: "2026",
    description:
      "Graffiti di dinding kota. Foto mencakup angle jauh, detail huruf, dan proses sebelum karya selesai.",
    cover: "../assets/streetart/02/petukangan-04.jpg",
    photos: [
        "../assets/streetart/02/petukangan-03.jpg",
        "../assets/streetart/02/petukangan-02.jpg",
        "../assets/streetart/02/petukangan-01.jpg",
        "../assets/streetart/02/petukangan-06.jpg",
        "../assets/streetart/02/petukangan-05.jpg",
    ],
  },
  {
    id: "untitled-03",
    title: "03",
    location: "Tangerang",
    category: "vandal",
    year: "2025",
    description:
      "Dokumentasi intervensi jalanan dan jejak visual di ruang urban.",
    cover: "../assets/streetart/03/suadarma-01.jpg",
    photos: [
        "../assets/streetart/03/suadarma-03.jpg",
        "../assets/streetart/03/suadarma-02.jpg",
        "../assets/streetart/03/suadarma-05.jpg",
        "../assets/streetart/03/suadarma-04.jpg",
        "../assets/streetart/03/suadarma-06.jpg",
        "../assets/streetart/03/suadarma-09.jpg",
        "../assets/streetart/03/suadarma-08.jpg",
        "../assets/streetart/03/suadarma-07.jpg",
    ],
  },
];