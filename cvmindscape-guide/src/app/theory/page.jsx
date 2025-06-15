export default function TheoryPage() {
  const topics = [
    {
      title: "Image Transformations",
      emoji: "🌀",
      description:
        "Image transformations are operations that modify the position or orientation of pixels in an image. Think of it like rotating, zooming, or shifting a photo. Common transformations include translation (moving), rotation (turning), scaling (resizing), and shearing (slanting). These are crucial when aligning images, correcting perspective, or performing data augmentation during training."
    },
    {
      title: "Image Filtering",
      emoji: "🧹",
      description:
        "Filtering is used to enhance or extract specific features in an image, such as edges or textures. Filters like Gaussian blur smooth an image, while Sobel or Laplacian filters highlight edges. Imagine using a blur tool in Photoshop — that’s a filter! Filters are key to preprocessing, noise reduction, and feature detection in many CV tasks."
    },
    {
      title: "Morphological Operations",
      emoji: "🌿",
      description:
        "Morphological operations process the structure of an image — often binary — to remove noise, separate objects, or close gaps. Dilation adds pixels to object boundaries, erosion removes them. Combining them (opening/closing) helps refine shapes. These are like sculpting tools for cleaning up image masks in tasks like segmentation or object isolation."
    },
    {
      title: "Image Intensity & Geometric Transformations",
      emoji: "🎚️",
      description:
        "Image intensity transformations deal with brightness and contrast (e.g., histogram equalization), making features more visible. Geometric transformations reshape images — like rotating, flipping, resizing — while preserving pixel relationships. These are foundational in image normalization and augmentation workflows in ML pipelines."
    },
    {
      title: "Corner Detection (Harris Corner Detector)",
      emoji: "📐",
      description:
        "Corners are points in an image where edges meet — highly informative and invariant to rotation or translation. The Harris detector finds these interest points by analyzing gradient changes in intensity. It's widely used in object tracking, image matching, and feature extraction. Think of them like pins in a photo that don’t shift much between frames."
    },
    {
      title: "Optical Flow (Lucas-Kanade Method)",
      emoji: "🎥",
      description:
        "Optical flow estimates motion by tracking pixel movement between video frames. The Lucas-Kanade method assumes nearby pixels move similarly and calculates motion vectors. This is useful in real-time video analysis like gesture recognition, traffic flow monitoring, or drone navigation. It’s like drawing arrows on moving objects in a video to track them."
    },
    {
      title: "Face Detection (Viola-Jones Algorithm)",
      emoji: "😊",
      description:
        "This classical algorithm detects human faces using Haar-like features and a cascading classifier. It's fast and was one of the first real-time face detectors. Imagine it like a filter that scans parts of an image to detect patterns resembling eyes, nose, and mouth. Though modern systems use deep learning, Viola-Jones is still important historically."
    },
    {
      title: "Image Segmentation (Thresholding & Masking)",
      emoji: "🧩",
      description:
        "Segmentation divides an image into meaningful parts (like separating background from foreground). Simple methods include thresholding (turning pixels white/black based on intensity) and masking (highlighting regions of interest). This helps in medical imaging, object detection, and scene understanding — like highlighting tumors in scans or separating a road from its surroundings."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-700 dark:text-blue-100 text-center">
        📘 Computer Vision Theory Guide
      </h1>

      <ul className="space-y-6">
        {topics.map((topic, index) => (
          <li
            key={index}
            className="p-6 border border-gray-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-300">
              {topic.emoji} {topic.title}
            </h2>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {topic.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
