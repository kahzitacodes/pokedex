import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'
import { langMap, supportedLanguages } from '@/constants/supported-languages'
import type { LanguageCode } from '@/types'

interface LanguageContextType {
	language: LanguageCode
	setLanguage: (language: LanguageCode) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
)

interface LanguageProviderProps {
	children: ReactNode
}

function mapBrowserLanguageToPokeApi(browserLang: string): LanguageCode {
	// Try exact match
	if (langMap[browserLang]) {
		return langMap[browserLang]
	}

	// Try with language prefix (e.g., 'pt-BR' -> 'pt')
	const langPrefix = browserLang.split('-')[0]
	if (langMap[langPrefix]) {
		return langMap[langPrefix]
	}

	return 'en'
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const [language, setLanguageState] = useState<LanguageCode>(() => {
		const savedLanguage = localStorage.getItem(
			'language',
		) as LanguageCode | null

		if (
			savedLanguage &&
			supportedLanguages.some((lang) => lang.code === savedLanguage)
		) {
			return savedLanguage
		}

		const browserLang =
			navigator.language ||
			(
				navigator as Navigator & {
					userLanguage?: string
				}
			).userLanguage ||
			'en'
		const detectedLang = mapBrowserLanguageToPokeApi(browserLang)

		return detectedLang
	})

	useEffect(() => {
		if (!supportedLanguages.some((lang) => lang.code === language)) {
			setLanguageState('en')
			return
		}

		localStorage.setItem('language', language)
		document.documentElement.setAttribute('lang', language)
	}, [
		language,
	])

	const setLanguage = (newLanguage: LanguageCode) => {
		setLanguageState(newLanguage)
	}

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage,
			}}
		>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used within LanguageProvider')
	}
	return context
}
