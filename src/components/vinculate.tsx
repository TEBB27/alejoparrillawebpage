
import "./Styles.css";
import { Widget } from '@typeform/embed-react';

export const Vinculate = (): JSX.Element => {

    return (
        <div className="form_container fifth">
            <Widget
                id="r8CQhYfx" // Replace with your actual Typeform ID
                height={750}
            />
        </div>
    );
};