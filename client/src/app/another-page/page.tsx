import Link from "next/link";

export const metadata = {
	title: "Another Page Title",
};

const AnotherPage = () => {
	return <Link href={"/"}>Home Page</Link>;
};

export default AnotherPage;
