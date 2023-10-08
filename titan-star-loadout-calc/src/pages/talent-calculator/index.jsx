import './TalentCalculator.scss';
import { talentPathOne, talentPathTwo } from '../../data/talentTrees';
import TalentTree from '../../components/talent-tree';
import { useState } from 'react';

function TalentCalculator() {
  const [pointsSpent, setPointsSpent] = useState(0);

  return (
    <>
      <h1>TitanStar Legends -Rune Mastery Loadout Talent Calculator 9000</h1>

      {/* Talent Tree One Component */}
      <TalentTree talentPath={talentPathOne} title='Talent Path 1' />

      {/* Talent Tree Two Component */}
      <TalentTree talentPath={talentPathTwo} title='Talent Path 2' />

      {/* Points Spent Component */}
      <div>
        <h2>{pointsSpent}/6 Points Spent</h2>
      </div>
    </>
  );
}

export default TalentCalculator;
