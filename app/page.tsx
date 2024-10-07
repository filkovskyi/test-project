"use client";

import { CardList } from "@/app/components/ui/card-list";
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleDeleteCard = (id: string) => {
    setPosts(posts.filter(posts => posts.id.toString() !== id));
  };

  const cards = posts.map((post) => ({
    id: post.id.toString(),
    status: `User ${post.userId}`,
    name: `Post ${post.id}`,
    subject: post.title,
    time: new Date(Date.now() + post.id * 60000).toLocaleTimeString(),
    longSubject: post.body,
  }));

  return <CardList cards={cards}  onDeleteCard={handleDeleteCard} />;
}
