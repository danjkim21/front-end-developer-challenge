import { TalentItem } from '../../types/talents';
import './TalentRune.scss';

interface TalentIconProps {
  talent: TalentItem;
}

function TalentRune({ talent }: TalentIconProps) {
  return (
    <div
      className={`talent-rune talent-rune__${talent.id} ${
        talent.isActive ? 'active' : ''
      }`}
    ></div>
  );
}

export default TalentRune;
