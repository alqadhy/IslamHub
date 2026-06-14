# IslamHub Design System

## Brand Identity

**Primary Colors**

- Deep Teal: `#0D7377`
- Bright Teal: `#14FFEC`
- Gold: `#D4AF37`
- Emerald: `#127475`

---

## Colors

**Neutral Colors**

- Cream: `#FBF8F3`
- Soft White: `#FFFFFF`
- Warm Gray: `#F5F1E8`
- Charcoal: `#2C3E50`
- Medium Gray: `#6C757D`

**Dark Mode**

- Background: `#0A1828`
- Surface: `#132D46`
- Accent: `#14FFEC`
- Medium Gray: `#A8B2BD`

---

## Typography

**Headings**

- Font Family: "Inter"
- H1: 48px, Bold (700)
- H2: 36px, SemiBold (600)
- H3: 28px, SemiBold (600)
- H4: 24px, Medium (500)

**Body Text**

- Font Family: "Inter"
- Body Large: 18px, Regular (400)
- Body: 16px, Regular (400)
- Body Small: 14px, Regular (400)
- Caption: 12px, Regular (400)

**Arabic Text**

- Font Family: "Amiri" for Quran and Hadith, "Cairo" for body text
- Verse Display: 24-32px
- Arabic Labels: 18px

---

## Spacing System

- Base unit: 4px
- xs: 8px
- sm: 12px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

---

## Other Styles

- Card Shadow: `0 2px 8px rgba(0, 0, 0, 0.08)`

---

## CSS Variables

```css
:root {
  /* Brand Colors */
  --deep-teal: #0d7377;
  --bright-teal: #14ffec;
  --gold: #d4af37;
  --emerald: #127475;

  /* Light Mode */
  --background: #fbf8f3;
  --foreground: #2c3e50;
  --card: #ffffff;
  --card-foreground: #2c3e50;
  --border: #e5e7eb;
  --primary: var(--deep-teal);
  --primary-foreground: #ffffff;
  --accent: var(--gold);
  --muted: #f5f1e8;
  --muted-foreground: #6c757d;
}

/* Dark Mode */
.dark {
  --background: #0a1828;
  --foreground: #fbf8f3;
  --card: #132d46;
  --card-foreground: #ffffff;
  --border: #1f3b54;
  --primary: var(--bright-teal);
  --primary-foreground: #0a1828;
  --accent: var(--gold);
  --muted: #132d46;
  --muted-foreground: #a8b2bd;
}
```
