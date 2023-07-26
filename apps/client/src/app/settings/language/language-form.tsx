'use client'

import { Label, RadioGroup, RadioGroupItem } from 'ui'

const languages = [
  { name: '🇺🇸 English', code: 'en' },
  { name: '🇪🇸 Español', code: 'es' },
  { name: '🇫🇷 Français', code: 'fr' },
  { name: '🇵🇹 Português', code: 'pt' },
  { name: '🇩🇪 Deutsch', code: 'de' },
  { name: '🇮🇹 Italiano', code: 'it' },
  { name: '🇵🇱 Polski', code: 'pl' },
  { name: '🇳🇱 Nederlands', code: 'nl' },
  { name: '🇷🇺 Русский', code: 'ru' },
  { name: '🇯🇵 日本語', code: 'ja' },
  { name: '🇰🇷 한국어', code: 'ko' },
  { name: '🇨🇳 中文', code: 'zh' },
  { name: '🇹🇷 Türkçe', code: 'tr' },
  { name: '🇻🇳 Tiếng Việt', code: 'vi' },
  { name: '🇨🇿 Čeština', code: 'cs' },
  { name: '🇸🇪 Svenska', code: 'sv' },
  { name: '🇭🇺 Magyar', code: 'hu' },
  { name: '🇩🇰 Dansk', code: 'da' },
  { name: '🇫🇮 Suomi', code: 'fi' },
  { name: '🇳🇴 Norsk', code: 'no' },
  { name: '🇬🇷 Ελληνικά', code: 'el' },
  { name: '🇷🇴 Română', code: 'ro' },
  { name: '🇮🇩 Bahasa Indonesia', code: 'id' },
  { name: '🇺🇦 Українська', code: 'uk' },
  { name: '🇮🇳 हिन्दी', code: 'hi' },
  { name: '🇹🇭 ภาษาไทย', code: 'th' },
  { name: '🇸🇦 العربية', code: 'ar' },
  { name: '🇮🇱 עברית', code: 'he' },
  { name: '🇮🇷 فارسی', code: 'fa' },
  { name: '🇵🇭 Filipino', code: 'tl' },
  { name: '🇲🇾 Bahasa Melayu', code: 'ms' },
  { name: '🇮🇳 हिन्दी', code: 'hi' }
]

export function LanguageForm() {
  return (
    <RadioGroup>
      {languages.map(language => (
        <div key={language.code} className='flex items-center gap-2 pb-2'>
          <RadioGroupItem value={language.code} id={language.code} />
          <Label htmlFor={language.code}>{language.name}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}
