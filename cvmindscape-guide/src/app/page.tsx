import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/cv-icon.svg" // Replace with your actual logo or image path
          alt="CVMindscape logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Welcome to <span className="text-blue-600">CVMindscape</span>
        </h1>
        <p className="max-w-xl text-sm sm:text-base text-center sm:text-left text-gray-600 dark:text-gray-300">
          Your one-stop destination to master Computer Vision through intuitive guides, visual explanations, and hands-on projects.
        </p>

        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-mono mt-4">
          <li className="mb-2">Learn theory behind CV algorithms and techniques</li>
          <li className="mb-2">Practice with real-world datasets</li>
          <li className="mb-2">Explore model demos and implementation tips</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-6">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-5"
            href="/theory"
          >
            Explore Theory
          </a>
          <a
            className="rounded-full border border-blue-600 dark:border-white transition-colors flex items-center justify-center hover:bg-blue-50 dark:hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-5 text-blue-600 dark:text-white"
            href="/practical"
          >
            Hands-on Labs
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://www.kaggle.com/learn/computer-vision"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="Learn icon" width={16} height={16} />
          Learn CV
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://github.com/topics/computer-vision"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Examples icon" width={16} height={16} />
          Explore Projects
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://opencv.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          OpenCV.org
        </a>
      </footer>
    </div>
  );
}
