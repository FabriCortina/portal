import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

interface NavigationItem {
  name: string;
  href: string;
  translationKey: string;
}

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/dashboard', translationKey: 'navigation.dashboard' },
  { name: 'Clientes', href: '/clients', translationKey: 'navigation.clients' },
  { name: 'Colaboradores', href: '/collaborators', translationKey: 'navigation.collaborators' },
  { name: 'Seguimientos', href: '/trackings', translationKey: 'navigation.trackings' },
  { name: 'Consultas', href: '/queries', translationKey: 'navigation.queries' },
  { name: 'Métricas', href: '/metrics', translationKey: 'navigation.metrics' },
];

interface MainNavProps {
  user?: {
    name: string;
    email: string;
    imageUrl?: string;
  };
  onLogout?: () => void;
}

const MainNav: React.FC<MainNavProps> = ({ user, onLogout }) => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <Disclosure as="nav" className="bg-white shadow dark:bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="/logo.svg"
                    alt="Portal Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={twMerge(
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                        location.pathname === item.href
                          ? 'border-blue-500 text-gray-900 dark:border-blue-400 dark:text-white'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200'
                      )}
                    >
                      {t(item.translationKey)}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                <ThemeSwitcher />
                <LanguageSwitcher />
                {user ? (
                  <Menu as="div" className="relative ml-3">
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800">
                      <span className="sr-only">{t('navigation.userMenu')}</span>
                      {user.imageUrl ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      ) : (
                        <UserCircleIcon className="h-8 w-8 text-gray-400" />
                      )}
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/profile"
                              className={twMerge(
                                active ? 'bg-gray-100 dark:bg-gray-600' : '',
                                'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200'
                              )}
                            >
                              {t('navigation.profile')}
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={onLogout}
                              className={twMerge(
                                active ? 'bg-gray-100 dark:bg-gray-600' : '',
                                'block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200'
                              )}
                            >
                              {t('navigation.logout')}
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Link
                    to="/login"
                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
                  >
                    {t('navigation.login')}
                  </Link>
                )}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                  <span className="sr-only">{t('navigation.openMenu')}</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.href}
                  as={Link}
                  to={item.href}
                  className={twMerge(
                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
                    location.pathname === item.href
                      ? 'border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/50 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200'
                  )}
                >
                  {t(item.translationKey)}
                </Disclosure.Button>
              ))}
            </div>
            {user && (
              <div className="border-t border-gray-200 pb-3 pt-4 dark:border-gray-700">
                <div className="flex items-center px-4">
                  {user.imageUrl ? (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  ) : (
                    <UserCircleIcon className="h-10 w-10 text-gray-400" />
                  )}
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800 dark:text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {user.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Disclosure.Button
                    as={Link}
                    to="/profile"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                  >
                    {t('navigation.profile')}
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="button"
                    onClick={onLogout}
                    className="block w-full px-4 py-2 text-left text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                  >
                    {t('navigation.logout')}
                  </Disclosure.Button>
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MainNav; 