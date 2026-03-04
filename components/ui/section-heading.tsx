interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 dark:text-gray-200">
        {title}
      </h2>
      {subtitle && <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-600 dark:from-gray-400 dark:to-gray-500 mx-auto mt-4 rounded-full"></div>
    </div>
  )
}
