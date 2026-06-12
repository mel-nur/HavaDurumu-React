export default function DateTimeDisplay({ currentDate }) {
  return (
    <div className="d-flex justify-content-between">
      <span className="tetx-white mb-3">{currentDate.toLocaleTimeString("tr-TR")}</span>
      <span className="text-white mb-4">{currentDate.toLocaleDateString("tr-TR", {weekday: "long", day: "numeric", month: "long"})}</span>
    </div>
  )
}