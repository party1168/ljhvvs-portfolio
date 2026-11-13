"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { content } from "@/utils/data/content";

const LangContext = createContext({ lang: "en", setLang: () => {} });

export function LangProvider({ children }) {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        try {
            const saved = localStorage.getItem("lang");
            if (saved === "en" || saved === "zh") setLang(saved);
        } catch {}
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang === "zh" ? "zh-Hant-TW" : "en";
        try { localStorage.setItem("lang", lang); } catch {}
    }, [lang]);

    return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
    return useContext(LangContext);
}

export function useContent() {
    const { lang } = useLang();
    return content[lang];
}
