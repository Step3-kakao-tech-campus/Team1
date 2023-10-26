import React, { useEffect } from 'react';
import FlexContainer from 'components/@commons/FlexContainer';
import BorderBox from 'components/@commons/BorderBox';
import Text from 'components/@commons/Text';
import { SelectedTimeData } from 'apis/types';
import CheckBox from 'components/@commons/CheckBox';
import useApply from 'hooks/alba/useApply';
import SubmitButton from 'components/@commons/SubmitButton';

const DailySelect = ({ day, startWeekDate }: { day: number; startWeekDate: string }): JSX.Element => {
  const { weeklySelect, findTimeData, selectHandler, previewHandler, putSaveHandler } = useApply(startWeekDate);

  // 요일 바뀔 때마다 서버에 저장
  useEffect(() => {
    if (!weeklySelect.some((e) => e.length > 0)) return;
    putSaveHandler(day);
  }, [day]);

  return (
    <>
      <FlexContainer $wFull>
        {weeklySelect[day].map((timeObject: SelectedTimeData, timeIndex) => (
          <label key={timeObject.workTimeId}>
            <BorderBox width="100%" gradation={true}>
              <FlexContainer $wFull $padding="28px" $direction="row" $align="center">
                <CheckBox
                  type="checkbox"
                  onClick={() => selectHandler(timeObject, timeIndex, day)}
                  checked={timeObject.isChecked}
                  readOnly
                />
                <Text size="xl" margin="0">
                  {findTimeData(timeObject.workTimeId).title}
                </Text>
                <Text size="xl" margin="0 0 0 auto">
                  {findTimeData(timeObject.workTimeId).startTime} ~ {findTimeData(timeObject.workTimeId).endTime}
                </Text>
              </FlexContainer>
            </BorderBox>
          </label>
        ))}
      </FlexContainer>
      <SubmitButton onClick={previewHandler}>미리보기</SubmitButton>
    </>
  );
};
export default DailySelect;
