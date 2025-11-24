# Changelog

All notable changes to the BeepWeep Ventures website are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-11-24

### Added
- **Dark Mode Implementation**
  - Auto-detection based on system preference
  - Manual toggle button in header with sun/moon icons
  - Smooth transitions between themes (0.3s ease)
  - Theme preference persistence in localStorage
  - Complete color scheme inversion for all elements

- **Team Section**
  - Founder profile card with photo (Madhur Satija)
  - Second team member card (Abhishek Kaushik)
  - Grid layout supporting multiple team members
  - Creative role abbreviations (CEO: Chief Execution Officer, CTO: Chief Troubleshooting Officer)
  - Bio integration within cards
  - Social media links (LinkedIn and X/Twitter)

- **Dynamic Features**
  - Auto-updating copyright year
  - Cookie banner with auto-dismiss countdown
  - Partners marquee with animated scroll

- **Mobile Optimization**
  - Fully responsive design for all devices
  - Grid layout collapses to single column on mobile
  - Touch-friendly button sizes
  - Proper text scaling and spacing

### Changed
- **Design System**
  - Complete CSS rewrite with Neo-Brutalist aesthetic
  - Updated to Space Grotesk and Inter font families
  - High contrast color palette (Black, White, International Orange, Hyper Blue)
  - Thick 3px borders throughout
  - Hard offset shadows (4px-8px)
  - Dot grid background pattern

- **Header**
  - Updated brand mark with skew effect and accent shadow
  - Added theme toggle button
  - Greeting badges with border and shadow

- **Footer**
  - Redesigned with white background and dot grid
  - Bold button-style links with hover effects
  - Added LinkedIn and GitHub social icons
  - Dynamic copyright year

- **Typography**
  - Base font size set to 13px (~80% of standard)
  - All rem-based scaling for consistency
  - Uppercase display text throughout

### Fixed
- Mobile layout issues with horizontal scrolling
- Button alignment on small screens
- Footer element positioning
- Founder section alignment (centered image and text)
- Box-sizing for all elements

## [1.0.0] - 2024-11-23

### Initial Release
- Basic HTML structure
- Material Design 3 light theme
- Hero section
- Ecosystems grid
- Footer with legal information
- Google Analytics integration
- Cookie banner functionality

---

## Version Naming Convention

- **Major** (X.0.0): Complete redesign or major feature overhaul
- **Minor** (0.X.0): New features or significant updates
- **Patch** (0.0.X): Bug fixes and minor improvements
