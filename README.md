# ViCare Skin Clinic — Boutique Medical Aesthetics Flagship
Developed for ViCare Skin Clinic (Vicare Aesthetique, Bhat, Ahmedabad, led by Dr. Juhi Ochwani)

This is a quiet-luxury medical-spa digital flagship. It combines clinical trust, high-end medical standards, and warm, hand-made typography and annotations that feel like a designer scrapbooked them by hand for a luxury boutique journal.

---

## 🎨 Design & Architecture Highlights

1. **Four-Voice Typography System**:
   - `Romano Revival` (Display): Used for major headlines, the hero rising-wordmark, and hero scroll transitions.
   - `Gatchina` (Editorial): Used for patient notes, pull-quotes, the doctor's credentials, and clinic names.
   - `Caveat` (Handwriting): Loose hand-drawn SVG annotations, margin stickers, circles, and sign-offs.
   - `Jost` (Utility Sans): Clean body text, buttons, list views, and small tracked metadata caps.

2. **Hand-Made Elements**:
   - Semi-transparent, rotated washi tape strips holding down photographs.
   - Slightly tilted, deckled-edge polaroid cards representing cases on a physician's desk.
   - Draggable die-cut Stickers with soft contact shadows and a glossy finish that lift in 3D on hover.
   - Hand-drawn curly arrows, underlines, and asterisks that reveal themselves on scroll.
   - **Preloader**: Instantaneous loading page rendering the circular logo on a clean, light ivory `#F6EFE6` background matching specifications.

3. **Clinique Coverflow Space**:
   - Seamless Swiper 3D coverflow carousel highlighting high-resolution, premium medical spa waiting areas, treatment beds, and laser equipment.

4. **Multi-State Custom Cursor**:
   - Desktop copper dot that morphs dynamically into custom micro-stickers (`💋` for lip treatments, `❤️` for physician bios, `✨` for details) as you hover over interactive targets.

---

## 🛠️ Developer Customization Guide

### 1. Swapping the Hero Video
The scroll-synced cinematic video centerpiece is housed in `public/assets/hero-video.mp4` with a static fallback poster in `public/assets/hero-poster.jpg`.
To change it:
- Replace `public/assets/hero-video.mp4` with your new medical footage (optimally compressed, ~10s long, 1080p, no audio).
- Update the poster `public/assets/hero-poster.jpg` to match the first frame of your video to ensure a flicker-free preloading transition.

### 2. Modifying before/after patient cards
Data-driven patient outcomes are editable inside `src/data/gallery.ts`. Each item supports custom annotations with precise pixel coordinates (e.g. `positionX: "40%", positionY: "65%"`). Add new outcomes or tweak coordinate vectors there to match your cases perfectly.

### 3. Adjusting or Adding Stickers
Draggable die-cut stickers are defined inside `src/components/Sticker.tsx`. You can drop `<Sticker type="..." />` anywhere on the site with a custom initial rotation angle and a custom `zIndex`. To add more graphics or slogans, extend the `StickerType` union and add an SVG or CSS outline case inside the renderer switch block.

### 4. Updating Contact Links, WhatsApp & Address
All legal coordinates, phone numbers, and WhatsApp redirect templates are centralized inside `src/theme.ts`. To change the clinic's phone or location:
- Edit the variables inside `theme.clinic` in `src/theme.ts`.
- Changes will instantly replicate across the header, menu directory, mobile action bar, contact section, and footer.

---

## 🚀 Local Execution & Verification

### Dev Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

---

## 📋 Owner Handoff & Verification Checklist

- [x] **Verified** - Confirmed zero peer dependency conflicts (`esbuild` and `vite` peerOptional align seamlessly).
- [x] **Verified** - Preloader rendering is instant and completely matches user specification with V+ circular badge on light background.
- [x] **Verified** - 3D swiper clinic gallery is fully functional, fully responsive, and maps directly to `#clinic`.
- [x] **Verified** - Custom cursor transforms dynamically based on target classification.
- [x] **Verified** - Mobile fixed bottom action bar allows 1-touch calling and WhatsApp booking.
- [x] **Verified** - Strict compliance with the Gatchina (Dimitri Antonov, CC BY 4.0) and Romano Revival (Shady Khalaile) licensing credits.
