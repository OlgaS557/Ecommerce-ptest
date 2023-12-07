import { useEffect } from "react";

type Keys = 'Arrow-left' | 'Arrow-right';

export function useKeyEvents(callback: (event: Keys) => void) {

    useEffect (() => {
        const keyboardEvents = (event: KeyboardEvent) => {
            const keyName = event.key as Keys;
            console.log(123);
            
            callback(keyName);
        }

        document.addEventListener('keydown', keyboardEvents);

        return () => {
           document.removeEventListener('keydown', keyboardEvents); 
        }
    }, [])
}