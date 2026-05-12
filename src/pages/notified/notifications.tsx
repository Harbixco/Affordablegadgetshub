import { toast } from "sonner";

interface ToastOptions {
  description?: string;
  duration?: number;
}

// ✅ Show success notification
export const notifySuccess = (message: string, options?: ToastOptions) => {
  toast.success(message, {
    description: options?.description,
    duration: options?.duration ?? 4000,
  });
};

// ✅ Show error notification
export const notifyError = (message: string, options?: ToastOptions) => {
  toast.error(message, {
    description: options?.description,
    duration: options?.duration ?? 4000,
  });
};