import { useState, useEffect } from 'react';
import "../components/Styles.css";
import { Widget } from '@typeform/embed-react';

function useWindowDimensions() {

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height: height * 0.83 // Get 75% of the window height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export const Vinculate = (): JSX.Element => {
    const { height } = useWindowDimensions();

    return (
        <div className="form_container fifth">
            <Widget
                id="r8CQhYfx" // Replace with your actual Typeform ID
                height={height}
            />
        </div>
    );
};