export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-pulse">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="bg-gray-100 rounded-2xl p-6 shadow-md h-40">
          <div className="h-5 w-3/4 bg-gray-300 rounded mb-3"></div>
          <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
}
