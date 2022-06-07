import { useState, useEffect } from "react";

interface WindowDimension {
    width: number | undefined;
    height: number | undefined
}

const useWindowSize = (): WindowDimension => {
    const [windowSize, setWindowSize] = useState<WindowDimension>({
        width: undefined,
        height: undefined
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        // cleanup function
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return windowSize;
}

export default useWindowSize;