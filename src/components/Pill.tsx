import { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  closeBtnColor?: string;
  name: string;
  value: string | number;
  onRemove: (item: string | number) => void;
}

const Pill = ({
  className,
  closeBtnColor = 'indigo',
  name,
  value,
  onRemove,
}: PillProps) => {
  const closeBtnClasses = classNames({
    'text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500 focus:text-white':
      closeBtnColor === 'indigo',
  });

  return (
    <span
      className={classNames(
        'inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium',
        { [String(className)]: !!className }
      )}
    >
      {name}
      <button
        type="button"
        className={classNames(
          'flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center focus:outline-none',
          closeBtnClasses
        )}
        onClick={() => onRemove(value)}
      >
        <span className="sr-only">Remove {name}</span>
        <svg
          className="h-2 w-2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 8 8"
        >
          <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </span>
  );
};

export default Pill;
