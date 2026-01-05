export function InfoCard({ title, text }) {
  return (
    <div className="bg-zinc-600 p-8 rounded-xl text-white">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}
