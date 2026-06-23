// 원장별 요일 진료표. 사이트 브랜드 색(accent 브라운 헤더 + cream 보더)에 맞춤.
const days = ["월", "화", "수", "목", "금", "토"];

const doctors = [
  {
    name: "이진수 원장님",
    rows: [
      { time: "9시–1시", marks: [true, true, false, true, true, true] },
      { time: "1시–4시반", marks: [true, false, false, true, false, false] },
    ],
  },
  {
    name: "오방글 원장님",
    rows: [
      { time: "9시–1시", marks: [true, true, true, false, true, false] },
      { time: "1시–4시반", marks: [true, true, true, false, true, false] },
    ],
  },
];

export default function DoctorSchedule() {
  return (
    <div className="space-y-8">
      {doctors.map((doc) => (
        <div key={doc.name} className="overflow-x-auto">
          <table className="w-full border-collapse text-center min-w-[480px]">
            <thead>
              <tr className="bg-accent text-white">
                <th className="px-4 py-3 text-left text-base font-semibold whitespace-nowrap w-[28%]">
                  {doc.name}
                </th>
                {days.map((d) => (
                  <th key={d} className="px-3 py-3 font-semibold w-[12%]">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {doc.rows.map((row) => (
                <tr key={row.time} className="bg-white border-b border-cream last:border-b-0">
                  <td className="px-4 py-3 text-text-light border-r border-cream">
                    {row.time}
                  </td>
                  {row.marks.map((m, i) => (
                    <td
                      key={i}
                      className="px-3 py-3 border-r border-cream last:border-r-0 text-accent text-lg font-medium"
                    >
                      {m ? "O" : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
