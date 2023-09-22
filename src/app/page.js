"use client";
import Image from "next/image";
import SignIn from "./signin/page";
import Dashboard from "./dashboard/page";
import { SessionProvider } from "next-auth/react";
import { useSession } from 'next-auth/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home({ Component, pageProps }) {
    const session = useSession();
    return (
        <SignIn />
    )
}

