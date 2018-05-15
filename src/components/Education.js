import React from 'react'
import PropTypes from 'prop-types'
import { format, isValid } from 'date-fns'
import styled from 'styled-components'

import {
  ItemWrapper as IW,
  WeightAndColour as WC,
  StyledDiv as SD
} from './shared/SharedComponents'

const EducationWrapper = IW.extend`
  grid-area: e;
`

const ContentWrapper = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.51rem;
`

const EducationTitle = WC.extend`
  grid-area: comp;
  margin-left: 0rem;
  padding-left: 0rem;
  padding-bottom: 0.125rem;
  margin-bottom: 0.125rem;
`

const EducationItemWrapper = SD.extend`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 'ti ti ty ty date date';
  margin: 0.5rem 0rem;
  padding: 0.5rem 0rem;
`

const EducationItemType = styled.span`
  grid-area: ty;
`

const EducationItemTitle = styled.span`
  grid-area: ti;
`

const EducationItemDates = styled.span`
  grid-area: date;
`

const Education = props => {
  const getEducation = props.educationData.map((item, index) => {
    const educationStartDate = format(item.startDate, 'MMM YYYY')
    const educationEndDate = () => {
      if (isValid(item.endDate)) {
        return format(item.endDate, 'MMM YYYY')
      } else {
        return 'Present'
      }
    }
    return (
      <EducationItemWrapper key={index}>
        <EducationItemTitle>{item.institution}</EducationItemTitle>
        <EducationItemType>
          {item.studyType} {item.area}
        </EducationItemType>
        <EducationItemDates>
          Studied: {educationStartDate} - {educationEndDate()}
        </EducationItemDates>
      </EducationItemWrapper>
    )
  })

  return (
    <EducationWrapper>
      <ContentWrapper>
        <EducationTitle>Education</EducationTitle>
        {getEducation}
      </ContentWrapper>
    </EducationWrapper>
  )
}

Education.propTypes = {
  educationData: PropTypes.array
}

export default Education
