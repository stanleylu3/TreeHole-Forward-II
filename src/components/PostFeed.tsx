// PostFeed.tsx

import React, {useState} from "react";
import PostCard from "./PostCard";
import type { PostCardProps } from "./PostCard";

const dummyPosts = [
  {
    username: "SleepyAnteater",
    time: "2025-04-28 20:21",
    category: "#Rant",
    content:
      "I just pulled 3 all-nighters in a row... midterm fried me. Send help.",
    feeling: "😴 exhausted",
    comments: 28,
    reactions: {
      "❤️": 328,
      "😊": 92,
    } as { [emoji: string]: number },
  },
  {
    username: "CoffeeLover123",
    time: "2025-04-28 08:42",
    category: "#Confession",
    content:
      "Sometimes I sit in Langson just to cry a little and nobody notices. That’s kinda nice.",
    feeling: "🥺 overwhelmed",
    comments: 11,
    reactions: {
      "💙": 94,
      "😢": 41,
    } as { [emoji: string]: number },
  },
  {
    username: "Ano",
    time: "2025-04-27 15:30",
    category: "#Advice",
    content:
      "If you're struggling with imposter syndrome, remember that everyone feels like a fraud sometimes. You’re not alone.",
    feeling: "💪 determined",
    comments: 5,
    reactions: {
      "👍": 150,
      "💡": 75,
    } as { [emoji: string]: number },
  },
];

const PostFeed: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<PostCardProps | null>(null);
  return (
    <section className="post-feed">
      {dummyPosts.map((post, idx) => (
        <div key={idx} onClick={()=> setSelectedPost(post)} className='cursor-pointer'>
          <PostCard
            username={post.username}
            time={post.time}
            category={post.category}
            content={post.content}
            feeling={post.feeling}
            comments={post.comments}
            reactions={post.reactions}
          />
        </div>
      ))}
      {selectedPost && (
      <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white text-black p-6 rounded-lg max-w-lg w-[90%] shadow-lg relative">
          <button
            onClick={() => setSelectedPost(null)}
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
          >
            ✖
          </button>
          <h2 className="text-xl font-bold mb-2">{selectedPost.username}'s Post</h2>
          <p className="text-sm text-gray-500 mb-4">
            {selectedPost.time} · {selectedPost.category}
          </p>
          <p className="mb-2">{selectedPost.content}</p>
          <p className="font-semibold mb-4">{selectedPost.feeling}</p>
          <div className="mb-2">
            <strong>Reactions:</strong>{" "}
            {Object.entries(selectedPost.reactions).map(([emoji, count]) => (
              <span key={emoji} className="mr-2">
                {emoji} {count}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-600">{selectedPost.comments} comments</div>
        </div>
      </div>
    )}
    </section>
  );
};

export default PostFeed;
