import React, { Component } from 'react';

export const checkEmail = (email) => {
    if (email.toString().length === 0) {
        return 'The field is not empty.'
    }
    else if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        return ''
    }
    return 'Email is not valid'
}

export const checkLengthInput = (context, length) => {
    if (context.match(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi))
        return 'The Field is not contained special words'
    else if (context.toString().length === 0) {
        return 'The field is not empty.'
    }
    else if (context.toString().length < length) {
        return `The length must be more than ${length}.`
    }
    return ''
}

export const checkOnlyLength = (context, length) => {
    if (context.toString().length === 0) {
        return 'The field is not empty.'
    }
    else if (context.toString().length < length) {
        return `The length must be more than ${length}.`
    }
    return ''
}

export const checkTimeFormat = (context) => {
    if (context.toString().length === 0) {
        return 'The field is not empty.'
    }
    return ''
}


export const checkOnlyNumber = (context, min, max) => {
    if (context.toString().length === 0) {
        return 'The field is not empty.'
    }
    else if (!context.toString().match(/^[0-9]+$/)) {
        return 'The field must be number and over 0'
    }
    else if (min !== null || max !== null) {
        if (min !== null && context <= min)
            return 'The field must be > ' + min
        else if (max !== null && context >= max)
            return 'The field must be < ' + max
    }

    return ''
}

export const checkVerifyPassword = (first, last) => {
    if (last.toString().length === 0) {
        return 'The field is not empty.'
    }
    else if (first !== last) {
        return 'Verify Password is not the same as Password'
    }
    return ''
}

export const checkStartDate = (StartDate) => {
    if (StartDate === '')
        return 'Start Date is not empty'
    else if (StartDate < today) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = mm + '/' + dd + '/' + yyyy;
        return 'Start Date is over today'
    }
}

export const checkEndDate = (StartDate, EndDate) => {
    if (EndDate === '')
        return 'This field is not empty'
    else if (StartDate === '')
        return 'Start Date is not empty'
    else if (EndDate < StartDate)
        return 'End Date is over start today'
}
