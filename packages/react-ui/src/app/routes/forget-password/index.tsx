import { useQueryClient } from '@tanstack/react-query';
import { t } from 'i18next';

import { ResetPasswordForm } from '@/features/authentication/components/reset-password-form';
import { flagsHooks } from '@/hooks/flags-hooks';

const ResetPasswordPage = () => {
  const queryClient = useQueryClient();
  const branding = flagsHooks.useWebsiteBranding(queryClient);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <img
        src={branding.logos.fullLogoUrl}
        alt={t('logo')}
        width={205}
        height={205}
      />
      <ResetPasswordForm />
    </div>
  );
};

export { ResetPasswordPage };
