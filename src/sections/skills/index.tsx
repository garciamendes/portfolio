import { useTranslation } from '../../hooks/useTranslation'
import { SKILLS } from './constants'
import { SKILL_ICON_SVG_CUSTOM } from './techs'

export const SkillsSection = () => {
  const { gettext } = useTranslation()

  return (
    <div className="flex flex-col w-full mt-8 gap-8">
      <div className="flex items-center gap-2 w-full">
        <div className="flex-1 flex lg:hidden border-t border-black"></div>
        <h2 className="text-3xl font-bold whitespace-nowrap">
          {gettext('skills.title')}
        </h2>
        <div className="flex-1 border-t border-black"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:mt-0 md:grid-cols-4 lg:grid-cols-5 w-full gap-x-5 md:gap-x-3 lg:gap-x-8 gap-y-5">
        {SKILLS.map((skill, index) => {
          return (
            <div
              key={index}
              className="group size-full p-4 md:size-[186px] border-2 border-black rounded-b-sm flex justify-center items-center flex-col hover:bg-black hover:text-white transition-all duration-500 gap-8"
            >
              {SKILL_ICON_SVG_CUSTOM[skill.icon]}

              <h5 className="text-center font-bold text-[20px]">
                {skill.name}
              </h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}
