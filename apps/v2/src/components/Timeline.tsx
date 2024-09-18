import Link from 'next/link';

interface TimelineItem {
  title: string;
  description: string;
  link: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps): JSX.Element {
  return (
    <ul className="relative border-l border-gray-200 dark:border-gray-700">
      {items.map((item, index) => (
        <li key={index} className="mb-4 ml-2">
          <span className="absolute flex items-center justify-center w-2 h-2 bg-blue-100 rounded-full -left-1 ring-1 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <span className="w-1 h-1 bg-blue-800 rounded-full dark:bg-blue-300"></span>
          </span>
          <Link href={item.link} className="group block pl-1">
            <h3 className="mb-0.5 text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}