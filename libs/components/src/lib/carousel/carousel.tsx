import DotButton from '../dot-button/dot-button';
import NextButton from '../next-button/next-button';
import PreviousButton from '../previous-button/previous-button';
import { cn } from '@styles';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';

export interface CarouselProps extends PropsWithChildren {
    slides: number[];
    options?: EmblaOptionsType;
}

export const Carousel: React.FC<CarouselProps> = ({ options, slides, children, ...props }) => {
    const [emblaRef, embla] = useEmblaCarousel(options);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [embla]);

    const scrollPrev = useCallback(() => {
        if (embla) embla.scrollPrev();
    }, [embla]);

    const scrollNext = useCallback(() => {
        if (embla) embla.scrollNext();
    }, [embla]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on('select', onSelect);
        embla.on('reInit', onSelect);
    }, [setScrollSnaps, onSelect, embla]);

    return (
        <div className='relative w-full flex-row md:w-4/5 md:flex-row lg:w-3/5'>
            <div className={cn(['overflow-hidden'])} ref={emblaRef}>
                <div className='relative flex w-full min-w-0'>{children}</div>
                <PreviousButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                <div className='absolute left-0 right-0 bottom-2 z-10 flex items-center justify-center'>
                    {scrollSnaps.map((_, index) => (
                        <DotButton key={index} selected={index === selectedIndex} onClick={() => scrollTo(index)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
