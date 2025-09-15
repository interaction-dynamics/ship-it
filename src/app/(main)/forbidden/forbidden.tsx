'use client'
import { ArrowLeft, Shield } from 'lucide-react'
import { ErrorLayout } from '@/components/error-layout'
import { Button } from '@/components/ui/button'

export default function ForbiddenError() {
  return (
    <ErrorLayout
      title="Protected Territory"
      subTitle="This area requires special access permissions"
      description="You don't currently have permission to view this page. If you believe this is a mistake, please contact your
            administrator for assistance."
      error="Error Code: 403 - Access Forbidden"
      icon={<Shield className="w-16 h-16 text-red-600 dark:text-red-400" />}
    >
      <Button size="lg" onClick={() => window.history.back()} className="gap-2">
        <ArrowLeft size={18} />
        <span>Go Back</span>
      </Button>
    </ErrorLayout>
  )
}
