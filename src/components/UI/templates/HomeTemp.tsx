import React from 'react'
import FilterSection from '../organisms/FilterSection'
import FooterSection from '../organisms/FooterSection'
import HeadingSection from '../organisms/HeadingSection'
import ListJobSection from '../organisms/ListJobSection'

const HomeTemp = () => {
  return (
    <div>
        <HeadingSection />

        <FilterSection />

        <ListJobSection />

        <FooterSection />
    </div>
  )
}

export default HomeTemp