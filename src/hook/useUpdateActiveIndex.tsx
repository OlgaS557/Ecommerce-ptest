import { useEffect, useState } from 'react';

export function useUpdateActiveIndex(conteinerRef: React.RefObject<HTMLDivElement>) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const currentNode = conteinerRef?.current;

        if (!currentNode) {
            return;
        }

        const scroll = () => {
            const dataConteiner = currentNode.getBoundingClientRect();
            const firstElementData = currentNode.firstElementChild?.getBoundingClientRect();

            if(!firstElementData) {
                return;
            }

            const shift = firstElementData.left - dataConteiner.left;
            setActiveIndex(Math.abs(Math.round(shift / dataConteiner.width)));
        }

        currentNode.addEventListener('scroll', scroll);

        return () => {
            currentNode.removeEventListener('scroll', scroll);
        }

    }, [conteinerRef])

    return activeIndex;
}