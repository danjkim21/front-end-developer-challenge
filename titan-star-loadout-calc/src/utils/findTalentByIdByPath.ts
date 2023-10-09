import { TalentItem } from '../types/talents';

// ** Function: find and return the matching talent (by id), the next, and previous talent, from a specified talentPath
// Parameters: talentId, talentPath
// Return: talent, nextTalent,  prevTalent

export const findTalentByIdByPath = (
  talentId: string,
  talentPath: TalentItem[]
) => {
  const indexMatch = talentPath.findIndex((talent) => talent.id === talentId);
  return {
    talent: talentPath[indexMatch],
    nextTalent: talentPath[indexMatch + 1],
    prevTalent: talentPath[indexMatch - 1],
  };
};
