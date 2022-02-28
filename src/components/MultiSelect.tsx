import {
  Fragment,
  useState,
  HTMLAttributes,
  ChangeEvent,
  useEffect,
} from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import Pill from './Pill';
import { useId } from '@reach/auto-id';

interface SelectOption {
  name: string;
  value: string | number;
}

interface MultiSelectProps extends HTMLAttributes<HTMLDivElement> {
  options: SelectOption[];
  name?: string;
  legend: string;
  label: string;
  labelClasses?: string;
  onValuesChanged?: (values: SelectOption[]) => void;
}

const MultiSelect = ({
  name,
  options,
  className,
  labelClasses = 'mb-1 ml-1',
  legend,
  onValuesChanged,
  label,
}: MultiSelectProps) => {
  const [selected, setSelected] = useState<SelectOption[]>([]);

  const optionIsSelected = (option: SelectOption) => {
    return !!selected.find((el) => el === option);
  };

  const onRemove = (value: string | number) => {
    setSelected(selected.filter((opt) => opt.value !== value));
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const option = options.find((opt) => opt.value === value) as SelectOption;
    const isSelected = optionIsSelected(option);
    if (isSelected) {
      setSelected(selected.filter((opt) => opt !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  useEffect(() => {
    if (onValuesChanged) onValuesChanged(selected);
  }, [onValuesChanged, selected]);

  const labelId = useId('react-multiselect-label');

  return (
    <Popover
      as="div"
      className={classNames('relative inline-block text-left', {
        [String(className)]: !!className,
      })}
    >
      {({ open }) => (
        <>
          <p id={labelId} className={labelClasses}>
            {label}
          </p>
          <Popover.Button
            className="inline-flex items-center justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 py-2"
            aria-describedby={labelId}
          >
            <div className="flex flex-wrap gap-2">
              {selected.map((option) => (
                <Pill
                  key={option.value}
                  name={option.name}
                  value={option.value}
                  onRemove={onRemove}
                  className="bg-indigo-100 text-indigo-700"
                />
              ))}
            </div>
            <ChevronDownIcon
              className={classNames('-mr-1 ml-2 h-5 w-5 my-0.5', {
                'rotate-180': open,
              })}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel
              as="fieldset"
              className="flex flex-col origin-top absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <legend className="sr-only">{legend}</legend>
              {options.map((option) => (
                <label className="flex items-center px-2 py-1 hover:bg-blue-100 space-x-2">
                  <input
                    key={option.value}
                    type="checkbox"
                    name={name}
                    value={option.value}
                    className="relative p-2 rounded text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    checked={optionIsSelected(option)}
                    onChange={onChange}
                  />
                  <span>{option.name}</span>
                </label>
              ))}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default MultiSelect;
