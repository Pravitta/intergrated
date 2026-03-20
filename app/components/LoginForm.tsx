"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Loader2, AlertCircle } from "lucide-react";

const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().default(false),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => router.push("/dashboard"), 800);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex flex-col gap-9 relative z-10">
        {/* Username Field */}
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between items-center px-1">
            <Label
              htmlFor="username"
              className="uppercase tracking-[0.25em] font-black text-[#a0724a]"
              style={{ fontSize: "11px" }}
            >
              Username
            </Label>
            {errors.username && (
              <span className="text-[10px] font-bold text-destructive animate-in slide-in-from-right-2 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.username.message}
              </span>
            )}
          </div>
          <Input
            id="username"
            {...register("username")}
            placeholder="Enter your username"
            disabled={isLoading}
            className={`h-[60px] bg-[#f0e0cd]/40 border-2 rounded-2xl px-5 font-bold text-[#5c3b1a] transition-all duration-300 placeholder:text-[#a0724a]/40 ${
              errors.username 
                ? "border-destructive focus-visible:ring-destructive/20" 
                : "border-[#e4c9b0] focus-visible:border-primary focus-visible:ring-primary/10 shadow-sm"
            }`}
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between items-center px-1">
            <Label
              htmlFor="password"
              className="uppercase tracking-[0.25em] font-black text-[#a0724a]"
              style={{ fontSize: "11px" }}
            >
              Password
            </Label>
            {errors.password && (
              <span className="text-[10px] font-bold text-destructive animate-in slide-in-from-right-2 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.password.message}
              </span>
            )}
          </div>
          <Input
            id="password"
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            disabled={isLoading}
            className={`h-[60px] bg-[#f0e0cd]/40 border-2 rounded-2xl px-5 font-bold text-[#5c3b1a] transition-all duration-300 placeholder:text-[#a0724a]/40 ${
              errors.password 
                ? "border-destructive focus-visible:ring-destructive/20" 
                : "border-[#e4c9b0] focus-visible:border-primary focus-visible:ring-primary/10 shadow-sm"
            }`}
          />
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3 group cursor-pointer">
            <Checkbox 
              id="remember" 
              {...register("remember")} 
              className="w-6 h-6 border-2 border-[#e4c9b0] data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-all duration-300" 
            />
            <Label
              htmlFor="remember"
              className="cursor-pointer font-bold text-[#a0724a] text-[13px] group-hover:text-primary transition-colors select-none"
            >
              Remember me
            </Label>
          </div>
          <a
            href="#"
            className="text-[13px] font-black text-primary underline underline-offset-4 hover:opacity-70 transition-all"
          >
            Forgot password?
          </a>
        </div>

        {/* Action Button */}
        <div className="flex justify-center pt-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="group relative overflow-hidden px-16 h-[68px] rounded-full font-black text-[17px] tracking-[0.2em] uppercase shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0.5 transition-all duration-300 bg-primary hover:bg-primary/90"
          >
            <span className={`flex items-center gap-3 ${isLoading ? "opacity-0" : "opacity-100"}`}>
              Log In
              <span className="text-xl group-hover:translate-x-1 transition-transform">✨</span>
            </span>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-7 h-7 animate-spin text-white" />
              </div>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
