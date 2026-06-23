import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "오시는 길 — 강남 매봉역 도보 7분",
  description:
    "도곡경희한의원 위치 안내. 서울특별시 강남구 논현로28길 24, 세양빌딩 1층. 지하철 3호선 매봉역 4번 출구에서 도보 7분, 건물 내 주차 가능. 진료시간 평일 09:00–16:30, 토요일 09:00–13:00. 전화 02-6949-1888.",
  alternates: { canonical: "/about/location" },
};

export default function LocationPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "홈", path: "/" },
          { name: "오시는 길", path: "/about/location" },
        ])}
      />
      {/* Hero Section */}
      <section className="bg-brown-bg section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">LOCATION</p>
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              오시는 길
            </h1>
            <p className="text-text-light text-lg leading-relaxed">
              도곡경희한의원으로 오시는 방법을 안내해 드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="aspect-square lg:aspect-auto lg:h-[500px] bg-cream rounded-xl flex items-center justify-center">
              <div className="text-center text-brown-dark">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm opacity-60 mb-4">지도 영역</p>
                <div className="flex gap-3 justify-center">
                  <Link
                    href="https://map.naver.com/p/search/도곡경희한의원"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white rounded text-sm text-primary hover:bg-brown-light/20 transition-colors"
                  >
                    네이버지도
                  </Link>
                  <Link
                    href="https://map.kakao.com/?q=도곡경희한의원"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white rounded text-sm text-primary hover:bg-brown-light/20 transition-colors"
                  >
                    카카오맵
                  </Link>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-8">
              {/* Address */}
              <div>
                <h2 className="text-2xl font-medium mb-4 text-primary">주소</h2>
                <p className="text-lg text-text mb-2">
                  서울특별시 강남구 논현로 28길 24, 세양빌딩 1층
                </p>
              </div>

              {/* Transportation */}
              <div>
                <h2 className="text-2xl font-medium mb-4 text-primary">교통 안내</h2>

                <div className="space-y-4">
                  <div className="p-4 bg-cream rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-accent text-white rounded flex items-center justify-center text-sm font-medium">
                        3
                      </span>
                      <h3 className="font-medium text-primary">지하철 3호선</h3>
                    </div>
                    <p className="text-text-light text-sm ml-11">
                      매봉역 4번 출구에서 도보 7분
                    </p>
                  </div>

                  <div className="p-4 bg-cream rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                      <h3 className="font-medium text-primary">주차 안내</h3>
                    </div>
                    <p className="text-text-light text-sm ml-11">
                      건물 내 주차 가능
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-medium mb-4 text-primary">연락처</h2>
                <div className="space-y-2">
                  <p className="text-text">
                    <span className="text-text-light">전화:</span>{" "}
                    <a href="tel:02-6949-1888" className="text-accent hover:underline">
                      02-6949-1888
                    </a>
                  </p>
                  <p className="text-text">
                    <span className="text-text-light">팩스:</span>{" "}
                    070-5208-0631
                  </p>
                  <p className="text-text">
                    <span className="text-text-light">이메일:</span>{" "}
                    <Link href="mailto:jsryan@naver.com" className="text-accent hover:underline">
                      jsryan@naver.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="section bg-brown-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center text-primary">
              진료 시간
            </h2>

            <div className="bg-white rounded-xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-cream">
                    <td className="px-6 py-4 text-text-light">평일</td>
                    <td className="px-6 py-4 text-primary font-medium text-right">09:00 - 16:30</td>
                  </tr>
                  <tr className="border-b border-cream">
                    <td className="px-6 py-4 text-text-light">토요일</td>
                    <td className="px-6 py-4 text-primary font-medium text-right">09:00 - 13:00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-text-light">휴진</td>
                    <td className="px-6 py-4 text-accent font-medium text-right">일요일, 공휴일</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center text-text-light text-sm mt-6">
              평일, 토요일 모두 점심시간 없이 진료합니다
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
