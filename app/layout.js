import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./Components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tasks Pro || Home",
  description: "Tasks Pro is a task management app that helps users create tasks, track their progress weekly or monthly, and stay organized.",
};

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <section className="flex pt-3 pb-3 py-3">
          <Sidebar />
          <section className="w-full p-2">
          {children}
          </section>
        </section>
      </body>
    </html>
  );
}
