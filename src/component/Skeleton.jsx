const SkeletonCard = () => (
  <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100 animate-pulse">
    <div className="w-full h-56 bg-gray-200 rounded-[1.5rem] mb-4"></div>
    <div className="px-2">
      <div className="h-6 bg-gray-200 rounded-full w-2/3 mb-3"></div>
      <div className="h-4 bg-gray-200 rounded-full w-1/2 mb-8"></div>
      <div className="flex justify-between items-center">
        <div className="h-8 bg-gray-200 rounded-lg w-20"></div>
        <div className="h-10 bg-gray-200 rounded-2xl w-24"></div>
      </div>
    </div>
  </div>
);

export default SkeletonCard;