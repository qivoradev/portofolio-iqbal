import React from 'react';

export default function StatBar() {
  const stats = [
    {
      label: 'TOTAL SALES ANALYZED',
      accent: '$',
      value: '2.29M',
    },
    {
      label: 'PROFIT DOCUMENTED',
      accent: '$',
      value: '285,988',
    },
    {
      label: 'CASE STUDIES',
      accent: '0',
      value: '2',
    },
    {
      label: 'CERTIFICATIONS',
      accent: '0',
      value: '2',
    },
  ];

  return (
    <section
      className="w-full bg-[#111110] select-none"
      style={{
        borderTop: '0.5px solid #252523',
        borderBottom: '0.5px solid #252523',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((item, idx) => (
            <div
              key={item.label}
              className={`py-6 sm:py-8 px-4 flex flex-col justify-center ${
                idx % 2 === 0 ? 'border-r-[0.5px] border-[#252523]' : ''
              } ${
                idx < 2 ? 'border-b-[0.5px] md:border-b-0 border-[#252523]' : ''
              } md:border-r-[0.5px] md:last:border-r-0 border-[#252523]`}
            >
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#3E3E3B] uppercase mb-1">
                {item.label}
              </span>
              <div
                className="font-mono font-extrabold text-[#E8E6DF] tracking-tight"
                style={{ fontSize: '26px', lineHeight: 1.15 }}
              >
                <span className="text-[#22C55E]">{item.accent}</span>
                <span>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
