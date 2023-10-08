import './TalentCalculator.scss';
import { talentPathOne, talentPathTwo } from '../../data/talentTrees';
import TalentTree from '../../components/talent-tree';
import { useState } from 'react';

function TalentCalculator() {
  const [pointsSpent, setPointsSpent] = useState(0);

  return (
    <main className='talent-calculator'>
      <div className='talent-calculator__header'>
        <h1>TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</h1>
      </div>

      <div className='talent-calculator__content'>
        {/* Talent Tree One Component */}
        <div className='talent-paths-container'>
          <TalentTree talentPath={talentPathOne} title='Talent Path 1' />

          {/* Talent Tree Two Component */}
          <TalentTree talentPath={talentPathTwo} title='Talent Path 2' />
        </div>

        {/* Points Spent Component */}
        <section className='talent-points-container'>
          <h2>{pointsSpent} / 6 Points Spent</h2>
        </section>
      </div>
    </main>
  );
}

export default TalentCalculator;
