import React from 'react';
import { Menu } from '@headlessui/react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const themes = [
    {
      name: 'light',
      icon: SunIcon,
      label: t('theme.light'),
    },
    {
      name: 'dark',
      icon: MoonIcon,
      label: t('theme.dark'),
    },
    {
      name: 'system',
      icon: ComputerDesktopIcon,
      label: t('theme.system'),
    },
  ];

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-gray-200">
        {theme === 'light' && <SunIcon className="h-5 w-5" />}
        {theme === 'dark' && <MoonIcon className="h-5 w-5" />}
        {theme === 'system' && <ComputerDesktopIcon className="h-5 w-5" />}
      </Menu.Button>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
        {themes.map((item) => {
          const Icon = item.icon;
          return (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <button
                  onClick={() => setTheme(item.name as 'light' | 'dark' | 'system')}
                  className={twMerge(
                    'flex w-full items-center px-4 py-2 text-sm',
                    active
                      ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300',
                    theme === item.name && 'text-blue-600 dark:text-blue-400'
                  )}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              )}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default ThemeSwitcher; 