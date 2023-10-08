import { TalentItem } from '../../types/talents';
import './TalentRune.scss';

interface TalentIconProps {
  talent: TalentItem;
  handleAddTalent: (talentId: string) => void;
  handleRemoveTalent: (talentId: string) => void;
}

function TalentRune({
  talent,
  handleAddTalent,
  handleRemoveTalent,
}: TalentIconProps) {
  const onHandleClick = () => {
    handleAddTalent(talent.id);
  };
  const onHandleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleRemoveTalent(talent.id);
  };

  return (
    <div
      className={`talent-rune talent-rune__${talent.id} ${
        talent.isActive ? 'active' : ''
      }`}
      onClick={onHandleClick}
      onContextMenu={onHandleRightClick}
    ></div>
  );
}

export default TalentRune;
