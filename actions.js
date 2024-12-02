export const ADD_PROFILE = 'ADD_PROFILE';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';
export const CALCULATE_AVERAGE_AGE = 'CALCULATE_AVERAGE_AGE';

export const addProfile = (profile) => {
    return {
        type: ADD_PROFILE,
        payload: profile,
    }
}

export const removeProfile = (profileId) => {
    return {
        type: REMOVE_PROFILE,
        payload: profileId,
    }
}

export const calculateAverageAge = () => {
    return {
        type: CALCULATE_AVERAGE_AGE
    }
}