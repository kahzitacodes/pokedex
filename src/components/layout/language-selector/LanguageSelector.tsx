import { Select } from '@/components/ui/select'
import { supportedLanguages } from '@/constants/supported-languages'
import { useLanguage } from '@/contexts/LanguageContext'
import type { LanguageCode } from '@/types'
import * as S from './LanguageSelector.styled'

const isValidLanguageCode = (value: string): value is LanguageCode => {
	return supportedLanguages.some((lang) => lang.code === value)
}

export const LanguageSelector = () => {
	const { language, setLanguage } = useLanguage()

	const options = supportedLanguages.map((lang) => ({
		value: lang.code,
		label: lang.nativeName,
	}))

	const handleValueChange = (value: string) => {
		if (isValidLanguageCode(value)) {
			setLanguage(value)
		}
	}

	return (
		<S.LanguageSelectorWrapper>
			<Select
				value={language}
				onValueChange={handleValueChange}
				options={options}
				placeholder='Select language'
			/>
		</S.LanguageSelectorWrapper>
	)
}
