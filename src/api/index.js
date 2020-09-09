import { headers, url } from './util';

/**
 * POST applicant/add
 * @param {Object} applicant request body
 * @param {String} token
 * @returns {Promise<Number>} new applicant id 
 */
export const createApplicant = async (applicant) => {
    const response = await fetch(url('applicants/add'), {
        body: JSON.stringify(applicant),
        method: 'POST',
        ...headers(process.env.REACT_APP_API_TOKEN),
    });
    return response.json();
};
