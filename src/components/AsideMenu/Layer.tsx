import React from 'react'
import { mdiLogout, mdiClose } from '@mdi/js'
import Icon from '../Icon'
import AsideMenuItem from './Item'
import AsideMenuList from './List'
import { MenuAsideItem } from '../../interfaces'
import { useAppSelector } from '../../stores/hooks'
import JustboilLogo from '../JustboilLogo'

type Props = {
  menu: MenuAsideItem[]
  className?: string
  onAsideLgCloseClick: () => void
}

export default function AsideMenuLayer({ menu, className = '', ...props }: Props) {
  const darkMode = useAppSelector((state) => state.darkMode.isEnabled)

  const logoutItem: MenuAsideItem = {
    label: 'Logout',
    icon: mdiLogout,
    color: 'info',
    isLogout: true,
  }

  const handleAsideLgCloseClick = (e: React.MouseEvent) => {
    e.preventDefault()
    props.onAsideLgCloseClick()
  }

  return (
    <>
      <aside
        className={`${className} zzz xl:py-2 xl:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden`}
      >
        {/* <aside
      className={`${className} zzz xl:py-2 xl:pl-2 w-65 fixed flex z-40 top-0 h-screen transition-position overflow-hidden`}
    > */}
        <div
          // className={`aside lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900`}
          className={`aside  xl:rounded-2x l flex-1 flex flex-col overflow-hidden dark:bg-slate-800`}
        >
          <div
            className={`aside-brand flex flex-row h-14 items-center justify-between dark:bg-slate-900`}
          >
            {/* <div className="text-left flex-1 lg:text-left pl-6 lg:pl-6 xl:text-left xl:pl-6"> */}
            <div className="text-left flex-1 lg:text-left pl-6 lg:pl-6 xl:text-left bg-white dark:bg-slate-800 xl:pl-6 pt-3 pb-1">
              {/* <b className="font-black">Comesh</b> */}

              <JustboilLogo 
              // className="w-auto h-8 md:h-6 mx-auto" 
              />

            </div>
            <button
              className="hidden lg:inline-block xl:hidden p-3"
              onClick={handleAsideLgCloseClick}
            >
              <Icon path={mdiClose} />
            </button>
          </div>
          <div className='flex flex-col item-between bg-gradient-to-b from-violet-500 to-fuchsia-500 xl:rounded-xl mt-4' style={{height: '-webkit-fill-available'}}>
            <div
              className={`flex-1 overflow-y-auto overflow-x-hidden ${darkMode ? 'aside-scrollbars-[slate]' : 'aside-scrollbars'
                }`}
            >
              <AsideMenuList menu={menu} />
            </div>
            <ul>
              <AsideMenuItem item={logoutItem} />
            </ul>

          </div>
        </div>
      </aside>
    </>
  )
}
