import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import cardStyle from '../../assets/jss/material-dashboard-react/components/cardStyle';

function Card({ ...props }) {
  const {
    classes,
    className,
    children,
    plain,
    profile,
    chart,
    ...rest
  } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined,
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node,
};

Card.defaultProps = {
  className: '',
  plain: false,
  profile: false,
  chart: false,
  children: '',
};

export default withStyles(cardStyle)(Card);
