"use client";

import { useState } from "react";
import Link from "next/link";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const LINES_PER_DAY = 6;

type DayLine = { text: string; done: boolean };
type DayTasks = { [day: string]: DayLine[] };

const makeDayLines = (prefilled: string[] = []): DayLine[] =>
  Array.from({ length: LINES_PER_DAY }, (_, i) => ({ text: prefilled[i] ?? "", done: false }));

const INITIAL_TASKS: DayTasks = {
  Sunday: makeDayLines(["Farmer's market 🥦"]),
  Monday: makeDayLines(["Team planning ✔"]),
  Tuesday: makeDayLines(["Design review"]),
  Wednesday: makeDayLines(["Client meeting"]),
  Thursday: makeDayLines(["Yoga class 🧘"]),
  Friday: makeDayLines(["Submit report"]),
  Saturday: makeDayLines(["Brunch with friends ☕"]),
};

const TODO_ITEMS = [
  { id: 1, text: "Morning yoga 🧘", done: true },
  { id: 2, text: "Read 20 pages 📖", done: false },
  { id: 3, text: "Drink 8 glasses 💧", done: false },
  { id: 4, text: "Meal prep 🥗", done: false },
  { id: 5, text: "Call grandma 📞", done: false },
  { id: 6, text: "Journaling ✏️", done: false },
];

const PAGE_DECORATIONS = [
  { pos: "top-3 left-3", items: ["🌵", "🌸", "🍃"], sizes: ["72px", "40px", "24px"] },
  { pos: "top-3 right-3", items: ["🌻", "🌼", "🍀"], sizes: ["66px", "36px", "22px"] },
  { pos: "bottom-3 left-3", items: ["💐", "🌿", "🍂"], sizes: ["58px", "38px", "24px"] },
  { pos: "bottom-3 right-3", items: ["🪴", "🌷", "✨"], sizes: ["64px", "36px", "22px"] },
];

export default function DashboardPage() {
  const [dayTasks, setDayTasks] = useState<DayTasks>(INITIAL_TASKS);
  const [todos, setTodos] = useState(TODO_ITEMS);
  const [newTodo, setNewTodo] = useState("");

  const updateLineText = (day: string, index: number, value: string) => {
    setDayTasks((prev) => {
      const updated = [...prev[day]];
      updated[index] = { ...updated[index], text: value };
      return { ...prev, [day]: updated };
    });
  };

  const toggleLine = (day: string, index: number) => {
    setDayTasks((prev) => {
      const updated = [...prev[day]];
      updated[index] = { ...updated[index], done: !updated[index].done };
      return { ...prev, [day]: updated };
    });
  };

  const toggleTodo = (id: number) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: newTodo.trim(), done: false }]);
    setNewTodo("");
  };

  return (
    <div
      className="w-screen h-screen flex flex-col overflow-hidden"
      style={{ background: "#f3e3ce", fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Corner decorations */}
      {PAGE_DECORATIONS.map(({ pos, items, sizes }, i) => (
        <div key={i} className={`fixed ${pos} z-0 flex flex-col items-center gap-1.5 select-none pointer-events-none`}>
          {items.map((item, j) => (
            <span key={j} style={{ fontSize: sizes[j], lineHeight: 1, opacity: j === 0 ? 0.85 : j === 1 ? 0.65 : 0.45 }}>{item}</span>
          ))}
        </div>
      ))}
      <div className="fixed left-3 top-1/2 -translate-y-1/2 z-0 select-none pointer-events-none flex flex-col items-center gap-2">
        <span style={{ fontSize: "36px", opacity: 0.5 }}>🌾</span>
        <span style={{ fontSize: "44px", opacity: 0.65 }}>🌺</span>
        <span style={{ fontSize: "28px", opacity: 0.4 }}>🍃</span>
      </div>
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-0 select-none pointer-events-none flex flex-col items-center gap-2">
        <span style={{ fontSize: "32px", opacity: 0.5 }}>🌱</span>
        <span style={{ fontSize: "44px", opacity: 0.65 }}>🌿</span>
        <span style={{ fontSize: "26px", opacity: 0.4 }}>🍀</span>
      </div>

      {/* Page Card — tighter margins so day columns get more space */}
      <div
        className="relative z-10 flex flex-col flex-1 rounded-3xl overflow-hidden"
        style={{ background: "#fdf5ec", margin: "14px 32px", boxShadow: "0 4px 30px rgba(0,0,0,0.07)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between shrink-0" style={{ padding: "20px 36px 14px 36px" }}>
          <div className="flex items-end gap-2 select-none">
            <span style={{ fontSize: "50px", lineHeight: 1 }}>🌵</span>
            <span style={{ fontSize: "32px", lineHeight: 1, marginBottom: "6px" }}>🪴</span>
            <span style={{ fontSize: "20px", lineHeight: 1, marginBottom: "10px", opacity: 0.6 }}>🌸</span>
          </div>
          <h1 style={{ fontFamily: "'Dancing Script', cursive", fontSize: "58px", color: "#3b2a1a", lineHeight: 1 }}>Weekly Planner</h1>
          <div className="flex items-end gap-2 select-none">
            <span style={{ fontSize: "20px", lineHeight: 1, marginBottom: "10px", opacity: 0.6 }}>🌼</span>
            <span style={{ fontSize: "32px", lineHeight: 1, marginBottom: "6px" }}>🌻</span>
            <span style={{ fontSize: "48px", lineHeight: 1 }}>🌷</span>
            <Link href="/" className="ml-3 transition-colors hover:opacity-70" style={{ color: "#c8a882", fontSize: "13px", fontWeight: 700, alignSelf: "center", paddingBottom: "4px" }}>
              ← Sign out
            </Link>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 min-h-0" style={{ gap: "14px", padding: "0 20px 20px 20px" }}>

          {/* Day Grid */}
          <div className="flex flex-1 min-h-0" style={{ gap: "8px" }}>
            {DAYS.map((day) => (
              <DayCard
                key={day}
                day={day}
                lines={dayTasks[day]}
                onTextChange={(i, v) => updateLineText(day, i, v)}
                onToggle={(i) => toggleLine(day, i)}
              />
            ))}
          </div>

          {/* To Do Sidebar */}
          <div className="shrink-0 flex flex-col min-h-0" style={{ width: "200px", gap: "14px" }}>
            <div
              className="shrink-0 text-center text-white font-black rounded-full shadow-sm"
              style={{ background: "#e07b21", fontFamily: "'Dancing Script', cursive", fontSize: "23px", padding: "9px 12px" }}
            >
              To do list ✏️
            </div>

            <div className="flex-1 overflow-y-auto flex flex-col" style={{ gap: "14px" }}>
              {todos.map((todo) => (
                <div key={todo.id} onClick={() => toggleTodo(todo.id)} className="flex items-start cursor-pointer" style={{ gap: "10px" }}>
                  <div
                    className="shrink-0 rounded-full border-2 flex items-center justify-center transition-all"
                    style={{ width: "22px", height: "22px", marginTop: "2px", borderColor: "#e07b21", background: todo.done ? "#e07b21" : "white" }}
                  >
                    {todo.done && (
                      <svg style={{ width: 11, height: 11, color: "white" }} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div className="relative" style={{ color: todo.done ? "#c8a882" : "#5c3b1a", fontSize: "15px", fontWeight: 700, lineHeight: "1.4" }}>
                    {todo.text}
                    {todo.done && <div className="absolute rounded-full" style={{ top: "50%", left: 0, width: "100%", height: "1.5px", background: "#c8a882", transform: "translateY(-50%)" }} />}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={addTodo} className="shrink-0 flex flex-col" style={{ gap: "9px" }}>
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a task..."
                className="w-full outline-none rounded-xl"
                style={{ background: "#f0e0cd", border: "1.5px solid #e4c9b0", color: "#5c3b1a", fontSize: "14px", fontWeight: 600, padding: "10px 14px", fontFamily: "'Nunito', sans-serif" }}
              />
              <button
                type="submit"
                disabled={!newTodo.trim()}
                className="rounded-full text-white font-black hover:brightness-110 disabled:opacity-40 transition-all shadow-sm"
                style={{ background: "#e07b21", fontSize: "14px", padding: "9px 16px", fontFamily: "'Nunito', sans-serif" }}
              >
                + Add Task
              </button>
            </form>

            <div className="flex justify-center items-end gap-2 shrink-0 select-none">
              <span style={{ fontSize: "28px", opacity: 0.6 }}>🌺</span>
              <span style={{ fontSize: "58px", lineHeight: 1 }}>🌵</span>
              <span style={{ fontSize: "26px", opacity: 0.6 }}>🍀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Day Card with per-line tick ──
function DayCard({ day, lines, onTextChange, onToggle }: {
  day: string;
  lines: DayLine[];
  onTextChange: (i: number, v: string) => void;
  onToggle: (i: number) => void;
}) {
  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div
        className="shrink-0 text-center text-white font-black rounded-full shadow-sm"
        style={{ background: "#e07b21", fontFamily: "'Dancing Script', cursive", fontSize: "18px", padding: "8px 6px", marginBottom: "10px" }}
      >
        {day}
      </div>
      <div className="flex-1 rounded-2xl flex flex-col overflow-hidden" style={{ background: "#fff9f2" }}>
        {lines.map((line, i) => (
          <div
            key={i}
            className="flex items-center flex-1"
            style={{
              borderBottom: i < lines.length - 1 ? "1.5px solid #f0d5b8" : "none",
              minHeight: 0,
              padding: "0 8px",
              gap: "6px",
            }}
          >
            {/* Small tick button */}
            <button
              type="button"
              onClick={() => onToggle(i)}
              className="shrink-0 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110"
              style={{
                width: "18px",
                height: "18px",
                borderColor: line.done ? "#e07b21" : "#f0d5b8",
                background: line.done ? "#e07b21" : "transparent",
              }}
            >
              {line.done && (
                <svg style={{ width: 9, height: 9, color: "white" }} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>

            {/* Text — wraps fully, visible, no overflow */}
            <div className="relative flex-1 flex items-center">
              <textarea
                value={line.text}
                onChange={(e) => onTextChange(i, e.target.value)}
                rows={1}
                className="w-full bg-transparent outline-none resize-none overflow-hidden"
                style={{
                  color: line.done ? "#c8a882" : "#5c3b1a",
                  fontSize: "12px",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  textDecoration: line.done ? "line-through" : "none",
                  lineHeight: "1.3",
                  padding: "2px 0",
                  wordBreak: "break-word",
                  whiteSpace: "pre-wrap",
                }}
                onInput={(e) => {
                  const t = e.currentTarget;
                  t.style.height = "auto";
                  t.style.height = t.scrollHeight + "px";
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
