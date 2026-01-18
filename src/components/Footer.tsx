import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brown-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">도곡 경희한의원</h3>
            <p className="text-brown-light text-sm leading-relaxed">
              자율신경 실조증 전문 치료<br />
              몸과 마음의 균형을 되찾아드립니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-white">바로가기</h4>
            <ul className="space-y-2.5 text-sm text-brown-light">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  한의원 소개
                </Link>
              </li>
              <li>
                <Link href="/treatment" className="hover:text-white transition-colors">
                  진료 안내
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-white transition-colors">
                  치료 사례
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-white transition-colors">
                  예약 상담
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4 text-white">연락처</h4>
            <ul className="space-y-2.5 text-sm text-brown-light">
              <li>전화: 02-XXX-XXXX</li>
              <li>팩스: 02-XXX-XXXX</li>
              <li>이메일: info@dogok-kyunghee.com</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-medium mb-4 text-white">진료 시간</h4>
            <ul className="space-y-2.5 text-sm text-brown-light">
              <li>평일: 09:00 - 18:00</li>
              <li>토요일: 09:00 - 13:00</li>
              <li>일요일/공휴일: 휴진</li>
              <li>점심시간: 13:00 - 14:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-brown-light">
              <p>서울특별시 강남구 도곡동 XXX-XX 경희빌딩 3층</p>
              <p className="mt-1">사업자등록번호: XXX-XX-XXXXX | 대표: OOO</p>
            </div>
            <div className="text-sm text-brown-light">
              <p>&copy; {new Date().getFullYear()} 도곡 경희한의원. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
