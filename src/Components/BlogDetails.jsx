import { useParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Hello world!",
    author: "James",
    date: "Apr 20, 2020",
    category: "Uncategorized",
    content:
      "Welcome to Demo Websites. This is your first post. Edit or delete it, then start writing!",
    comments: [
      {
        name: "A WordPress Commenter",
        date: "April 20, 2020 at 8:29 pm",
        content:
          "Hi, this is a comment. To get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.",
      },
    ],
  },
   {
    id: 2,
    title: "Another Post with Everything In It",
    author: "James",
    date: "Apr 20, 2019",
    category: "Uncategorized",
    content:
      "Welcome to Demo Websites. This is your first post. Edit or delete it, then start writing!",
    comments: [
      {
        name: "A WordPress Commenter",
        date: "April 20, 2020 at 8:29 pm",
        content:
          "Hi, this is a comment. To get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.",
      },
    ],
  },
   {
    id: 3,
    title: "A Simple Text Post",
    author: "James",
    date: "Apr 20, 2020",
    category: "Uncategorized",
    content:
      "Welcome to Demo Websites. This is your first post. Edit or delete it, then start writing!",
    comments: [
      {
        name: "A WordPress Commenter",
        date: "April 20, 2020 at 8:29 pm",
        content:
          "Hi, this is a comment. To get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.",
      },
    ],
  },


];

const BlogDetails = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-600">
        by {post.author} | {post.date} | {post.category} | {post.comments.length} comment
      </p>
      <p className="mt-4">{post.content}</p>

      <div className="mt-8">
        <h3 className="font-bold text-lg">Comments</h3>
        {post.comments.map((comment, index) => (
          <div key={index} className="mt-2 p-2 border rounded">
            <p className="font-semibold">{comment.name}</p>
            <p className="text-sm text-gray-500">{comment.date}</p>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-bold">Submit a Comment</h3>
        <form className="flex flex-col gap-4 mt-2">
          <textarea placeholder="Comment *" className="border p-2 rounded" required />
          <input type="text" placeholder="Name *" className="border p-2 rounded" required />
          <input type="email" placeholder="Email *" className="border p-2 rounded" required />
          <input type="text" placeholder="Website" className="border p-2 rounded" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetails;
