import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AlertMessage } from './AlertStyled';

const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <AlertMessage type={alert.alertType} key={alert.id} >
        {alert.msg}
    </AlertMessage>
));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
