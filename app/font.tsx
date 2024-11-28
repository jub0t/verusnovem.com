import { Chivo_Mono, Kode_Mono, Spectral } from "next/font/google";


export const SpectralFont = Spectral({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap"
});

export const ChivoMono = Chivo_Mono({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap"
});

export const KodeMono = Kode_Mono({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap"
});
