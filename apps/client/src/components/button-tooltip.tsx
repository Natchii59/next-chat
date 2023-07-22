import {
  Button,
  ButtonProps,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from 'ui'

interface ButtonTooltipProps extends ButtonProps {
  button: React.ReactNode
  tooltip: React.ReactNode
}

export function ButtonTooltip({
  button,
  tooltip,
  ...buttonProps
}: ButtonTooltipProps) {
  return (
    <TooltipProvider delayDuration={0} disableHoverableContent>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button {...buttonProps}>{button}</Button>
        </TooltipTrigger>
        <TooltipContent className='cursor-default'>{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
