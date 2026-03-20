"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";

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
  { id: 7, text: "Water plants 🌿", done: false },
];

export default function DashboardContent() {
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
    <div className="flex flex-1 min-h-0 min-w-0 p-4 lg:p-6 lg:pt-0 gap-4 xl:gap-8 overflow-hidden">
      {/* 7 Day Columns - Fluid & Compressing */}
      <div className="flex flex-1 min-h-0 gap-2 xl:gap-4 min-w-0">
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

      {/* To Do Sidebar Column - RELIABLE INTERACTION */}
      <div className="w-[260px] xl:w-[330px] flex flex-col gap-5 shrink-0 relative">
        <div className="relative">
          <div
            className="text-center text-white font-black rounded-full shadow-lg relative z-10"
            style={{ background: "#e07b21", fontFamily: "'Dancing Script', cursive", fontSize: "28px", padding: "10px" }}
          >
            Checklist ✏️
          </div>
          <span className="absolute -top-6 -right-3 text-6xl opacity-30 select-none pointer-events-none transform rotate-12">🌸</span>
        </div>

        <Card className="flex-1 flex flex-col min-h-0 bg-white/75 backdrop-blur-md border-2 border-primary/20 shadow-xl rounded-[2.5rem] overflow-hidden">
          <CardContent className="p-6 xl:p-8 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
            {todos.map((todo) => {
              const todoId = `todo-${todo.id}`;
              return (
                <div key={todo.id} className="flex items-start gap-4 group">
                  <Checkbox
                    id={todoId}
                    checked={todo.done}
                    onCheckedChange={() => toggleTodo(todo.id)}
                    className="mt-0.5 w-7 h-7 xl:w-8 xl:h-8 border-[3.5px] border-primary rounded-xl data-[state=checked]:bg-primary transition-all scale-100 group-hover:scale-110 shadow-sm relative z-10"
                  />
                  <Label
                    htmlFor={todoId}
                    className={`text-[16px] xl:text-[18px] font-black leading-snug transition-all duration-300 cursor-pointer select-none flex-1 py-0.5 ${
                      todo.done ? "text-muted-foreground/40 line-through" : "text-[#5c3b1a] hover:text-primary"
                    }`}
                  >
                    {todo.text}
                  </Label>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Add Task Form */}
        <div className="bg-white/40 p-2 rounded-2xl border-2 border-dashed border-[#e4c9b0]">
          <form onSubmit={addTodo} className="flex flex-col gap-2">
            <Input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Grow a task..."
              className="h-11 bg-white/95 border-2 border-border focus:border-primary rounded-xl font-black text-sm px-4 placeholder:text-muted-foreground/50 shadow-inner"
            />
            <Button
              type="submit"
              disabled={!newTodo.trim()}
              className="w-full h-11 rounded-full font-black text-sm shadow-md hover:shadow-xl transition-all duration-300 bg-primary"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Grow Task
            </Button>
          </form>
        </div>

        {/* Sidebar Interior Decoration */}
        <div className="flex justify-around items-end gap-3 shrink-0 select-none pt-2 opacity-70">
          <span className="text-4xl animate-bounce delay-75">🌻</span>
          <span className="text-7xl -mb-1 transform hover:scale-110 transition-transform drop-shadow-md">🪴</span>
          <span className="text-3xl animate-bounce delay-150">🌷</span>
        </div>
      </div>
    </div>
  );
}

function DayCard({ day, lines, onTextChange, onToggle }: {
  day: string;
  lines: DayLine[];
  onTextChange: (i: number, v: string) => void;
  onToggle: (i: number) => void;
}) {
  return (
    <div className="flex flex-1 flex-col min-h-0 min-w-0">
      <div
        className="shrink-0 text-center text-white font-black rounded-full shadow-lg mb-4 py-2 px-3 transition-all hover:scale-105 cursor-default whitespace-nowrap overflow-hidden"
        style={{ background: "#e07b21", fontFamily: "'Dancing Script', cursive", fontSize: "19px" }}
      >
        {day.slice(0, 3)}
      </div>
      <Card className="flex-1 flex flex-col overflow-hidden border-2 border-primary/5 bg-[#fff9f2]/95 backdrop-blur-[4px] shadow-md rounded-[1.8rem] transition-all hover:shadow-xl hover:border-primary/10">
        {/* AGGRESSIVE TOP PADDING TO PREVENT CLIPPING */}
        <CardContent className="p-0 pt-8 xl:pt-10 flex flex-col flex-1">
          {lines.map((line, i) => {
            const dayLineId = `day-${day}-${i}`;
            return (
              <div
                key={i}
                className={`flex items-start gap-2.5 p-4 xl:p-5 flex-1 min-h-0 group/line items-center ${
                  i < lines.length - 1 ? "border-b-[1.5px] border-[#f0d5b8]/40" : ""
                }`}
              >
                {/* HIGH-VISIBILITY SOLID BORDER CHECKBOX */}
                <Checkbox
                  id={dayLineId}
                  checked={line.done}
                  onCheckedChange={() => onToggle(i)}
                  className="w-6 h-6 xl:w-7 xl:h-7 border-[3.5px] border-primary rounded-lg data-[state=checked]:bg-primary transition-all scale-100 group-hover/line:scale-110 shrink-0 shadow-sm relative z-10"
                />
                <textarea
                  id={`${dayLineId}-text`}
                  value={line.text}
                  onChange={(e) => onTextChange(i, e.target.value)}
                  rows={1}
                  className={`w-full bg-transparent outline-none resize-none overflow-hidden text-[13px] xl:text-[14px] font-black leading-tight py-1 transition-all duration-300 placeholder:opacity-30 ${
                    line.done ? "text-primary/30 line-through decoration-primary/20 decoration-2 font-bold" : "text-[#5c3b1a]"
                  }`}
                  placeholder="..."
                  onInput={(e) => {
                    const t = e.currentTarget;
                    t.style.height = "auto";
                    t.style.height = t.scrollHeight + "px";
                  }}
                />
              </div>
            );
          })}
        </CardContent>
      </Card>
      
      {/* Interior Decoration for bottom of columns */}
      {day === "Sunday" && (
        <span className="hidden xl:block absolute -bottom-10 left-2 text-5xl opacity-30 pointer-events-none grayscale drop-shadow-sm">🌵</span>
      )}
    </div>
  );
}
