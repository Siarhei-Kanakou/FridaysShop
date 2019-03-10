import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.LightGray,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 20,
  },
  checkoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderColor: Colors.DarkGray,
    borderTopWidth: 2,
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  totalText: {
    color: Colors.Black,
    fontSize: 20,
  },

  item: {
    flex: 1,
    flexDirection: 'row',

    borderColor: Colors.DarkGray,
    borderBottomWidth: 2,
    padding: 15,
  },
  itemInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 15,
  },
  itemSecondaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    borderColor: Colors.DarkGray,
    borderWidth: 2,
    borderRadius: 6,
    height: 60,
    width: 75,
  },
  itemTitle: {
    color: Colors.Black,
    fontSize: 20,
  },
  itemPrice: {
    flex: 1,
    color: Colors.DarkGray,
    fontSize: 25,
  },
  itemQtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.DarkGray,
    borderWidth: 2,
  },
  itemQtyButton: {
    paddingHorizontal: 10,
    backgroundColor: Colors.DarkGray,
    color: Colors.White,
    fontSize: 15,
  },
  itemQtyText: {
    paddingHorizontal: 20,
    backgroundColor: Colors.White,
    color: Colors.Black,
    fontSize: 15,
  }
});
