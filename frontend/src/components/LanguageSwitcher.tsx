import React from 'react';
import { Menu } from '@headlessui/react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

const languages = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Opcional: guardar la preferencia de idioma
    localStorage.setItem('language', lng);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center rounded-full bg-white p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-gray-200">
        <GlobeAltIcon className="h-5 w-5" />
      </Menu.Button>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
        {languages.map((language) => (
          <Menu.Item key={language.code}>
            {({ active }) => (
              <button
                onClick={() => changeLanguage(language.code)}
                className={twMerge(
                  'flex w-full items-center px-4 py-2 text-sm',
                  active
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300',
                  i18n.language === language.code && 'text-blue-600 dark:text-blue-400'
                )}
              >
                {t(`language.${language.code}`)}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default LanguageSwitcher; 