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
    <div>
      <h3>{title}</h3>

      <div>{talents}</div>
    </div>
  );
}

export default TalentTree;
