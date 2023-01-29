import * as Progress from '@radix-ui/react-progress'
import { useEffect, useState } from 'react'
interface ProgressBarProps {
  progress: number
}
export function ProgressBar(props: ProgressBarProps) {

  return (
    <Progress.Root className="h-3 rounded-xl bg-zinc-700 w-full ">
      <Progress.Indicator
        role="progressbar"
        aria-label='Progresso de hábitos completados nesse dia'
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-500 transition-all"
        style={{
          width: `${props.progress}%`,
        }}
      />
    </Progress.Root>
  )
}
