---
name: Cyber-Premium Portfolio
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#b9caca'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#faf9ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#d0ddff'
  on-tertiary-container: '#005dc8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  headline-xl:
    fontFamily: Outfit
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 120px
---

## Brand & Style

This design system is engineered for high-end developer portfolios, emphasizing technical mastery and forward-thinking innovation. The aesthetic bridges **Modern Minimalism** with **Futuristic Glassmorphism**, creating a digital environment that feels like a premium terminal or a high-tech dashboard.

The target audience consists of technical recruiters, startup founders, and engineering leads who value precision and modern aesthetics. The UI should evoke a sense of "quiet power"—sleek, fast, and sophisticated.

**Key Visual Pillars:**
- **Atmospheric Depth:** Using obsidian backgrounds and subtle cyan glows to create a 3D space.
- **Precision:** Sharp typography paired with generous white space for maximum legibility of code and case studies.
- **Dynamic Interaction:** High-contrast accents that respond to user intent through gradients and glows.

## Colors

The palette is anchored in a "Deep Obsidian" base to ensure the primary vibrant cyan and emerald accents appear self-illuminated.

- **Primary (Cyan):** Used for primary actions, active states, and brand highlights. It represents energy and connectivity.
- **Secondary (Emerald):** Used for success states, secondary highlights, and specialized tags.
- **Accent (Slate Blue):** Provides a calming counter-balance to the vibrant primary, used for subtle borders and secondary text.
- **Background (Obsidian):** The foundation. Use `#05070A` for the deepest layers and `#0D1117` for surface elements.

## Typography

The typography strategy uses a hierarchy of three specialized families to reinforce the developer narrative:

1.  **Outfit (Headers):** Chosen for its geometric, modern personality. Headlines should use tight letter-spacing to feel impactful and "locked-in."
2.  **Inter (Body):** The workhorse for readability. Used for all long-form content, project descriptions, and navigation.
3.  **JetBrains Mono (Technical Labels):** Integrated for metadata, tags, and small captions to ground the design in a developer-centric context.

For mobile, headlines scale down aggressively to prevent awkward wrapping, while body text maintains its size to ensure accessibility.

## Layout & Spacing

This design system utilizes a **12-column Fluid Grid** with a fixed maximum width for desktop environments. The layout philosophy is "Content First," where projects are given significant vertical breathing room.

- **Desktop (1280px+):** 12 columns, 24px gutters. Side margins are flexible to center the content.
- **Tablet (768px - 1024px):** 8 columns, 20px gutters.
- **Mobile (Below 768px):** 4 columns, 16px gutters, 20px safe-area margins.

Spacing follows an 8px base rhythm. Large sections (e.g., Hero to Projects) should be separated by a minimum of 120px to emphasize the premium, high-end feel of the portfolio.

## Elevation & Depth

Hierarchy is established through **Luminous Layers** rather than traditional shadows.

1.  **Level 0 (Base):** The `#05070A` background.
2.  **Level 1 (Card/Surface):** Semi-transparent `#0D1117` surfaces with a `20px` backdrop blur (Glassmorphism). These elements feature a `1px` subtle border in `rgba(255, 255, 255, 0.08)`.
3.  **Level 2 (Active/Hover):** Elements gain a Primary Cyan outer glow (`drop-shadow: 0 0 15px rgba(0, 245, 255, 0.3)`).
4.  **Floating Elements:** Use extremely soft, large-radius blurs to separate modal content or floating navigation bars from the background content.

## Shapes

The design system uses a **Rounded** shape language to soften the futuristic "high-tech" edges, making the UI feel approachable yet professional.

- **Standard Elements:** 0.5rem (8px) radius for buttons and input fields.
- **Containers/Cards:** 1rem (16px) radius for project cards and large content blocks.
- **Pill Tags:** Use fully rounded (999px) shapes for status indicators and technology tags (e.g., "React", "TypeScript").

## Components

### Buttons
- **Primary:** Gradient fill from `Primary Cyan` to `Secondary Emerald`. On hover, the gradient should shift or expand, accompanied by a subtle cyan glow. Text is high-contrast black or dark blue.
- **Ghost:** `1px` Cyan border with transparent background. On hover, fills with a 10% opacity cyan tint.

### Project Cards
- Glassmorphic background with a subtle top-to-bottom dark gradient.
- Images should have a slight zoom-in effect on hover.
- Use `Label-Mono` for category tags above the project title.

### Input Fields
- Dark backgrounds (`#0A0C10`) with a `1px` Slate Blue border.
- The border transitions to Primary Cyan on focus with a matching outer glow.

### Chips & Tags
- Small, uppercase `JetBrains Mono` text.
- High-contrast background (10% opacity of the brand color) with a solid `1px` border of the same color.

### Navigation Bar
- A floating "Dock" style or a fixed top bar with a heavy backdrop blur (`blur(20px)`) and a bottom border of `rgba(255, 255, 255, 0.05)`.