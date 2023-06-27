import {useMemo, useState} from 'react';

export const useForceUpdate = (): [number, VoidFunction] =>{
    const [cycle, setCycle] = useState(0);
    const updater = useMemo(() => () => setCycle(value => value + 1), []);
    return [cycle, updater];
}