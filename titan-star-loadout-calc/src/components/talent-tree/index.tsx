import { Fragment } from 'react';
import { TalentItem } from '../../types/talents';
import TalentRune from '../talent-rune';
import './TalentTree.scss';
import { findTalentByIdByPath } from '../../utils/findTalentByIdByPath';

interface TalentTreeProps {
  talentPath: TalentItem[];
  title: string;
  pointsSpent: number;
  incrementPointsSpent: () => void;
  decrementPointsSpent: () => void;
}

function TalentTree({
  talentPath,
  title,
  pointsSpent,
  incrementPointsSpent,
  decrementPointsSpent,
}: TalentTreeProps) {
  // ** Function: Match's talentId to talent path data item, increments pointsSpent & set's isActive to true
  // Parameter: talentId
  // Return: void
  const onAddTalent = (talentId: string) => {
    const { talent, prevTalent } = findTalentByIdByPath(talentId, talentPath);
    // Exit conditions: If pointsSpent is 6 or talent is already active, or if the previous talent is not active
    if (
      pointsSpent >= 6 ||
      talent.isActive ||
      (prevTalent && !prevTalent.isActive)
    ) {
      return;
    }

    incrementPointsSpent();
    talent.isActive = true;
  };

  // ** Function: Match's talentId to talent path data item, decrements pointsSpent & set's isActive to false
  // Parameter: talentId
  // Return: void
  const onRemoveTalent = (talentId: string) => {
    const { talent, nextTalent } = findTalentByIdByPath(talentId, talentPath);
    // Exit conditions: If pointsSpent is 0 or talent is not active, or if the next talent is active
    if (
      pointsSpent <= 0 ||
      !talent.isActive ||
      (nextTalent && nextTalent.isActive)
    ) {
      return;
    }

    decrementPointsSpent();
    talent.isActive = false;
  };

  const talents = talentPath.map((talentItem, index) => {
    if (index === talentPath.length - 1) {
      // Render rune only if it is the last item in the path
      return (
        <TalentRune
          key={talentItem.id}
          talent={talentItem}
          handleAddTalent={onAddTalent}
          handleRemoveTalent={onRemoveTalent}
        />
      );
    } else {
      // Render Rune and Path line
      const { talent, nextTalent } = findTalentByIdByPath(
        talentItem.id,
        talentPath
      );

      return (
        <Fragment key={talentItem.id}>
          <TalentRune
            talent={talentItem}
            handleAddTalent={onAddTalent}
            handleRemoveTalent={onRemoveTalent}
          />
          <div
            className={`talent-progress__line ${
              talent.isActive && nextTalent && nextTalent.isActive
                ? 'active'
                : ''
            }`}
          ></div>
        </Fragment>
      );
    }
  });

  return (
    <section className='talent-path'>
      <h2 className='talent-path__title'>{title}</h2>
      <div className='talent-path__talents'>{talents}</div>
    </section>
  );
}

export default TalentTree;
