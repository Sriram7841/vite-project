import { useEffect, useState } from "react";

export default function LikeButton() {
  const KEY = "sriram-portfolio-likes";

  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetch(`https://api.countapi.xyz/get/${KEY}/count`)
      .then(res => res.json())
      .then(data => setLikes(data.value || 0));
  }, []);

  const handleLike = () => {
    fetch(`https://api.countapi.xyz/hit/${KEY}/count`)
      .then(res => res.json())
      .then(data => setLikes(data.value));
  };

  return (
    <button className="like-btn" onClick={handleLike}>
      ❤️ Like {likes}
    </button>
  );
}
