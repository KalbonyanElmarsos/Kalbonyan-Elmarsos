import { useRouter } from "next/router";

// --Dynamic route
//  localhost:3000/news/anything

export default function Details() {
  const router = useRouter();

  const newsParams = router.query.newsId;

  return <div>details page {newsParams}</div>;
}
