import RestaurantItem from './RestaurantItem';
 
import PropTypes from 'prop-types';
 
function RestaurantList({ restaurants }) {
  return (
    <div className="grid">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} {...restaurant} />
      ))}
    </div>
  );
}
 
RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    pictureId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};
 
export default RestaurantList;