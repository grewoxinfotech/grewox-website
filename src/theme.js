/**
 * ============================================================
 *  GREWOX INFOTECH — CENTRAL THEME CONFIGURATION
 * ============================================================
 *  This is the SINGLE SOURCE OF TRUTH for all brand colors,
 *  gradients, and design tokens.
 *
 *  ✅ Used by:  tailwind.config.js  (design tokens → utility classes)
 *  ✅ Used by:  React components    (import { theme } from '../theme')
 *
 *  To change any color, edit ONLY this file.
 * ============================================================
 */

const theme = {
  // ── Brand Colors ────────────────────────────────────────────
  colors: {
    primary: {
      light: '#f4f7fc',       // Page background (soft blue-white, logo-aligned)
      dark: '#132447',        // Headings / body text (navy, matches brand blues)
      card: '#f8fafc',        // Card / subtle surface background
    },
    accent: {
      blue: '#426dd4',        // Brand blue — buttons, links, highlights
      blueDark: '#1e40af',    // Darker blue for gradients / hover
      gray: '#64748b',        // Neutral gray for subdued text
    },
    // ── Surface Tones ──────────────────────────────────────────
    surface: {
      muted: '#f1f5f9',       // Alternate section background
      border: '#e2e8f0',      // Default border color
      borderLight: '#f1f5f9', // Subtle border / divider
    },
    // ── Semantic Colors ─────────────────────────────────────────
    semantic: {
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
    },
  },

  // ── Gradients ────────────────────────────────────────────────
  gradients: {
    main: 'linear-gradient(135deg, #426dd4 0%, #1e40af 100%)',
    light: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
  },
};

export default theme;
