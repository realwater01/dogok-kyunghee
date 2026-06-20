import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#5D4E3C', color: '#ffffff', padding: '48px 0' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Info */}
          <div>
            <h3 style={{ color: '#ffffff' }} className="text-xl font-semibold mb-4">도곡경희한의원</h3>
            <p style={{ color: 'rgba(255,255,255,0.85)' }} className="text-sm leading-relaxed">
              한약, 제대로 달이다<br />
              천연약재의 배합을 통한 최적의 자연치료로<br />
              건강한 삶을 되찾아드립니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff' }} className="font-medium mb-4">바로가기</h4>
            <ul style={{ color: 'rgba(255,255,255,0.85)' }} className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:opacity-100 transition-opacity">
                  한의원 소개
                </Link>
              </li>
              <li>
                <Link href="/#treatment" className="hover:opacity-100 transition-opacity">
                  진료 안내
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="hover:opacity-100 transition-opacity">
                  치료 사례
                </Link>
              </li>
              <li>
                <a href="tel:02-6949-1888" className="hover:opacity-100 transition-opacity">
                  예약 상담
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: '#ffffff' }} className="font-medium mb-4">연락처</h4>
            <ul style={{ color: 'rgba(255,255,255,0.85)' }} className="space-y-2.5 text-sm">
              <li>전화: 02-6949-1888</li>
              <li>팩스: 070-5208-0631</li>
              <li>이메일: jsryan@naver.com</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 style={{ color: '#ffffff' }} className="font-medium mb-4">진료 시간</h4>
            <ul style={{ color: 'rgba(255,255,255,0.85)' }} className="space-y-2.5 text-sm">
              <li>평일: 09:00 - 16:30</li>
              <li>토요일: 09:00 - 13:00</li>
              <li>일요일/공휴일: 휴진</li>
              <li>평일, 토요일 모두 점심시간 없이 진료합니다</li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '48px', paddingTop: '32px' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div style={{ color: 'rgba(255,255,255,0.85)' }} className="text-sm">
              <p>서울특별시 강남구 논현로 28길 24, 세양빌딩 1층</p>
              <p className="mt-1">사업자등록번호: 461-94-01431 | 대표: 이진수</p>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.85)' }} className="text-sm">
              <p>&copy; {new Date().getFullYear()} 도곡경희한의원. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
