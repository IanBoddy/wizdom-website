import Script from "next/script";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ThemeProviderWrapper from "@/components/ThemeProvider";
import type { Metadata } from "next";
import WizdomChat from "@/components/WizdomChat";

export const metadata: Metadata = {
  title: {
    default: "Wizdom Enterprizes",
    template: "%s | Wizdom Enterprizes",
  },
  description: "Digital systems, templates and operating frameworks for clarity and execution.",
  metadataBase: new URL("https://wizdomenterprizes.com"),
  openGraph: {
    title: "Wizdom Enterprizes",
    description: "Digital systems, templates and operating frameworks for clarity and execution.",
    url: "https://wizdomenterprizes.com",
    siteName: "Wizdom Enterprizes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviderWrapper>
          {/* MailerLite Universal */}
          <Script id="mailerlite-universal" strategy="afterInteractive">
            {`
(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
.push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
ml('account', '2005602');
          `}
          </Script>
          {/* End MailerLite Universal */}

          <SiteHeader />
          {children}
          <SiteFooter />
          <WizdomChat />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
