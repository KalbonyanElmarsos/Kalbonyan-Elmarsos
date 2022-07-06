import Link from "next/link";

// localhost:3000/news

export default function news() {
  return (
    <>
      <div>news Page</div>;
      <Link href="/news/news-details"> Go to news Details</Link>
    </>
  );
}
