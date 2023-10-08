import { TalentItem } from '../../types/talents';
import TalentRune from '../talent-rune';
import './TalentTree.scss';

interface TalentTreeProps {
  talentPath: TalentItem[];
  title: string;
}

function TalentTree({ talentPath, title }: TalentTreeProps) {
  const talents = talentPath.map((talent) => {
    return <TalentRune key={talent.id} talent={talent} />;
  });

  return (
    <section className='talent-path'>
      <h2 className='talent-path__title'>{title}</h2>
      <div className='talent-path__talents'>{talents}</div>
    </section>
  );
}

export default TalentTree;
