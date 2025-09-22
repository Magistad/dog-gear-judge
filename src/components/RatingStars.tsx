"use client";
export default function RatingStars({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  const Star = ({ type }: { type: "full" | "half" | "empty" }) => (
    <span aria-hidden className="inline-block">
      {type === "full" ? "★" : type === "half" ? "☆" : "☆"}
    </span>
  );

  return (
    <span className="text-yellow-500" aria-label={`${value.toFixed(1)} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => <Star key={`f${i}`} type="full" />)}
      {half && <Star type="half" />}
      {Array.from({ length: empty }).map((_, i) => <Star key={`e${i}`} type="empty" />)}
    </span>
  );
}
