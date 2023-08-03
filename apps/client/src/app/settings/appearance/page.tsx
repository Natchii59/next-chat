import { Separator } from 'ui'

import { AppearanceForm } from './appearance-form'

export default async function AppearanceSettingsPage() {
  return (
    <div className='space-y-4'>
      <p className='text-center text-sm text-muted-foreground'>
        Update your appearance settings.
      </p>

      <Separator />
      <AppearanceForm />
    </div>
  )
}
