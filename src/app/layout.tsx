import type { Metadata } from "next";
import "../index.css";
import { AppProviders } from "./providers";

export const metadata: Metadata = {
  title: "Dream Beyond",
  description: "Dream Beyond website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
