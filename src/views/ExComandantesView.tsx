import React from 'react';

export const ExComandantesView: React.FC = () => {
  const cddCommanders = [
    {
      rank: 'Contra-Almirante (FN)',
      name: 'C ALTE (FN) NÉLIO DE ALMEIDA',
      period: '16ABR2013 a 29SET2021',
      role: 'Ex-Comandante do CDD-CFN',
      photo:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBtIcIDthaEz_SN3Z2IKAYxgcyteJj4Tu36DAc3wco9DhpLL4CVX5ZzaCDhZD4Hak7Q4Z0AZ4HUfinhB6j9JfWHy37LB3IUZ_VUGQw0okTvPJLqf5uUXUpJvPQRbRNOgJJCrsCMXWipgdrlfKVRNK0XR-MoG1WbyOE_EiZH0xDpRTzR2LdD2tmyRc7aThC6hcd8hP8G_C3ukt-6p78GdawfEoSF9bxZvH5gHYePxWDu2crfJ1y3EO79',
    },
    {
      rank: 'Contra-Almirante (FN)',
      name: 'C ALTE (FN) LUIS MANUEL DE CAMPOS MELLO',
      period: '29SET2021 a 14DEZ2022',
      role: 'Ex-Comandante do CDD-CFN',
      photo:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAqOxKJl7eygyaq42RB3Tl5eqMIhflqMQX6qjZpjNISJTdqnwufpC-0cK7FMeBxggc8PJZ1bcQW5mZx-H69x9UjTqbAUgBaTbaYXJLwJBjw_7Dr3SalFvmO6gwwtcbrwW7nFTppyT38CQWHsZj0peTUBchbm_N8XB7Y4J5SZ89sTvBauqhWSsVkwKqnuLMA7W3fay2k746UPWeRJwP_-zQfdG3zp4LYgJVof-orqTfPTDVbDYt4Qksx',
    },
    {
      rank: 'Contra-Almirante (FN)',
      name: 'C ALTE (FN) ROBERTO LEMOS',
      period: '14DEZ2022 a 19FEV2024',
      role: 'Ex-Comandante do CDD-CFN',
      photo:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBE8GZHXyYVrZKw-auFbbr_TAf67icdl03FBdJmGTO2pLoKemHE4X0-2tuxKGdGqUWE4HTPIpJstrt9lHzWBExvTio1wOwPUJG-4kGkuK7G_ImABGMWpVNOb2qfh_ox7d16_-usb5b1Q6-DvaqRNU64iYbPVIg9-KSTAr-q2Zef_mVMu74YZbUVmddg2yFUEtkix77_hrhbFtp395JmTGyFAYyigM23QSkRPr0TksMrbyZT77Nyj2nw',
    },
  ];

  const ctddCommanders = [
    {
      rank: 'Contra-Almirante (FN)',
      name: 'C ALTE (FN) ROBERTO LEMOS',
      period: '19FEV2024 a 17MAI2024',
      role: '1º Comandante do CTDDCFN',
      photo:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdaeT4S2yzq_M_jR62pGg2HHsexg0TQ8nq19y0_L6ao3OTNJYYZg_pM-Ng8W19hv7MTNjtBcCBf52AmgDOKtofFMgsOjRpuj60UZ8avrA4vQfIvzAXqqh4HzRqNlQNqJUjbDKGcenrsaZArRDtWIYGk0746j1JYLm00l_UZwBlP-Vud0b8JOkxSfttFXzKyGHa53zgy2WR8DONFxLBgaVoZ03Q2WDgA51BiQJ7m5UcsNU1SR0FYgg2',
    },
    {
      rank: 'Vice-Almirante (FN)',
      name: 'V ALTE (FN) RENATO',
      period: '17MAI2024 a 27MAR2026',
      role: 'Ex-Comandante do CTDDCFN',
      photo:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBYxVP_f-1324-rpvmQhmpIFohdvsGI9t4KLxwEZRwg848Of8oWn2qtDmHsnQSbNNvSdVfzRn7F46H61vzkSdCFB7WzzdcWkLbUTMqb3BIRiILupJGSjiCNquUwJGzDouvAMAg9faebbolB0DTGakg0a7U0JhmcHzJZ4wJb38tbzE4JfqriQ2Dh9uAZzJ6nYhb7p0Geyi9zPJFgCoYL5RZr-ZvDHVEaaHA4hK4xBhD9WWaxJZCyQsu6',
    },
  ];

  return (
    <div className="flex flex-col w-full space-y-8">
      {/* Top Header Card */}
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#002E32] text-xs font-bold font-mono mb-2">
              <span className="material-symbols-outlined text-sm text-[#8F7034]">military_tech</span>
              GALERIA HISTÓRICA DE OFICIAIS-GENERAIS
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#002E32] tracking-tight font-serif uppercase">
              Antigos Comandantes
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl font-sans">
              Registro histórico das lideranças e Oficiais-Generais que conduziram o desenvolvimento doutrinário e a prontidão operativa do Corpo de Fuzileiros Navais.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-lg self-start md:self-auto font-mono">
            <span className="material-symbols-outlined text-3xl text-[#8F7034]">shield</span>
            <div className="text-left">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Historiografia Naval</span>
              <span className="text-xs font-bold text-slate-800">CFN • TRADIÇÃO & HONRA</span>
            </div>
          </div>
        </div>

        {/* Rapid Stat Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-5 font-mono text-xs">
          <div className="border-l-2 border-[#002E32] pl-3">
            <span className="text-slate-500 font-medium">Período Documentado</span>
            <p className="text-sm font-bold text-slate-800">2013 — Presente</p>
          </div>
          <div className="border-l-2 border-[#BAD435] pl-3">
            <span className="text-slate-500 font-medium">Fases Institucionais</span>
            <p className="text-sm font-bold text-slate-800">CDD-CFN &amp; CTDDCFN</p>
          </div>
          <div className="border-l-2 border-[#8F7034] pl-3 col-span-2 sm:col-span-1">
            <span className="text-slate-500 font-medium">Lideranças Homenageadas</span>
            <p className="text-sm font-bold text-slate-800">5 Comandantes Navais</p>
          </div>
        </div>
      </div>

      {/* SEÇÃO 1: COMANDO DO DESENVOLVIMENTO DOUTRINÁRIO (CDD-CFN) */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3 pb-2 border-b-2 border-slate-300/80">
          <span className="w-2.5 h-6 bg-[#002E32] rounded-sm"></span>
          <h2 className="text-base sm:text-lg font-bold text-[#002E32] tracking-wide uppercase font-serif">
            Comando do Desenvolvimento Doutrinário do Corpo de Fuzileiros Navais (CDD-CFN)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cddCommanders.map((cmd, i) => (
            <article
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative bg-slate-100 p-4 pb-0 flex justify-center items-center overflow-hidden">
                <div className="relative w-48 h-60 rounded-t-lg overflow-hidden border-t-2 border-x-2 border-slate-300 shadow-inner bg-slate-200">
                  <img
                    src={cmd.photo}
                    alt={cmd.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#002E32] via-[#BAD435] to-[#8F7034]"></div>
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between text-center bg-white border-t border-slate-100">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-slate-100 text-[#002E32] mb-1.5 font-mono">
                    {cmd.rank}
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-tight leading-tight min-h-[2.5rem] flex items-center justify-center font-serif">
                    {cmd.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 font-mono">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700">
                    <span className="material-symbols-outlined text-sm text-[#8F7034]">calendar_today</span>
                    <span className="tracking-tight">{cmd.period}</span>
                  </div>
                  <span className="inline-block mt-2 text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                    {cmd.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* SEÇÃO 2: COMANDO DO TREINAMENTO E DO DESENVOLVIMENTO DOUTRINÁRIO (CTDDCFN) */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center space-x-3 pb-2 border-b-2 border-slate-300/80">
          <span className="w-2.5 h-6 bg-[#004D40] rounded-sm"></span>
          <h2 className="text-base sm:text-lg font-bold text-[#002E32] tracking-wide uppercase font-serif">
            Comando do Treinamento e do Desenvolvimento Doutrinário do Corpo de Fuzileiros Navais (CTDDCFN)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctddCommanders.map((cmd, i) => (
            <article
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative bg-slate-100 p-4 pb-0 flex justify-center items-center overflow-hidden">
                <div className="relative w-48 h-60 rounded-t-lg overflow-hidden border-t-2 border-x-2 border-slate-300 shadow-inner bg-slate-200">
                  <img
                    src={cmd.photo}
                    alt={cmd.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#002E32] via-[#BAD435] to-[#8F7034]"></div>
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between text-center bg-white border-t border-slate-100">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-[#002E32]/10 text-[#002E32] mb-1.5 font-mono">
                    {cmd.rank}
                  </span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-tight leading-tight min-h-[2.5rem] flex items-center justify-center font-serif">
                    {cmd.name}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 font-mono">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700">
                    <span className="material-symbols-outlined text-sm text-[#8F7034]">calendar_today</span>
                    <span className="tracking-tight">{cmd.period}</span>
                  </div>
                  <span className="inline-block mt-2 text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                    {cmd.role}
                  </span>
                </div>
              </div>
            </article>
          ))}

          {/* Card de Continuidade da Liderança */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border-2 border-dashed border-slate-300 flex flex-col justify-between text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#002E32]/10 text-[#002E32] flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-2xl">anchor</span>
              </div>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                Comando Atual
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Para informações curriculares detalhadas da atual Direção do CTDDCFN, acesse a página oficial do Comandante.
              </p>
            </div>
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#002E32] bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm font-mono">
                Posto: Capitão de Mar e Guerra (FN)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Nota Histórica de Encerramento */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 flex items-start gap-3">
        <span className="material-symbols-outlined text-lg text-[#002E32] shrink-0 mt-0.5">info</span>
        <div>
          <strong className="text-slate-800">Nota Histórica:</strong> Em conformidade com as diretrizes do Comando-Geral do Corpo de Fuzileiros Navais (CGCFN), a transição entre o Comando do Desenvolvimento Doutrinário (CDD-CFN) e o Comando do Treinamento e do Desenvolvimento Doutrinário (CTDDCFN) consolidou a integração plena entre a elaboração da doutrina anfíbia e a capacitação continuada do combatente naval.
        </div>
      </div>
    </div>
  );
};
