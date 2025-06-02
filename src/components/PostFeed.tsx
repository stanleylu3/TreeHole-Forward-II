// PostFeed.tsx

import React from "react";
import PostCard from "./PostCard";

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
  return (
    <section className="post-feed">
      {dummyPosts.map((post, idx) => (
        <PostCard
          key={idx}
          username={post.username}
          time={post.time}
          category={post.category}
          content={post.content}
          feeling={post.feeling}
          comments={post.comments}
          reactions={post.reactions}
        />
      ))}
    </section>
  );
};

export default PostFeed;
