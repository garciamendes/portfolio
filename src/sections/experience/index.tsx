import { useTranslation } from '../../hooks/useTranslation'
import { EXPERIENCES } from './constants'

export const Experience = () => {
  const { gettext } = useTranslation()

  return (
    <div className="flex bg-black justify-center w-full py-8 px-3 lg:px-0">
      <div className="flex flex-col w-full lg:w-[1280px] gap-8">
        <div className="flex items-center gap-2 w-full">
          <div className="flex-1 flex lg:hidden border-t border-white"></div>
          <h2 className="text-3xl font-bold text-white whitespace-nowrap">
            {gettext('experience.title')}
          </h2>
          <div className="flex-1 border-t border-white"></div>
        </div>

        <div className="flex flex-col max-h-[calc(250px*3)] w-full overflow-y-auto gap-6">
          {EXPERIENCES.map((experience, index) => {
            const gettextValue = (value: string) =>
              gettext(`experience.${experience.key}.${value}`)

            return (
              <div
                key={index}
                className="flex flex-col py-5 px-6 mx-auto w-full h-[250px] border border-zinc-300 rounded-[10px]"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
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
    </div>
  )
}
