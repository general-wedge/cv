import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { format, isValid } from 'date-fns'
import styled from 'styled-components'

// import { Dump } from '../util/helpers'

import {
  ItemWrapper as IW,
  WeightAndColour as WC,
  StyledDiv as SD
} from './shared'

const ReferenceWrapper = styled(IW)`
  grid-area: re;
`

const ContentWrapper = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.51rem;
`

const ReferenceTitle = styled(WC)`
  grid-area: comp;
  margin-left: 0rem;
  padding-left: 0rem;
  padding-bottom: 0.125rem;
  margin-bottom: 0.125rem;
`

const ReferenceItemWrapper = styled(SD)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 'ti ti ty ty ty ty';
  margin: 0.5rem 0rem;
  padding: 0.5rem 0rem;
`

const ReferenceItemType = styled.span`
  grid-area: ty;
`

const ReferenceItemTitle = styled.span`
  grid-area: ti;
`

const Quote = styled.span`
  font-weight: 900;
`

const References = ({ data }) => {
  const { references } = data.cvDataCv
  // return <Dump data={data} />
  const getReference = references.map((item, index) => {
    return (
      <ReferenceItemWrapper key={index}>
        <ReferenceItemTitle>{item.name}</ReferenceItemTitle>
        <Quote>"</Quote>
        <ReferenceItemType>{item.reference}</ReferenceItemType>
        <Quote>"</Quote>
      </ReferenceItemWrapper>
    )
  })

  return (
    <React.Fragment>
      {references[0].name.length === 0 ? null : (
        <ReferenceWrapper>
          <ContentWrapper>
            <ReferenceTitle>Reference</ReferenceTitle>
            {getReference}
          </ContentWrapper>
        </ReferenceWrapper>
      )}
    </React.Fragment>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query References {
        cvDataCv {
          references {
            name
            reference
          }
        }
      }
    `}
    render={data => <References data={data} {...props} />}
  />
)
