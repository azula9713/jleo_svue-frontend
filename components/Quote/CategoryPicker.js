import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import PickerTitle from './PickerTitle'

import { quoteCategoryState } from '../../atoms/quoteAtom'
import QuoteCategories from '../../data/constants/QuoteCategories'
import { ItemsContainer, SectionContainer } from '../../styles/js/customStyles'
import PickerItem from './PickerItem'

const CategoryPicker = () => {
  const [selectedCategroy, setSelectedCategory] =
    useRecoilState(quoteCategoryState)

  return (
    <SectionContainer>
      <PickerTitle title="Select the category you wish to continue..." />
      <ItemsContainer>
        {QuoteCategories.map((cat) => (
          <PickerItem
            key={cat.id}
            value={cat.slug}
            label={cat.name}
            selected={selectedCategroy}
            action={() => setSelectedCategory(cat.slug)}
          />
        ))}
      </ItemsContainer>
    </SectionContainer>
  )
}

export default CategoryPicker
