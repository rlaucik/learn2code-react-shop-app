import React from 'react';
import { LanguageContext } from './LanguageContext';

export class LanguageButton extends React.Component {
    render() {
        const translations = this.context;
        return (
            <button
                onClick={this.props.onChangeLanguage}
            >
            {translations['Switch language']}
            </button>
        );
    }
}

LanguageButton.contextType = LanguageContext;

