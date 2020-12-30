import React from 'react';
import classes from './Logo.module.css'
import Image from 'next/image'

function Logo(props) {
    return (
        <div className={classes.Logo}>
            <a href="/" onClick={e => e.preventDefault()}>
                <Image
                    src="/images/logo.png"
                    alt="Picture of the author"
                    width={167}
                    height={43}
                />
            </a>
        </div>
    );
}

export default Logo;