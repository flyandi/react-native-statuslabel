/**
 * @imports
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import _ from 'lodash';
import Styles from './styles';


export const Statuses = {
    DISABLED: {
        label: 'Disabled'
    }
}

/**
 * @component
 */
export default class StatusLabel extends Component {

    /**
     * propTypes
     * @type {}
     */
    static propTypes = {
        backgroundColor: PropTypes.string,
        borderColor: PropTypes.string,
        borderWidth: PropTypes.number,
        borderRadius: PropTypes.number,
        contentPadding: PropTypes.number,
        inverseTextColor: PropTypes.string,
        type: PropTypes.any,
        label: PropTypes.string,
        style: PropTypes.any,
        onPress: PropTypes.func,
        theme: PropTypes.string,
        invertKeyLabel: PropTypes.bool,
        fontFamily: PropTypes.string,
        fontSize: PropTypes.number,
    }

    /**
     * defaultProps
     * @type {}
     */
    static defaultProps = {
        backgroundColor: 'transparent',
        borderColor: '#828186',
        borderWidth: 1,
        borderRadius: 3,
        contentPadding: 10,
        inverseTextColor: '#FFFFFF',
        type: undefined,
        label: undefined,
        style: {},
        useLabelValue: undefined,
        useKeyValue: undefined,
        onPress: undefined,
        theme: undefined,
        fontSize: undefined,
        fontFamily: undefined,
    }

    /**
     * Themes
     * @type {}
     */
    static themes = {

        _default: {
            margin: undefined,
            fontSize: undefined,
            fontFamily: undefined,
        },

        red: {
            borderColor: '#d9534f'
        },

        green: {
            borderColor: '#5cb85c'
        },

        blue: {
            borderColor: '#3F51B5'
        },

        yellow: {
            borderColor: '#f0ad4e'
        }

    }
    /**
     * @constructor
     * @param props
     */
    constructor(props)
    {
        super(props);
    }

    /**
     * render
     * @returns {XML}
     */
    render()
    {
        let index = 0;


        const styles = Styles(_.extend(
            {},
            StatusLabel.themes._default,
            this.props,
            this.props.style ? this.props.style : {},
            this.props.theme ? StatusLabel.themes[this.props.theme] : {}
        ));

        const isArray = _.isArray(this.props.options);

        return (
            <TouchableOpacity
                style={styles.labelContainer}
                onPress={() => this.props.onPress && this.props.onPress()}
            >
                <Text style={styles.labelText}>
                    {label}
                </Text>
            </TouchableOpacity>
        );
    }
}

