import * as Popover from '@radix-ui/react-popover'
import * as Progress from '@radix-ui/react-progress'
import { ProgressBar } from './ProgressBar'

import clsx from 'clsx'

interface HabitDayProps {
  completed: number
  amount: number
}

export function HabitDay(props: HabitDayProps) {
  const completedPercentage = Math.round((props.completed / props.amount) * 100)

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          'w-10 h-10 border-2 rounded-lg cursor-pointer hover:border-violet-300',
          {'bg-zinc-900 border-zinc-800': completedPercentage == 0},
          {'bg-violet-900 border-violet-700': completedPercentage > 0 && completedPercentage < 20},
          {'bg-violet-800 border-violet-600': completedPercentage >= 20 && completedPercentage < 40},
          {'bg-violet-700 border-violet-500': completedPercentage >= 40 && completedPercentage < 60},
          {'bg-violet-600 border-violet-500': completedPercentage >= 60 && completedPercentage < 80},
          {'bg-violet-500 border-violet-400': completedPercentage >= 80 && completedPercentage <= 100}
          
        )}
      />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400 mb-1">terça-feira</span>
          <span className="font-extrabold leading-tight text-3xl">19/01</span>

          <Popover.Arrow height={8} width={16} className="fill-zinc-900 mb-4" />
          <ProgressBar progress={completedPercentage} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
