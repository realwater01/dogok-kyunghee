"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("상담 문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-accent font-medium mb-4">CONTACT</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">
              상담 문의
            </h2>
            <p className="text-text-light mb-10 leading-relaxed">
              궁금한 점이 있으시면 언제든지 문의해 주세요.
              <br />
              친절하게 상담해 드리겠습니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-primary">전화 상담</h3>
                  <p className="text-text">02-XXX-XXXX</p>
                  <p className="text-sm text-text-light">평일 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-primary">오시는 길</h3>
                  <p className="text-text">
                    서울특별시 강남구 도곡동 XXX-XX
                  </p>
                  <p className="text-sm text-text-light">
                    지하철 3호선 도곡역 3번 출구
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-primary">진료 시간</h3>
                  <p className="text-text">평일: 09:00 - 18:00</p>
                  <p className="text-text">토요일: 09:00 - 13:00</p>
                  <p className="text-sm text-text-light">
                    일요일/공휴일 휴진, 점심 13:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cream p-10 rounded-2xl">
            <h3 className="text-xl font-semibold mb-8 text-primary">온라인 상담 신청</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-white border border-brown-light rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-primary"
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  연락처 *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-white border border-brown-light rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-primary"
                  placeholder="010-0000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white border border-brown-light rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-primary"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  상담 내용 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3.5 bg-white border border-brown-light rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none text-primary"
                  placeholder="증상이나 궁금한 점을 자유롭게 적어주세요"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-center py-4 mt-4"
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
