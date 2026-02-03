export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#495E57] to-[#3d4f49] z-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 border-4 border-[#F4CE14] rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 border-4 border-[#F4CE14] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="space-y-2">
          <h2 className="font-markazi text-5xl text-[#F4CE14]">Little Lemon</h2>
          <p className="font-karla text-white text-sm tracking-wider">
            Loading deliciousness...
          </p>
        </div>
      </div>
    </div>
  );
}
