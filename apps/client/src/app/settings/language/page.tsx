import { Separator } from 'ui'

import { LanguageForm } from './language-form'

export default function LanguageSettingsPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Language</h3>
        <p className='text-sm text-muted-foreground'>
          Change the language of the app.
        </p>
      </div>

      <Separator />
      <LanguageForm />
    </div>
  )
}
