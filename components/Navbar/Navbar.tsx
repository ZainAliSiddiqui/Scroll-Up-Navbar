import { navItems } from "@constants";
import Link from "next/link";
import Header from "./Header";

export default function Navbar() {
	return (
		<>
			<Header>
				<div className="w-full px-[100rem] text-black bg-white flex items-center justify-between h-[10vh]">
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
				</div>
			</Header>
		</>
	);
}
