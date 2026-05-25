export function Marquee() {
  const items = [
    "Photography",
    "Graphic Design",
    "Video Editing",
    "3D Design",
    "Direction",
    "Color",
    "Typography",
  ];
  const row = [...items, ...items, ...items];

  return (
    <div className="border-y border-border py-8 overflow-hidden">
      <div className="flex gap-16 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-16 font-display italic text-4xl md:text-6xl tracking-tight">
            <span>{item}</span>
            <span className="text-gold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
