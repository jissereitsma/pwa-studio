import { Component, createElement } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import classify from 'src/classify';
import defaultClasses from './navTrigger.css';

class Trigger extends Component {
    static propTypes = {
        children: PropTypes.node,
        classes: PropTypes.shape({
            root: PropTypes.string
        }),
        openNav: PropTypes.func.isRequired
    };

    render() {
        const { children, classes, openNav } = this.props;

        return (
            <button className={classes.root} onClick={openNav}>
                {children}
            </button>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    openNav: () => dispatch({ type: 'TOGGLE_DRAWER', payload: 'nav' })
});

export default compose(
    classify(defaultClasses),
    connect(
        null,
        mapDispatchToProps
    )
)(Trigger);
