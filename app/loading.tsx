export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-t-4 border-white rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-lg">Loading Portfolio...</p>
      </div>
    </div>
  )
}
