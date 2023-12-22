"use client";
import { useState, useEffect } from "react";

export default function Header({ children }: { children: React.ReactNode }) {
	const [lastScroll, setLastScroll] = useState(0);
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;

			if (currentScroll <= 0) {
				setScrollDirection("up");
				return;
			}

			if (currentScroll > lastScroll && scrollDirection !== "down") {
				setScrollDirection("down");
			} else if (currentScroll < lastScroll && scrollDirection !== "up") {
				setScrollDirection("up");
			}
			setLastScroll(currentScroll);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScroll, scrollDirection]);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrollDirection === "down" ? "-translate-y-full" : "drop-shadow-2xl"
			}`}>
			{children}
		</header>
	);
}
