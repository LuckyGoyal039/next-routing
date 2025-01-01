import { notFound } from "next/navigation";

async function fetchBlogDetails(id: string) {
  const mockBlogs = [
    { id: "1", title: "First Blog", content: "This is the first blog post." },
    { id: "2", title: "Second Blog", content: "This is the second blog post." },
  ];
  return mockBlogs.find((blog) => blog.id === id) || null;
}

interface BlogDetailsProps {
  params: { id: string };
}

export default async function BlogDetails({ params }: BlogDetailsProps) {
  const { id } = params;
  const blog = await fetchBlogDetails(id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <p className="text-lg">{blog.content}</p>
    </div>
  );
}
