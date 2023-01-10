import { useState, useMemo, useEffect } from 'react'
import { CheckIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SearchCollection({
  label,
  filterSetCallback,
  elementToKey,
  elementToDisplayName,
  elementToOptionalLabel,
  onSelectionChange
}) {
  const [query, setQuery] = useState('')
  const [selectedElement, setSelectedElement] = useState(null)

  const filteredSet = useMemo(() => filterSetCallback(query), [query])

  useEffect(() => {
    onSelectionChange(selectedElement)
  }, [selectedElement])

  return (
    <Combobox as="div" value={selectedElement} onChange={setSelectedElement}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">{label}</Combobox.Label>
      <div className="relative mt-1">
        <div className="absolute inset-y-0 left-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={elementToDisplayName}
          placeholder={label}
        />

        {filteredSet.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredSet.map((element) => (
              <Combobox.Option
                key={elementToKey(element)}
                value={element}
                className={({ active }) =>
                  classNames(
                    'relative cursor-pointer select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex">
                      <span className={classNames('truncate', selected && 'font-semibold')}>{elementToDisplayName(element)}</span>
                      <span
                        className={classNames(
                          'ml-2 truncate text-gray-500',
                          active ? 'text-indigo-200' : 'text-gray-500'
                        )}
                      >
                        {elementToOptionalLabel(element)}
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
