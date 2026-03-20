import { QuoteGenerator } from "@/components/quote-generator";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
      <QuoteGenerator />
    </main>
  );
}