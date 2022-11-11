import PropTypes from 'prop-types';

export default function Painting(props) {
  console.log(props);
  return (
    <div>
      <a href={props.url}>{props.id}</a>
      <p>the price is {props.price}</p>
      <h2>{props.heading}</h2>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string,
  price: PropTypes.number,
  heading: PropTypes.string,
};
