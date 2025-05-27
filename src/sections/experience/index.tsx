import { useTranslation } from '../../hooks/useTranslation'
import { EXPERIENCES } from './constants'

export const Experience = () => {
  const { gettext } = useTranslation()

  return (
    <div className="flex flex-col bg-black w-full py-8 px-3 md:px-0">
      <div className="flex flex-col max-h-[calc(250px*3)] w-full overflow-y-auto gap-6">
        {EXPERIENCES.map((experience, index) => {
          const gettextValue = (value: string) =>
            gettext(`experience.${experience.key}.${value}`)

          return (
            <div
              key={index}
              className="flex flex-col py-5 px-6 mx-auto w-full md:w-[1280px] h-[250px] border border-zinc-300 rounded-[10px]"
            >
              <div className="flex items-center justify-between">
                <strong className="text-white font-bold text-2xl">
                  {experience.company}
                </strong>

                <span className="font-semibold text-lg text-slate-200">
                  {gettextValue(experience.startDate)} -{' '}
                  {gettextValue(experience.endDate)}
                </span>
              </div>

              <ul
                className="flex flex-col flex-1 overflow-auto mt-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {experience.descriptions.map((_description, descIndex) => {
                  return (
                    <li
                      key={descIndex}
                      className="text-md text-zinc-200 text-lg mt-2 ml-8 list-disc"
                    >
                      {gettext(
                        `experience.${experience.key}.descriptions.${experience.descriptions[descIndex]}`
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
