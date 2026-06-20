// schema.org 구조화 데이터 빌더.
// MedicalClinic / Physician / WebSite / FAQPage / BreadcrumbList 를 생성한다.
import { clinic, doctor, services, siteUrl } from "./site";

const clinicId = `${siteUrl}/#clinic`;
const doctorId = `${siteUrl}/#physician`;
const websiteId = `${siteUrl}/#website`;

// 한의원 본체 — LocalBusiness 계열인 MedicalClinic.
export function clinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": clinicId,
    name: clinic.name,
    alternateName: clinic.nameEn,
    description: clinic.description,
    url: siteUrl,
    telephone: clinic.telephone,
    faxNumber: clinic.fax,
    email: clinic.email,
    image: `${siteUrl}/daepyo.jpg`,
    logo: `${siteUrl}/daepyo.jpg`,
    priceRange: clinic.priceRange,
    currenciesAccepted: "KRW",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.streetAddress,
      addressLocality: clinic.address.addressLocality,
      addressRegion: clinic.address.addressRegion,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    },
    hasMap: "https://map.naver.com/p/search/도곡경희한의원",
    publicAccess: true,
    isAcceptingNewPatients: true,
    availableLanguage: ["ko"],
    medicalSpecialty: "Internal Medicine",
    areaServed: [
      { "@type": "City", name: "서울특별시" },
      { "@type": "AdministrativeArea", name: "강남구" },
    ],
    openingHoursSpecification: clinic.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    availableService: services.map((s) => ({
      "@type": "MedicalProcedure",
      name: s,
    })),
    physician: { "@id": doctorId },
    founder: { "@id": doctorId },
  };
}

// 원장 — Physician.
export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": doctorId,
    name: `${clinic.name} ${doctor.name}`,
    description: doctor.description,
    jobTitle: doctor.jobTitle,
    medicalSpecialty: "Internal Medicine",
    worksFor: { "@id": clinicId },
    url: `${siteUrl}/about/intro`,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "경희대학교 한의과대학",
    },
    knowsAbout: [...services],
    hasCredential: doctor.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    })),
  };
}

// 사이트 자체 — WebSite.
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: clinic.name,
    description: clinic.description,
    inLanguage: "ko",
    publisher: { "@id": clinicId },
  };
}

// FAQ — LLM이 질의응답으로 인용하기 가장 좋은 형식.
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

// 브레드크럼 — 사이트 구조를 명확히 전달.
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

// 개별 진료 페이지용 MedicalWebPage + 진료 절차.
export function medicalWebPageSchema(opts: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: opts.name,
    description: opts.description,
    url: `${siteUrl}${opts.path}`,
    inLanguage: "ko",
    isPartOf: { "@id": websiteId },
    about: { "@id": clinicId },
    lastReviewed: "2026-06-20",
  };
}
