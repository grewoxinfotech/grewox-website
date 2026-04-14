/**
 * Tailwind CSS Configuration
 * ─────────────────────────────────────────────────────────────
 * All color tokens are imported from: src/theme.js
 * To change any color, edit ONLY src/theme.js
 * ─────────────────────────────────────────────────────────────
 */

// NOTE: tailwind.config.js runs in Node / CJS context.
// We use a plain object mirror here that stays in sync with theme.js.
// Any change → update src/theme.js FIRST, then mirror here.

import theme from './src/theme.js';

const { colors, gradients } = theme;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.primary.light,       // page background (theme.js)
          dark:  colors.primary.dark,        // headings / text (theme.js)
          card:  colors.primary.card,        // #f8fafc  – card surface
        },
        accent: {
          blue:     colors.accent.blue,      // #426dd4  – brand blue
          blueDark: colors.accent.blueDark,  // #1e40af  – hover / gradient end
          gray:     colors.accent.gray,      // #64748b  – muted text
        },
        surface: {
          muted:       colors.surface.muted,       // #f1f5f9 – alt section bg
          border:      colors.surface.border,      // #e2e8f0 – general border
          borderLight: colors.surface.borderLight, // #f1f5f9 – subtle divider
        },
      },
      backgroundImage: {
        'gradient-main':  gradients.main,   // 135° blue → dark-blue
        'gradient-light': gradients.light,  // top-to-bottom white fade
      },
    },
  },
  plugins: [],
}
