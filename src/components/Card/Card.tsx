import {Wrapper} from './Card.styles';

const Card = (props) => {
    const classes= 'card '+ props.className;

    return <Wrapper className={classes}>{props.children}</Wrapper>;
}

export default Card