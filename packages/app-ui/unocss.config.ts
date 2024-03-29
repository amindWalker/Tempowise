import { defineConfig } from "unocss/vite";
import {
    presetIcons,
    presetTypography,
    presetWebFonts,
    presetUno,
} from "unocss";
import type { Theme } from "unocss/preset-uno";
import presetTheme from "unocss-preset-theme";
import transformerVariantGroup from "@unocss/transformer-variant-group"

export default defineConfig({
    presets: [
        presetIcons({
            scale: 1.25,
            extraProperties: {
                display: "inline-block",
            },
        }),
        presetTypography(),
        presetWebFonts({
            provider: "google",
            fonts: {
            },
        }),
        presetUno(),
    ],
    shortcuts: {
        "main-container": "bg-true-gray-300 all:transition-all all:duration-500 md:(grid grid-flow-col) min-h-100vh",
        "main-containerdark": "main-container bg-true-gray-800",
        "base-container": "@apply bg-gradient-to-t from-zinc-200 to-zinc-50 rounded-lg py4 md:p4",
        "base-containerdark": "base-container bg-gradient-to-t from-zinc-800 to-zinc-700",
        "breadcrumb": "bg-white bg-opacity-50 leading-tight rounded-lg p4 mb4 md:mb8 mix-blend-exclusion",
        "nav-menu": "grid",
        "btn-primary": "text-white filter-none bg-gradient-to-tr from-orange-600 to-orange-400 hover:(filter brightness-130) filter rounded-md p3",
        "btn-secondary": "text-orange-600 filter-none ring ring-inset ring-orange-600 hover:(filter bg-orange-600 ring-white text-white brightness-130) filter rounded-md p3 active:(brightness-200) focus:(bg-orange-600 ring-white text-white)",
        "btn-transparent": "text-orange-600 filter-none ring-inset hover:(filter brightness-130) filter rounded-md p3 active:(ring ring-orange-600 brightness-130) focus:(ring ring-orange-600 brightness-130)",
        "block-wrapper": "grid gap2 p4 md:p8 rounded-xl shadow-inner",
        "block-wrapperdark": "block-wrapper",
        "list-item": "text-sky-900 p4 ring ring-blue ring-opacity-25 rounded-xl hover:(bg-blue bg-opacity-10)",
        "list-itemdark": "list-item text-sky-500",
        "top-notification": "backdrop-filter backdrop-blur fixed z1 text-rose-500 bg-white bg-opacity-50 w-full text-center p2",
        "top-notificationdark": "top-notification bg-zinc-600",
        "header-wrapper": "border border-dotted border-gray-500 border-opacity-30 rounded-xl p4",
        "h-title-header": "text-4xl text-orange-600 font-black",
        "h-title": "text-lg font-bold text-gray-500",
        "h-titledark": "text-xl font-bold text-gray-200",
        "p-description": "text-gray-500",
        "p-descriptiondark": "text-gray-200",
        "text-field": "bg-white bg-opacity-50 placeholder-slate-300 filter-none hover:(filter ring ring-orange-600 bg-opacity-100) focus:bg-white p-3 rounded-md resize",
        "overview-chart": "",
    },
});
