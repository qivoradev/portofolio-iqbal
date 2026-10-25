import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { projects as defaultProjects } from '../data/projects';

export default function Projects({ language = 'id', projects: propProjects, openModal: propOpenModal } = {}) {
  const isEn = language === 'en';
  const [internalModalProject, setInternalModalProject] = useState(null);

  const projectsList = propProjects || defaultProjects;
  const handleOpenModal = propOpenModal || ((project) => setInternalModalProject(project));

  // Seasonality bar chart data (12 months: Jan-Dec, Nov peaks at 100%)
  const seasonalityData = [
    { m: 'J', val: 42 },
    { m: 'F', val: 38 },
    { m: 'M', val: 55 },
    { m: 'A', val: 48 },
    { m: 'M', val: 52 },
    { m: 'J', val: 50 },
    { m: 'J', val: 46 },
    { m: 'A', val: 62 },
    { m: 'S', val: 78 },
    { m: 'O', val: 70 },
    { m: 'N', val: 100, isPeak: true },
    { m: 'D', val: 86 },
  ];

  // Sub-category profit performance
  const subCategoryData = [
    { name: 'Copiers', val: '+55.6K', width: '85%', positive: true },
    { name: 'Phones', val: '+44.5K', width: '70%', positive: true },
    { name: 'Accessories', val: '+41.9K', width: '65%', positive: true },
    { name: 'Paper', val: '+34.1K', width: '55%', positive: true },
    { name: 'Tables (Loss)', val: '-17.7K', width: '38%', positive: false },
  ];

  // NYC Borough data
  const boroughData = [
    { name: 'Brooklyn', count: '76.4K (32%)', width: '92%' },
    { name: 'Queens', count: '61.2K (26%)', width: '74%' },
    { name: 'Manhattan', count: '41.5K (18%)', width: '52%' },
    { name: 'Bronx', count: '37.8K (16%)', width: '46%' },
    { name: 'Staten Island', count: '14.2K (6%)', width: '22%' },
  ];

  // NYC Hourly distribution peak
  const hourlyBars = [
    { h: '00', val: 24 },
    { h: '04', val: 14 },
    { h: '08', val: 62 },
    { h: '12', val: 70 },
    { h: '16', val: 96, isPeak: true },
    { h: '18', val: 100, isPeak: true },
    { h: '20', val: 68 },
    { h: '22', val: 45 },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#111110] text-[#E8E6DF] scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12"
          style={{ borderBottom: '0.5px solid #252523' }}
        >
          <div>
            <span
              className="text-[11px] font-mono font-bold tracking-widest text-[#22C55E] uppercase block mb-2"
              style={{ letterSpacing: '0.1em' }}
            >
              [ 01 ] PORTFOLIO
            </span>
            <h2
              className="font-extrabold uppercase text-[#E8E6DF]"
              style={{
                fontSize: 'clamp(32px, 5vw, 52px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.08,
              }}
            >
              SELECTED WORKS
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#3E3E3B] uppercase tracking-wider">
            {isEn ? '2 CASE STUDIES DOCUMENTED' : '2 STUDI KASUS TERDOKUMENTASI'}
          </span>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12 sm:space-y-16">

          {/* PROJECT CARD 01: Superstore Sales & Profitability Analysis */}
          <div
            className="rounded-[8px] overflow-hidden bg-[#1A1A18] transition-colors"
            style={{ border: '0.5px solid #2E2E2C' }}
          >
            {/* 1. Dashboard Mockup Area */}
            <div
              className="p-5 sm:p-6 bg-[#242422]"
              style={{ borderBottom: '0.5px solid #2E2E2C' }}
            >
              {/* 3 KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                <div
                  className="p-4 rounded-[6px] bg-[#111110]"
                  style={{ border: '0.5px solid #252523' }}
                >
                  <span className="text-[10px] font-mono font-bold text-[#3E3E3B] uppercase tracking-widest block mb-1">
                    TOTAL SALES
                  </span>
                  <div className="font-mono text-[26px] sm:text-[28px] font-extrabold tracking-tight text-[#E8E6DF]">
                    <span className="text-[#22C55E]">$</span>
                    <span className="text-[#22C55E]">2</span>,295,274
                  </div>
                </div>

                <div
                  className="p-4 rounded-[6px] bg-[#111110]"
                  style={{ border: '0.5px solid #252523' }}
                >
                  <span className="text-[10px] font-mono font-bold text-[#3E3E3B] uppercase tracking-widest block mb-1">
                    TOTAL PROFIT
                  </span>
                  <div className="font-mono text-[26px] sm:text-[28px] font-extrabold tracking-tight text-[#E8E6DF]">
                    <span className="text-[#22C55E]">$</span>
                    <span className="text-[#22C55E]">2</span>85,988
                  </div>
                </div>

                <div
                  className="p-4 rounded-[6px] bg-[#111110]"
                  style={{ border: '0.5px solid #252523' }}
                >
                  <span className="text-[10px] font-mono font-bold text-[#3E3E3B] uppercase tracking-widest block mb-1">
                    PROFIT MARGIN
                  </span>
                  <div className="font-mono text-[26px] sm:text-[28px] font-extrabold tracking-tight text-[#E8E6DF]">
                    <span className="text-[#22C55E]">1</span>2.5%
                  </div>
                </div>
              </div>

              {/* 2 Chart Boxes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Chart Box Kiri: Monthly Seasonality */}
                <div
                  className="p-4 rounded-[6px] bg-[#111110] flex flex-col justify-between"
                  style={{ border: '0.5px solid #252523' }}
                >
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                    <span className="text-[#8A8A86] font-semibold uppercase tracking-wider">
                      Monthly Sales Seasonality
                    </span>
                    <span className="text-[#22C55E] text-[10px] font-bold">
                      NOV PEAK (100%)
                    </span>
                  </div>

                  {/* 12-Month Mini Bar Chart */}
                  <div className="h-28 flex items-end justify-between gap-1 pt-2">
                    {seasonalityData.map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <div
                          className="w-full rounded-t-[2px] transition-all"
                          style={{
                            height: `${item.val}%`,
                            backgroundColor: item.isPeak ? '#22C55E' : 'rgba(34, 197, 94, 0.4)',
                          }}
                          title={`Month ${item.m}: ${item.val}% of peak`}
                        />
                        <span className="text-[9px] font-mono text-[#3E3E3B] font-bold">
                          {item.m}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart Box Kanan: Sub-Category Profit Performance */}
                <div
                  className="p-4 rounded-[6px] bg-[#111110] flex flex-col justify-between"
                  style={{ border: '0.5px solid #252523' }}
                >
                  <div className="flex items-center justify-between mb-2 text-[11px] font-mono">
                    <span className="text-[#8A8A86] font-semibold uppercase tracking-wider">
                      Sub-Category Profit Performance
                    </span>
                    <span className="text-[#E24B4A] text-[10px] font-bold">
                      MARGIN LEAK: TABLES
                    </span>
                  </div>

                  {/* Horizontal Bar Chart */}
                  <div className="space-y-1.5 pt-1 font-mono text-[11px]">
                    {subCategoryData.map((cat) => (
                      <div key={cat.name} className="flex items-center justify-between gap-2">
                        <span className="w-24 text-[10px] text-[#8A8A86] truncate">
                          {cat.name}
                        </span>
                        <div className="flex-1 bg-[#1A1A18] h-3.5 rounded-[2px] overflow-hidden flex items-center px-1">
                          <div
                            className="h-2 rounded-[1px]"
                            style={{
                              width: cat.width,
                              backgroundColor: cat.positive ? '#22C55E' : '#E24B4A',
                            }}
                          />
                        </div>
                        <span
                          className="w-14 text-right text-[10px] font-bold"
                          style={{ color: cat.positive ? '#22C55E' : '#E24B4A' }}
                        >
                          {cat.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Info Area Card */}
            <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#22C55E] uppercase block mb-1">
                  01 // CASE STUDY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#E8E6DF] mb-2 tracking-tight">
                  Superstore Sales & Profitability Analysis
                </h3>
                <p
                  className="text-[#8A8A86]"
                  style={{ fontSize: '15px', lineHeight: 1.7 }}
                >
                  Executive Microsoft Excel dashboard analyzing total sales ($2.29M), profit margin (12.5%), and profit leakages across product categories and regional states.
                </p>
              </div>

              {/* Tags & Action Link */}
              <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {['Microsoft Excel', 'Pivot Tables', 'Dynamic Slicers', 'Executive KPIs'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-[3px] text-[#3E3E3B] hover:text-[#8A8A86] transition-colors"
                      style={{ border: '0.5px solid #2E2E2C' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenModal(projectsList[0])}
                  className="text-[#22C55E] font-mono font-bold text-xs hover:underline inline-flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0"
                >
                  <span>EXPLORE ↗</span>
                </button>
              </div>
            </div>
          </div>

          {/* PROJECT CARD 02: NYC Traffic Collisions Analysis */}
          <div
            className="rounded-[8px] overflow-hidden bg-[#1A1A18] transition-colors"
            style={{ border: '0.5px solid #2E2E2C' }}
          >
            {/* 1. Dashboard Mockup Area */}
            <div
              className="p-5 sm:p-6 bg-[#242422]"
              style={{ borderBottom: '0.5px solid #2E2E2C' }}
            >
              {/* 4 KPI Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                <div
                  className="p-3.5 rounded-[6px] bg-[#111110]"
                  style={{ border: '0.5px solid #252523' }}
                >
                  <span className="text-[10px] font-mono font-bold text-[#3E3E3B] uppercase tracking-widest block mb-1">
                    TOTAL RECORDS
                  </span>
                  <div className="font-mono text-xl sm:text-2xl font-extrabold text-[#E8E6DF]">
                    <span className="text-[#22C55E]">2</span>39K
                  </div>
                </div>

                <div
                  className="p-3.5 rounded-[6px] bg-[#111110]"
                  style={{ border: '0.5px solid #252523' }}
                >
                  <span className="text-[10px] font-mono font-bold text-[#3E3E3B] uppercase tracking-widest block mb-1">
                    TOTAL INJURIES
                  </span>
                  <div className="font-mono text-xl sm:text-2xl font-extrabold text-[#E8E6DF]">
                    <span className="text-[#22C55E]">1</span>16,227
                  </div>
                </div>

                <div
                  className="p-3.5 rounded-[6px] bg-[#111110]"
                  style={{ border: '0.5px solid #252523' }}
                >
                  <span className="text-[10px] font-mono font-bold text-[#3E3E3B] uppercase tracking-widest block mb-1">
                    FATAL CASES
                  </span>
                  <div className="font-mono text-xl sm:text-2xl font-extrabold text-[#E24B4A]">
                    268
                  </div>
                </div>

                <div
                  className="p-3.5 rounded-[6px] bg-[#111110]"
                  style={{ border: '0.5px solid #252523' }}
                >
                  <span className="text-[10px] font-mono font-bold text-[#3E3E3B] uppercase tracking-widest block mb-1">
                    DRIVER FAULT RATE
                  </span>
                  <div className="font-mono text-xl sm:text-2xl font-extrabold text-[#E8E6DF]">
                    <span className="text-[#22C55E]">4</span>8.7%
                  </div>
                </div>
              </div>

              {/* Headline Insight Box */}
              <div
                className="p-3.5 rounded-[6px] bg-[#111110] mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                style={{ border: '0.5px solid #252523' }}
              >
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E24B4A] shrink-0" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#E24B4A] uppercase">
                    HEADLINE INSIGHT:
                  </span>
                </div>
                <p className="text-xs text-[#8A8A86] font-mono leading-relaxed">
                  Driver Inattention/Distraction was the primary collision factor (58,300+ incidents); Brooklyn &amp; Queens accounted for ~58% of all borough crashes.
                </p>
              </div>

              {/* 2 Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Chart Kiri: Borough Breakdown */}
                <div
                  className="p-4 rounded-[6px] bg-[#111110] flex flex-col justify-between"
                  style={{ border: '0.5px solid #252523' }}
                >
                  <div className="flex items-center justify-between mb-2 text-[11px] font-mono">
                    <span className="text-[#8A8A86] font-semibold uppercase tracking-wider">
                      Borough Incident Volume
                    </span>
                    <span className="text-[#3E3E3B] text-[10px]">238K TOTAL</span>
                  </div>

                  <div className="space-y-1.5 font-mono text-[10px]">
                    {boroughData.map((b) => (
                      <div key={b.name} className="flex items-center justify-between gap-2">
                        <span className="w-24 text-[#8A8A86] truncate">{b.name}</span>
                        <div className="flex-1 bg-[#1A1A18] h-3 rounded-[2px] overflow-hidden flex items-center px-1">
                          <div
                            className="h-1.5 rounded-[1px] bg-[#22C55E]"
                            style={{ width: b.width }}
                          />
                        </div>
                        <span className="w-20 text-right text-[#E8E6DF] font-bold">
                          {b.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart Kanan: Rush Hour Hourly Distribution */}
                <div
                  className="p-4 rounded-[6px] bg-[#111110] flex flex-col justify-between"
                  style={{ border: '0.5px solid #252523' }}
                >
                  <div className="flex items-center justify-between mb-2 text-[11px] font-mono">
                    <span className="text-[#8A8A86] font-semibold uppercase tracking-wider">
                      Peak Rush Hours Distribution
                    </span>
                    <span className="text-[#E24B4A] text-[10px] font-bold">
                      PEAK: 16:00 - 18:00
                    </span>
                  </div>

                  {/* Hourly Bar Graphic */}
                  <div className="h-28 flex items-end justify-between gap-1.5 pt-2">
                    {hourlyBars.map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <div
                          className="w-full rounded-t-[2px] transition-all"
                          style={{
                            height: `${item.val}%`,
                            backgroundColor: item.isPeak ? '#E24B4A' : '#22C55E',
                            opacity: item.isPeak ? 1 : 0.45,
                          }}
                        />
                        <span className="text-[9px] font-mono text-[#3E3E3B] font-bold">
                          {item.h}h
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Info Area Card */}
            <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#22C55E] uppercase block mb-1">
                  02 // CASE STUDY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#E8E6DF] mb-2 tracking-tight">
                  NYC Motor Vehicle Collisions & Safety Analysis
                </h3>
                <p
                  className="text-[#8A8A86]"
                  style={{ fontSize: '15px', lineHeight: 1.7 }}
                >
                  Interactive NYC traffic safety evaluation dashboard (2021–2023) analyzing 238,000+ collision records, injury rates, and primary driver distraction factors.
                </p>
              </div>

              {/* Tools & Action Link */}
              <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {['SQL', 'Looker Studio', 'Microsoft Excel'].map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded-[3px] text-[#3E3E3B] hover:text-[#8A8A86] transition-colors"
                      style={{ border: '0.5px solid #2E2E2C' }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenModal(projectsList[1])}
                  className="text-[#22C55E] font-mono font-bold text-xs hover:underline inline-flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0"
                >
                  <span>EXPLORE ↗</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Lightbox */}
        {internalModalProject && (
          <ProjectModal
            project={internalModalProject}
            onClose={() => setInternalModalProject(null)}
            language={language}
          />
        )}

      </div>
    </section>
  );
}
