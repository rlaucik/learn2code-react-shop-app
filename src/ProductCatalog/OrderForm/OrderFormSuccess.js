import React from 'react';
import PropTypes from 'prop-types';

export const OrderFormSuccess = ({name, address, email}) => (
    <>
        <p>
            Vážený {name}, prijali sme vašu objednávku na adresu {address}, potvrdenie vám príde na e-mail {email}
        </p>
    </>
);

OrderFormSuccess.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
}