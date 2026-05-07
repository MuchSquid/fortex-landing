import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const benefits = [
  { id: 'evidence', title: "Todo registrado", desc: "Cada orden, visita y responsable tiene evidencia.", num: "01" },
  { id: 'status',   title: "Estado Real",     desc: "Ficha técnica viva por equipo con historial completo.", num: "02" },
  { id: 'checklist',title: "Cierre con Pruebas", desc: "Checklists fotográficos firmados para evitar reclamos.", num: "03" },
  { id: 'roles',    title: "Accesos Claros",  desc: "Cada rol ve, edita y autoriza solo lo que le corresponde.", num: "04" },
  { id: 'alerts',   title: "Alertas Tempranas", desc: "Identificación de cuellos de botella mediante semaforización.", num: "05" },
  { id: 'audit',    title: "Auditoría Lista", desc: "Operación estandarizada lista para inspecciones legales.", num: "06" },
];

// — Timeline preview —
const TimelinePreview = () => {
  const events = [
    { time: '09:14', user: 'J. Rodríguez', action: 'Orden #4821 abierta', dot: 'bg-foreground' },
    { time: '09:31', user: 'M. López',     action: 'Técnico asignado',     dot: 'bg-foreground' },
    { time: '11:05', user: 'C. Díaz',      action: 'Visita registrada',    dot: 'bg-foreground' },
    { time: '11:47', user: 'C. Díaz',      action: 'Evidencia fotográfica añadida', dot: 'bg-foreground' },
    { time: '12:20', user: 'Sistema',      action: 'Orden cerrada ✓',      dot: 'bg-green-500' },
  ];
  return (
    <div className="flex flex-col gap-0">
      {events.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08 }}
          className="flex items-start gap-4 relative"
        >
          {/* vertical line */}
          {i < events.length - 1 && (
            <div className="absolute left-[7px] top-4 w-px h-full bg-foreground/10" />
          )}
          <div className={`w-3.5 h-3.5 rounded-full shrink-0 mt-0.5 border border-foreground/20 ${e.dot}`} />
          <div className="pb-5 flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-mono text-[10px] text-muted">{e.time}</span>
              <span className="font-mono text-[10px] text-muted uppercase tracking-wider">{e.user}</span>
            </div>
            <p className="text-xs text-foreground">{e.action}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// — Status card preview —
const StatusPreview = () => (
  <div className="flex flex-col gap-4">
    {[
      { id: 'A4-2', name: 'HVAC Industrial',   status: 'OPERATIVO',   pct: 92, color: 'bg-green-500' },
      { id: 'B2-7', name: 'Compresor Central', status: 'REVISIÓN',    pct: 60, color: 'bg-yellow-400' },
      { id: 'C1-1', name: 'Generador Sur',     status: 'CRÍTICO',     pct: 18, color: 'bg-red-500' },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="border border-foreground/10 p-4 bg-foreground/[0.02]"
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="font-mono text-[10px] text-muted uppercase">#{item.id}</span>
            <p className="text-sm font-bold text-foreground">{item.name}</p>
          </div>
          <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-1 ${
            item.status === 'OPERATIVO' ? 'text-green-400 border border-green-500/30 bg-green-500/10' :
            item.status === 'REVISIÓN'  ? 'text-yellow-400 border border-yellow-400/30 bg-yellow-400/10' :
                                          'text-red-400 border border-red-500/30 bg-red-500/10'
          }`}>
            {item.status}
          </span>
        </div>
        <div className="h-1 bg-foreground/5 w-full">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${item.pct}%` }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
            className={`h-full ${item.color}`}
          />
        </div>
        <p className="font-mono text-[9px] text-muted mt-1 text-right">{item.pct}% uptime</p>
      </motion.div>
    ))}
  </div>
);

// — Checklist preview —
const ChecklistPreview = () => {
  const items = [
    { label: 'Inspección inicial completada', done: true },
    { label: 'Prueba de presión verificada',  done: true },
    { label: 'Fotografía de estado tomada',   done: true },
    { label: 'Firma del supervisor',          done: false },
    { label: 'Reporte de cierre generado',    done: false },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Orden #4821 — Cierre</span>
        <span className="font-mono text-[10px] text-muted">3/5</span>
      </div>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07 }}
          className="flex items-center gap-3 p-3 border border-foreground/5 bg-foreground/[0.02]"
        >
          <div className={`w-4 h-4 border shrink-0 flex items-center justify-center ${item.done ? 'border-foreground bg-foreground' : 'border-foreground/20'}`}>
            {item.done && (
              <svg className="w-2.5 h-2.5 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className={`text-xs ${item.done ? 'text-muted line-through' : 'text-foreground'}`}>
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

// — RBAC preview —
const RbacPreview = () => {
  const roles = [
    { name: 'Operario',   ver: true,  editar: false, aprobar: false, exportar: false },
    { name: 'Supervisor', ver: true,  editar: true,  aprobar: false, exportar: false },
    { name: 'Gerente',    ver: true,  editar: true,  aprobar: true,  exportar: true  },
    { name: 'Admin',      ver: true,  editar: true,  aprobar: true,  exportar: true  },
  ];
  const cols = ['Ver', 'Editar', 'Aprobar', 'Exportar'];
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 border-b border-foreground/10 pb-2 mb-2">
        <span className="font-mono text-[9px] uppercase tracking-wider text-muted">Rol</span>
        {cols.map(c => (
          <span key={c} className="font-mono text-[9px] uppercase tracking-wider text-muted text-center">{c}</span>
        ))}
      </div>
      {roles.map((role, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.08 }}
          className="grid grid-cols-5 py-3 border-b border-foreground/5 items-center"
        >
          <span className="font-mono text-xs text-foreground">{role.name}</span>
          {[role.ver, role.editar, role.aprobar, role.exportar].map((allowed, j) => (
            <div key={j} className="flex justify-center">
              {allowed
                ? <div className="w-4 h-4 bg-foreground flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                : <div className="w-4 h-4 border border-foreground/10 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-foreground/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
              }
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// — Alerts preview —
const AlertsPreview = () => {
  const alerts = [
    { level: 'red',    label: 'CRÍTICO', equipo: 'Equipo #B2-7', msg: 'Sin revisión — 48h vencido', time: 'Hace 2h' },
    { level: 'yellow', label: 'AVISO',   equipo: 'Orden #4920',  msg: 'Sin asignar — 6h pendiente', time: 'Hace 6h' },
    { level: 'yellow', label: 'AVISO',   equipo: 'Sector C',     msg: '2 técnicos sin reportar',    time: 'Hace 1h' },
    { level: 'green',  label: 'OK',      equipo: 'Sector A',     msg: 'Todo al día',                time: 'Ahora'  },
  ];
  const dot = { red: 'bg-red-500', yellow: 'bg-yellow-400', green: 'bg-green-500' };
  const text = { red: 'text-red-400', yellow: 'text-yellow-400', green: 'text-green-400' };
  return (
    <div className="flex flex-col gap-2">
      {alerts.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08 }}
          className="flex items-start gap-3 p-3 border border-foreground/5 bg-foreground/[0.02]"
        >
          <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${dot[a.level]}`} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className={`font-mono text-[9px] uppercase tracking-widest font-bold ${text[a.level]}`}>{a.label}</span>
              <span className="font-mono text-[9px] text-muted">{a.equipo}</span>
            </div>
            <p className="text-xs text-muted">{a.msg}</p>
          </div>
          <span className="font-mono text-[9px] text-muted shrink-0">{a.time}</span>
        </motion.div>
      ))}
    </div>
  );
};

// — Audit log preview —
const AuditPreview = () => {
  const logs = [
    { time: '14:32', user: 'admin',  action: 'EXPORT_REPORT',  status: '200' },
    { time: '14:28', user: 'j.rod',  action: 'UPDATE_STATUS',  status: '200' },
    { time: '14:15', user: 'm.lop',  action: 'ASSIGN_TECH',    status: '200' },
    { time: '13:50', user: 'c.dia',  action: 'UPLOAD_PHOTO',   status: '200' },
    { time: '13:44', user: 'admin',  action: 'DELETE_DRAFT',   status: '403' },
    { time: '12:21', user: 'j.rod',  action: 'CLOSE_ORDER',    status: '200' },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 border-b border-foreground/10 pb-2 mb-1">
        {['Hora', 'Usuario', 'Acción', 'Código'].map(h => (
          <span key={h} className="font-mono text-[9px] uppercase tracking-wider text-muted">{h}</span>
        ))}
      </div>
      {logs.map((l, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.06 }}
          className="grid grid-cols-4 py-2 border-b border-foreground/[0.04] items-center"
        >
          <span className="font-mono text-[10px] text-muted">{l.time}</span>
          <span className="font-mono text-[10px] text-foreground">{l.user}</span>
          <span className="font-mono text-[10px] text-muted truncate">{l.action}</span>
          <span className={`font-mono text-[10px] font-bold ${l.status === '200' ? 'text-green-500' : 'text-red-500'}`}>
            {l.status}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const previews = {
  evidence:  <TimelinePreview />,
  status:    <StatusPreview />,
  checklist: <ChecklistPreview />,
  roles:     <RbacPreview />,
  alerts:    <AlertsPreview />,
  audit:     <AuditPreview />,
};

export const SuiteOneTex = () => {
  const [activeTab, setActiveTab] = useState(benefits[0].id);

  return (
    <section id="onetex" className="py-32 bg-background border-t border-foreground/10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-muted font-mono text-sm uppercase tracking-widest mb-6"
          >
            <span className="w-8 h-px bg-muted" />
            OneTex System
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mt-4 tracking-tighter uppercase leading-none"
          >
            Operaciones <br />
            <span className="text-muted">sin fricción.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 border border-foreground/10">

          {/* Left: interactive list */}
          <div className="lg:col-span-5 flex flex-col border-b lg:border-b-0 lg:border-r border-foreground/10">
            {benefits.map((benefit) => (
              <button
                key={benefit.id}
                onClick={() => setActiveTab(benefit.id)}
                className={`text-left p-6 md:p-8 border-b border-foreground/10 last:border-b-0 transition-all duration-300 group flex items-start gap-6 ${
                  activeTab === benefit.id
                    ? 'bg-foreground text-background'
                    : 'bg-transparent text-foreground hover:bg-foreground/5'
                }`}
              >
                <div className={`font-mono text-sm mt-1 transition-colors shrink-0 ${
                  activeTab === benefit.id ? 'text-background font-bold' : 'text-muted group-hover:text-foreground'
                }`}>
                  {benefit.num}
                </div>
                <div>
                  <h3 className="font-bold text-xl uppercase tracking-tight mb-2">
                    {benefit.title}
                  </h3>
                  <p className={`font-light leading-relaxed text-sm transition-colors ${
                    activeTab === benefit.id ? 'text-background/70' : 'text-muted'
                  }`}>
                    {benefit.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: live preview */}
          <div className="lg:col-span-7 bg-surface flex flex-col relative min-h-[540px] overflow-hidden">
            {/* Top bar */}
            <div className="h-10 border-b border-foreground/10 flex items-center px-5 gap-3 bg-foreground/[0.03] shrink-0">
              <div className="w-2 h-2 rounded-full bg-foreground/15" />
              <div className="w-2 h-2 rounded-full bg-foreground/15" />
              <div className="w-2 h-2 rounded-full bg-foreground/15" />
              <span className="ml-auto font-mono text-[10px] text-muted uppercase tracking-widest">
                ONETEX // {benefits.find(b => b.id === activeTab)?.title}
              </span>
            </div>

            {/* Grid blueprint overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                opacity: 0.02,
              }}
            />

            {/* Preview content */}
            <div className="flex-1 p-6 md:p-10 relative z-10 overflow-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, filter: 'blur(4px)', y: 8 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(4px)', y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {previews[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
