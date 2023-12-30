"use client";
import Link from "next/link";
import { navItems } from "@constants";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { navVariants } from "@motion";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});
	return (
		<>
			<motion.nav
				className="sticky top-0 w-full px-[100rem] text-black bg-white flex items-center justify-between h-[10vh] drop-shadow-lg"
				variants={navVariants}
				animate={hidden ? "hidden" : "vissible"}>
				<div>
					<h1 className="text-[30rem] font-bold tracking-wider">🌏 PLANET</h1>
				</div>
				<div className="flex items-center gap-x-[10rem]">
					{navItems.map((item) => (
						<Link
							className="text-[22rem] font-medium tracking-wider cursor-pointer"
							key={item.id}
							href={item.href}>
							{item.title}
						</Link>
					))}
				</div>
			</motion.nav>
		</>
	);
}
