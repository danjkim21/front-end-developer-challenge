import { TalentItem } from '../../types/talents';
import TalentRune from '../talent-rune';
import './TalentTree.scss';

interface TalentTreeProps {
  talentPath: TalentItem[];
  title: string;
  handleAddTalent: (talentId: string) => void;
  handleRemoveTalent: (talentId: string) => void;
}

function TalentTree({
  talentPath,
  title,
  handleAddTalent,
  handleRemoveTalent,
}: TalentTreeProps) {
  const talents = talentPath.map((talent) => {
    return (
      <TalentRune
        key={talent.id}
        talent={talent}
        handleAddTalent={handleAddTalent}
        handleRemoveTalent={handleRemoveTalent}
      />
    );
  });

  return (
    <section className='talent-path'>
      <h2 className='talent-path__title'>{title}</h2>
      <div className='talent-path__talents'>{talents}</div>
    </section>
  );
}

export default TalentTree;
