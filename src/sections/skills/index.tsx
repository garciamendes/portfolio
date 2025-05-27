import { SKILLS } from './constants'
import { SKILL_ICON_SVG_CUSTOM } from './techs'

export const SkillsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 md:mt-0 md:grid-cols-4 lg:grid-cols-5 w-full gap-x-5 md:gap-x-3 lg:gap-x-8 gap-y-5">
      {SKILLS.map((skill, index) => {
        return (
          <div
            key={index}
            className="group size-full p-4 md:size-[186px] border-2 border-black rounded-b-sm flex justify-center items-center flex-col hover:bg-black hover:text-white transition-all duration-500 gap-8"
          >
            {SKILL_ICON_SVG_CUSTOM[skill.icon]}

            <h5 className="text-center font-bold text-[20px]">{skill.name}</h5>
          </div>
        )
      })}
    </div>
  )
}
