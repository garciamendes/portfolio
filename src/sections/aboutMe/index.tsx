import SelfImg from '../../assets/images/self.svg'
import { useTranslation } from '../../hooks/useTranslation'

export const AboutMeSection = () => {
  const { gettext, Trans } = useTranslation()

  return (
    <div className="flex flex-col w-full mt-8 gap-8">
      <div className="flex items-center gap-2 w-full">
        <div className="flex-1 flex lg:hidden border-t border-black"></div>
        <h2 className="text-3xl font-bold text-black whitespace-nowrap">
          {gettext('about_me.title')}
        </h2>
        <div className="flex-1 border-t border-black"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-full mt-8 gap-8">
        <img
          src={SelfImg}
          alt="A picture of me"
          className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-auto"
        />

        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4">
            {gettext('about_me.description.header')}
          </h3>
          <p className="text-2xl lg:text-lg mb-4">
            {gettext('about_me.description.paragraphs_count_1')}
          </p>
          <p className="text-2xl lg:text-lg mb-4">
            <Trans
              i18nKey="about_me.description.paragraphs_count_2"
              components={{
                strong: <strong className="text-primary font-bold" />,
              }}
            />
          </p>
          <p className="text-2xl lg:text-lg mb-4">
            {gettext('about_me.description.paragraphs_count_3')}
          </p>
        </div>
      </div>
    </div>
  )
}
