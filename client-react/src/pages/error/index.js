import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';

const ErrorPage = () => {
    return (
        <PageLayout>
            <div id="d-flex mx-auto notfound">
                <div class={styles.notfound}>
                    <div class={styles.notFound-404}>
                        <div></div>
                        <h1>404</h1>
                    </div>
                    <h2>Page not found</h2>
                    <p>
                        The page you are looking for might have been removed had
                        its name changed or is temporarily unavailable.
                    </p>
                    <Link to="/">home page</Link>
                </div>
            </div>
        </PageLayout>
    );
};

export default ErrorPage;
