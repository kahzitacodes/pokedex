import type { LanguageCode } from '@/types'

export const supportedLanguages: Array<{
	code: LanguageCode
	name: string
	nativeName: string
}> = [
	{
		code: 'en',
		name: 'English',
		nativeName: 'English',
	},
	{
		code: 'es',
		name: 'Spanish',
		nativeName: 'Español',
	},
	{
		code: 'fr',
		name: 'French',
		nativeName: 'Français',
	},
	{
		code: 'de',
		name: 'German',
		nativeName: 'Deutsch',
	},
	{
		code: 'it',
		name: 'Italian',
		nativeName: 'Italiano',
	},
	{
		code: 'ja',
		name: 'Japanese',
		nativeName: '日本語',
	},
	{
		code: 'ko',
		name: 'Korean',
		nativeName: '한국어',
	},
	{
		code: 'zh-Hans',
		name: 'Chinese (Simplified)',
		nativeName: '简体中文',
	},
]

export const langMap: Record<string, LanguageCode> = {
	en: 'en',
	es: 'es',
	fr: 'fr',
	de: 'de',
	it: 'it',
	ja: 'ja',
	ko: 'ko',
	'zh-CN': 'zh-Hans',
	zh: 'zh-Hans',
}
