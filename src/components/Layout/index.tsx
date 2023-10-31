import React, { PropsWithChildren } from "react";
import Nav from "@/components/Nav"
export default function Layout({children}:PropsWithChildren) {
  return (
        <main className="dark text-foreground bg-background">
        <Nav/>
        {children}
        </main>
  )
}