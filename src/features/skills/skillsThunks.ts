// Constants
import { levelUp } from 'constants/strings';

// Features
import { gainExperience } from 'features/skills/skillsSlice';
import { addMessage } from 'features/textbox/textboxSlice';

// Redux
import { AppDispatch, RootState } from 'app/store';

export const handleExperienceGain =
  (skill: string, experienceGained: number) =>
  (dispatch: AppDispatch, getState: () => RootState): void => {
    const previousState = getState().skills[skill];
    dispatch(gainExperience({ skill, experienceGained }));

    const currentSkill = getState().skills[skill];

    if (currentSkill.level > previousState.level) {
      dispatch(addMessage(levelUp(skill, currentSkill.level)));
    }
  };
