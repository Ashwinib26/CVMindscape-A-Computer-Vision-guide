import Link from "next/link";

export default function PracticalPage() {
  const practicals = [
    {
      title: "Image Transformations",
      emoji: "🌀",
      filename: "Image Transformations.ipynb"
    },
    {
      title: "Image Filtering",
      emoji: "🧹",
      filename: "Image Filtering.ipynb"
    },
    {
      title: "Morphological Operations",
      emoji: "🌿",
      filename: "Morphological Operations.ipynb"
    },
    {
      title: "Image Intensity & Geometric Transformations",
      emoji: "🎚️",
      filename: "Image Intensity & Geometric Transformations.ipynb"
    },
    {
      title: "Corner Detection (Harris)",
      emoji: "📐",
      filename: "Harris Corner Detection.ipynb"
    },
    {
      title: "Optical Flow (Lucas-Kanade)",
      emoji: "🎥",
      filename: "Optical Flow using Lucas-Kanade.ipynb"
    },
    {
      title: "Face Detection (Viola-Jones)",
      emoji: "😊",
      filename: "Face Detection using Viola Jones.ipynb"
    },
    {
      title: "Image Segmentation (Thresholding & Masking)",
      emoji: "🧩",
      filename: "Image Segmentation.ipynb"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-700 dark:text-blue-100 text-center">
        🧪 Computer Vision Practicals
      </h1>

      <ul className="space-y-6">
        {practicals.map((item, index) => (
          <li
            key={index}
            className="p-6 border border-gray-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition flex justify-between items-center"
          >
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-1 text-blue-300">
                {item.emoji} {item.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                View and explore the code implementation in the notebook.
              </p>
            </div>

            <Link
              href={`/notebooks/${item.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-900 hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-5 py-2 rounded-full transition">
                Open Notebook
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
