import Logo from '../../assets/images/logo.svg'
import { useTranslation } from '../../hooks/useTranslation'
import { DownloadCv } from './downloadCv'

export const Header = () => {
  const { gettext } = useTranslation()

  return (
    <header className="flex items-center w-full justify-between h-20">
      <img className="h-8 hidden " src={Logo} alt="Logo" loading="eager" />

      <ul className="hidden md:flex items-center gap-8 font-semibold text-base">
        {[
          gettext('header.nav.home'),
          gettext('header.nav.knowledge'),
          gettext('header.nav.projects'),
          gettext('header.nav.contact'),
        ].map((item) => (
          <li key={item}>
            <a href={`#${item}`} className="relative group px-1">
              {item}
              <span
                className="absolute left-0 bottom-0 h-0.5 bg-black w-0
                           transition-all duration-300
                           group-hover:w-full group-hover:left-0
                           group-not-hover:w-0 group-not-hover:left-full"
              ></span>
            </a>
          </li>
        ))}
      </ul>

      <DownloadCv />
    </header>
  )
}
