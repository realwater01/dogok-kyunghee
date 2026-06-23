"use client";

import { useEffect, useRef } from "react";
import { clinic } from "@/lib/site";

// 카카오맵 임베드. 카카오 개발자센터 JavaScript 키를 NEXT_PUBLIC_KAKAO_MAP_KEY로 받아
// 한의원 좌표에 마커를 찍는다. 키가 없으면 자리표시자를 보여준다.
declare global {
  interface Window {
    kakao: any;
  }
}

const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

export default function KakaoMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!KAKAO_KEY || !containerRef.current) return;

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => {
        const center = new window.kakao.maps.LatLng(
          clinic.geo.latitude,
          clinic.geo.longitude
        );
        const map = new window.kakao.maps.Map(containerRef.current, {
          center,
          level: 2,
        });
        const marker = new window.kakao.maps.Marker({ position: center });
        marker.setMap(map);

        // 마커에 한의원 이름 라벨
        const info = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:6px 10px;font-size:13px;white-space:nowrap;">${clinic.name}</div>`,
        });
        info.open(map, marker);
      });
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  if (!KAKAO_KEY) {
    return (
      <div className="w-full h-full flex items-center justify-center text-center text-brown-dark">
        <div>
          <svg
            className="w-16 h-16 mx-auto mb-4 opacity-40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-sm opacity-60">지도 준비 중</p>
        </div>
      </div>
    );
  }

  return <div ref={containerRef} className="w-full h-full" />;
}
