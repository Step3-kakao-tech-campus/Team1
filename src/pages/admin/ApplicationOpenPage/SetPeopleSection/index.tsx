import FlexContainer from 'components/@commons/FlexContainer';
import BorderBox from 'components/@commons/BorderBox';
import SubmitButton from 'components/@commons/SubmitButton';
import Text from 'components/@commons/Text';
import usePeopleAmount from 'hooks/admin/ApplicationOpenPage/usePeopleAmount';
import React from 'react';
import useWeekSelector from 'hooks/useWeekSelector';
import EditAmountForm from './EditAmountForm';

const SetPeopleSection = ({ startWeekDate }: { startWeekDate: string }): JSX.Element => {
  const { timeTemplate, submitHandler, goPrevHandler } = usePeopleAmount(startWeekDate);
  const { day, WeekBarComponent } = useWeekSelector(0);

  return (
    <FlexContainer $wFull $gap="48px">
      <button onClick={goPrevHandler}>시간대 수정하기</button>
      <WeekBarComponent />
      <FlexContainer $wFull>
        {timeTemplate.map((timeData, timeIndex) => (
          <BorderBox gradation key={`${day}${timeIndex}key`}>
            <FlexContainer $wFull $direction="row" $padding="32px 60px" $align="center">
              <Text size="xl" margin="0">
                {timeData.title}
              </Text>
              <Text margin="0 auto 0 0">
                {timeData.startTime} ~ {timeData.endTime}
              </Text>
              <EditAmountForm timeIndex={timeIndex} day={day} key={`${day}${timeIndex}`} />
              <Text size="xl" margin="0">
                명
              </Text>
            </FlexContainer>
          </BorderBox>
        ))}
      </FlexContainer>
      <SubmitButton onClick={submitHandler}>스케줄 모집 시작하기 (그룹원에게 알림이 가요!)</SubmitButton>
    </FlexContainer>
  );
};

export default SetPeopleSection;
