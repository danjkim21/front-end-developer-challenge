import { TalentItem } from '../../types/talents';
import TalentIcon from '../talent-icon';
import './TalentTree.scss';

interface TalentTreeProps {
  talentPath: TalentItem[];
  title: string;
}

function TalentTree({ talentPath, title }: TalentTreeProps) {
  console.log(talentPath);

  const talents = talentPath.map((talent) => {
    return <TalentIcon />;
  });

  return (
    <div>
      <h3>{title}</h3>

      <div>{talents}</div>
    </div>
  );
}

export default TalentTree;
