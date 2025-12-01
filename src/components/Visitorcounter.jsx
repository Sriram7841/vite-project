import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/sriram-portfolio-visits/visits")
      .then(res => res.json())
      .then(data => setCount(data.value));
  }, []);

  return (
    <p style={{ color: "#c084fc", marginTop: "10px", fontSize: "16px" }}>
      🔥 Total Visitors: <b>{count}</b>
    </p>
  );
}
