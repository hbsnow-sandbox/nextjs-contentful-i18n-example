import { Link } from "@/components/ui/link";
import { getBlog } from "@/features/blog-page/api/get-blog";
import type { BlogContentModel } from "@/features/blog-page/types";

export async function BlogList() {
  const blogs = await getBlog<BlogContentModel>({
    limit: "10",
  });

  return (
    <ul>
      {blogs.items.map((blog) => (
        <li key={blog.sys.id}>
          <Link
            href={{
              pathname: "/blog/[id]",
              query: {
                id: blog.sys.id,
              },
            }}
          >
            {blog.fields.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
