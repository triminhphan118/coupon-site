import * as React from 'react'

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  text?: string
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className = '', orientation = 'horizontal', text, ...props }, ref) => {
    const baseClasses = 'flex items-center'
    const orientationClasses =
      orientation === 'horizontal' ? 'w-full' : 'h-full flex-col'
    const combinedClasses =
      `${baseClasses} ${orientationClasses} ${className}`.trim()

    return (
      <div ref={ref} className={`${combinedClasses}`} {...props}>
        <div
          className={`flex-grow bg-grayColor dark:bg-grayDarker ${
            orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px'
          }`}
        />
        {text && (
          <span
            className={`text-sm bg-grayColor dark:bg-grayDarker px-2 ${
              orientation === 'vertical'
                ? 'py-2 [writing-mode:vertical-rl]'
                : ''
            }`}
          >
            {text}
          </span>
        )}
        {text && (
          <div
            className={`flex-grow bg-grayColor dark:bg-grayDarker ${
              orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px'
            }`}
          />
        )}
      </div>
    )
  },
)
Divider.displayName = 'Divider'

export default Divider
