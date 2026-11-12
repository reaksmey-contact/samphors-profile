# Implementation Plan & Portfolio Architecture

## Project Overview
- **Name:** Samphors Sang - Senior Accountant & Tax Professional Portfolio
- **Tech Stack:** Next.js 16.4.6 (App Router), React 19.3.0, TypeScript 5, Tailwind CSS v4.3.3
- **Design Philosophy:** Modern 3D executive financial portfolio with interactive perspective cards, glassmorphic elevation, responsive layout across all device sizes, and dedicated Cambodian accounting/tax compliance widgets.

## Section & Component Architecture

1. **`types/portfolio.ts`**
   - Strongly typed TypeScript data models: `PortfolioData`, `ExperienceItem`, `CertificationItem`, `SkillCategory`, `ReferenceItem`, `MetricItem`.

2. **`data/portfolioData.ts`**
   - Full, verbatim profile information extracted from `samphors-profile.md`.
   - 4 Complete Work Experiences:
     - Capitax Consulting Services Co., Ltd (Senior Accountant & Tax)
     - Northbridge Communities (Accountant)
     - BVL Cambodia Beer (Accountant)
     - VIP Capital Co., Ltd (Accountant & Teller)
   - Formal Education & Short Courses (BuildBright University, National Tax School, KICPAA ATQ, ACAR Digital Reporting).
   - Professional References with direct contact numbers.

3. **`components/ui/icons.tsx`**
   - High-performance, zero-dependency inline SVG icon library styled for dark executive themes.

4. **`components/ui/card-3d.tsx`**
   - Interactive 3D tilt component with real-time mouse tracking, dynamic glare reflection, and responsive fallback for touch devices.

5. **`components/Navbar.tsx`**
   - Clean executive top bar with 3D monogram badge, "Resume / CV" modal trigger, and direct phone call CTA (navigation menu and mobile drawer removed per design preference).

6. **`components/Hero.tsx`**
   - 3D visual presence with professional corporate portrait, floating badges (CIFRS for SMEs, GDT Audit Defense, ACAR Non-Audit), quick contact pills, and call-to-actions.

7. **`components/MetricsOverview.tsx`**
   - 4 High-depth 3D metric cards highlighting 6+ years of experience, 100% tax compliance rate, CIFRS/ACAR standards, and 10+ corporate entities managed.

8. **`components/AboutSection.tsx`**
   - Career narrative, 4 core pillars of accounting excellence (Tax Governance, CIFRS for SMEs, ACAR Statutory Filings, Multi-Entity AP/AR & Treasury).

9. **`components/ExperienceSection.tsx`**
   - Interactive company timeline with filter tabs, comprehensive duty breakdowns (Monthly & Annual GDT Tax returns, ACAR Non-Audit reporting, NSSF & MOC declarations, QuickBooks, Bank Reconciliations, and Tenant Billing).

10. **`components/SkillsSection.tsx`**
    - Technical proficiency meters, 8-tool software matrix (QuickBooks, LocalizeBook ERP, Microsoft Excel, GDT e-Tax, ACAR Platform, NSSF Portal, MOC Portal, Office 365), and bilingual fluency indicators.

11. **`components/TaxComplianceWidget.tsx`**
    - Interactive compliance timeline roadmap covering monthly 8th & 20th statutory deadlines, annual TOI, and ACAR reporting.
    - Interactive Withholding Tax (WHT) & VAT estimation demo demonstrating practical Cambodian tax acumen.

12. **`components/CertificationsSection.tsx`**
    - 3D credential badges for National Tax School (NTS), KICPAA ATQ, ACAR Platform Specialist, and BBU Bachelor of Accounting & Finance.

13. **`components/ContactSection.tsx`**
    - One-click copy/connect cards for Phone, Email, Location (Sen Sok, Phnom Penh), and LinkedIn.
    - Interactive consultation request form with feedback state.

14. **`components/Footer.tsx`**
    - Modern footer with copyright, links, and smooth back-to-top button.

