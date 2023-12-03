import { useState } from 'react';
import useEffectAfterMount from '@/hooks/useEffectAfterMount';

interface UseResetObserverProps<T> {
  stateToWatch: T;
}

function useResetObserver<T>({ stateToWatch }: UseResetObserverProps<T>) {
  const [hasReset, setHasReset] = useState(false);

  useEffectAfterMount(() => {
    setHasReset(true);
  }, [stateToWatch]);

  return { hasReset };
}

export default useResetObserver;
