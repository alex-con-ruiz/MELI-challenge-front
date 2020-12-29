
const search = require('../models/models').Search;
const searchItem = require('../models/models').SearchItem;

const FormatSearch = ({ results, filters, available_filters }) => {

  // Create new instance of search
  const searchResult = new search();

  // Mapping results to get item data
  results.map(item => {

    const searchedItem = new searchItem();

    searchedItem.setId(item.id)

    // Set price data
    let amount, decimals;
    [amount, decimals] = item.price.toString().split('.').map(x => parseInt(x));
    searchedItem.setPrice(item.currency_id, amount, decimals)

    searchedItem.setTitle(item.title)
    searchedItem.setPicture(item.thumbnail)
    searchedItem.setCondition(item.condition)
    searchedItem.setFreeShipping(item.shipping.free_shipping)
    searchedItem.setAddress(item.address.state_name)
    searchedItem.setCategoryId(item.category_id)

    // Add item into searchResult
    searchResult.setItems(searchedItem)
  });

  // Check if categories exist into request.

  if (filters.length !== 0) {
    filters[0].values[0].path_from_root.map(cat => {
      searchResult.setCategory(cat)
    });
  } else {
    available_filters[0].values.map((cat, i) => {
      if (i > 3) {
        return;
      }
      searchResult.setCategory(cat)
    });
  }

  return searchResult;
};


const selectedItem = require('../models/models').ItemById;


const FormatItem = ({ id, title, currency_id, price, pictures, condition, shipping, sold_quantity, category_id }) => {
  const itemById = new selectedItem();

  itemById.setId(id);
  itemById.setTitle(title);

  // Set price data
  let amount, decimals;
  [amount, decimals] = price.toString().split('.').map(x => parseInt(x));
  itemById.setPrice(currency_id, amount, decimals);

  itemById.setPicture(pictures[0].url || '');
  itemById.setCondition(condition);

  if (shipping.free_methods) {
    itemById.setFreeShipping(shipping.free_methods[0].rule.free_shipping_flag);
  } else {
    itemById.setFreeShipping(shipping.free_shipping);
  }

  itemById.setQuantity(sold_quantity);
  itemById.setCategoryId(category_id)
  
  return itemById;
};


module.exports = { FormatSearch, FormatItem };
