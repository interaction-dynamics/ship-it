'use client'
import { Globe } from 'lucide-react'
import type React from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTranslations } from '@/services/translation'

export interface LanguageSwitcherProps {
  locale: string
}

export const languageSwitcherTestId = 'language-switcher'

export type LanguageSelectorProps = {
  className?: string
  children?: React.ReactNode
}

const defaultButton = (
  <Button variant="outline" size="icon">
    <Globe className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
    <span className="sr-only">Change language</span>
  </Button>
)

export function LanguageSelector({
  children = defaultButton,
}: LanguageSelectorProps) {
  const { locale, changeLocale, languages } = useTranslations()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuCheckboxItem
            onClick={() => changeLocale(language.locale)}
            key={language.locale}
            checked={language.locale === locale}
          >
            {language.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
