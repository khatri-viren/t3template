import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import TopNav from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "sonner";
import { PHProvider } from "./_analytics/provider";
import PostHogPageView from "./_analytics/PostHogPageView";

export const metadata = {
  title: "T3 Gallery",
  description: "A gallery of images",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} dark`}>
        <PHProvider>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <body>
            <PostHogPageView />
            <div className="grid h-screen grid-rows-[auto,1fr] ">
              <TopNav />
              <main className="overflow-y-scroll">{children}</main>
            </div>
            {modal}
            <div id="modal-root" />
            <Toaster />
          </body>
        </PHProvider>
      </html>
    </ClerkProvider>
  );
}
