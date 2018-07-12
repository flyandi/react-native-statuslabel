/**
 * @imports
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import _ from 'lodash';
import Styles from './styles';

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
        inverseTextColor: PropTypes.string,
        type: PropTypes.any,
        label: PropTypes.string,
        style: PropTypes.any,
        onPress: PropTypes.func,
        theme: PropTypes.string,
        invertKeyLabel: PropTypes.bool,
        fontFamily: PropTypes.string,
        fontSize: PropTypes.number,
        fontWeight: PropTypes.any,
        upperCase: PropTypes.bool,
    }

    /**
     * defaultProps
     * @type {}
     */
    static defaultProps = {
        backgroundColor: 'transparent',
        borderColor: undefined,
        borderWidth: undefined,
        borderRadius: 3,
        textColor: '#FFFFFF',
        type: undefined,
        label: undefined,
        style: {},
        useLabelValue: undefined,
        useKeyValue: undefined,
        onPress: undefined,
        theme: undefined,
        fontSize: 11,
        fontFamily: undefined,
        fontWeight: 'bold',
        upperCase: true,
    }

    /**
     * Themes
     * @type {}
     */
    static themes = {

        _default: {
            margin: undefined,
        },

        red: {
            backgroundColor: '#d9534f'
        },

        green: {
            backgroundColor: '#5cb85c'
        },

        blue: {
            backgroundColor: '#3F51B5'
        },

        yellow: {
            backgroundColor: '#f0ad4e'
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

        const Container = this.props.onPress ? TouchableOpacity : View;

        return (
            <Container
                style={styles.labelContainer}
                onPress={() => this.props.onPress && this.props.onPress()} style={styles.labelContainer}
            >
                <Text style={styles.labelText}>
                    {this.props.upperCase && this.props.label ? this.props.label.toUpperCase() : this.props.label}
                </Text>
            </Container>
        );
    }
}

