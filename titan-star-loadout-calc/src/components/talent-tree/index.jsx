import TalentIcon from '../talent-icon';
import './TalentTree.scss';

function TalentTree({ talentPath, title }) {
  console.log(talentPath);

  const talents = talentPath.map((talent) => {
    return <TalentIcon key={talent.id} />;
  });

  return (
    <div>
      <h3>{title}</h3>

      <div>{talents}</div>
    </div>
  );
}

export default TalentTree;
