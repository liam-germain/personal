import { FC } from 'react';
import { ScrollArea } from '@repo/ui/components/ui/scroll-area';
import { experiences, type ExperienceItem } from '../data/experience';

const Timeline: FC = () => {
  const sortedExperiences = [...experiences].sort((a, b) => 
    (new Date(b.startDate)).getTime() - (new Date(a.startDate)).getTime()
  );

  return (
    <ScrollArea className="w-full h-[calc(100vh-4rem)]">
      <div className="relative w-full p-4 space-y-8">
        <div className="space-y-8 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
          {sortedExperiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

interface ExperienceItemProps {
  experience: ExperienceItem;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
  const isOngoing = !experience.endDate;

  return (
    <div className={`relative pb-4 ${isOngoing ? 'text-primary' : ''}`}>
      <div className="absolute -left-6 mt-1 w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full border-4 border-white dark:border-gray-900" />
      <h3 className="font-bold text-lg">{experience.company}</h3>
      <p className="text-sm text-muted-foreground">
        {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} -{' '}
        {experience.endDate 
          ? new Date(experience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) 
          : 'Present'}
      </p>
      <p className="mt-2 text-sm">{experience.description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {experience.technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Timeline;