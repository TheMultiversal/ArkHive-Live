// Hooks barrel export

// Existing hooks
export { useDebounce } from './useDebounce';
export { useLocalStorage } from './useLocalStorage';
export { useKeyboardShortcut } from './useKeyboardShortcut';
export { useForm } from './useForm';
export type { UseFormOptions, UseFormReturn } from './useForm';
export { useIntersectionObserver } from './useIntersectionObserver';
export { 
  useMediaQuery, 
  useIsMobile, 
  useIsTablet, 
  useIsDesktop,
  usePrefersDarkMode,
  usePrefersReducedMotion,
} from './useMediaQuery';
export { useClickOutside } from './useClickOutside';
export { useCopyToClipboard } from './useCopyToClipboard';
export { useScrollLock } from './useScrollLock';
export { useFocusTrap } from './useFocusTrap';
export { useOnlineStatus } from './useOnlineStatus';
export { useWindowSize, useBreakpoint } from './useWindowSize';
export { usePrevious } from './usePrevious';
export { useThrottle, useThrottledCallback } from './useThrottle';

// Authentication & Authorization
export { default as useAuth, AuthProvider, useAuthContext } from './useAuth';
export type { User, UserPreferences, AuthState, LoginCredentials, RegisterData, UseAuthReturn } from './useAuth';

export { default as usePermissions, withPermission } from './usePermissions';
export type { Permission, Role, RolePermissions, PermissionCheck, UsePermissionsOptions, UsePermissionsReturn } from './usePermissions';

// Data Management
export { default as useFilters } from './useFilters';
export type { FilterOperator, Filter, FilterGroup, UseFiltersOptions, UseFiltersReturn } from './useFilters';

export { default as useSorting } from './useSorting';
export type { SortDirection, SortConfig, UseSortingOptions, UseSortingReturn } from './useSorting';

export { default as useInfiniteScroll } from './useInfiniteScroll';
export type { UseInfiniteScrollOptions, UseInfiniteScrollReturn } from './useInfiniteScroll';

export { default as useVirtualization } from './useVirtualization';
export type { VirtualItem, UseVirtualizationOptions, UseVirtualizationReturn } from './useVirtualization';

export { default as useOptimistic, useOptimisticList } from './useOptimistic';
export type { OptimisticUpdate, UseOptimisticOptions, UseOptimisticReturn, UseOptimisticListReturn } from './useOptimistic';

// Notifications
export { default as useNotifications } from './useNotifications';
export type { Notification, NotificationPreferences, UseNotificationsOptions, UseNotificationsReturn } from './useNotifications';

// Utility Hooks
export { default as useIdle } from './useIdle';
export type { UseIdleOptions, UseIdleReturn } from './useIdle';

export { default as useSound } from './useSound';
export type { SoundOptions, Sound, UseSoundOptions, UseSoundReturn } from './useSound';

export { default as useGeolocation, calculateDistance, formatCoordinates } from './useGeolocation';
export type { GeolocationPosition, GeolocationError, UseGeolocationOptions, UseGeolocationReturn } from './useGeolocation';

export { default as useClipboard, copyToClipboard } from './useClipboard';
export type { ClipboardItem, UseClipboardOptions, UseClipboardReturn } from './useClipboard';

// Scroll & Navigation
export { useScrollPosition } from './useScrollPosition';
export { usePageTitle, useSetPageTitle } from './usePageTitle';
